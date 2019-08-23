Vue.prototype.EventBus = new Vue();


window.onload = function () {
    new Vue({
        el:"#app",
        data: function () {
            return{
                modal_list:[],
                keyword:{
                    date:'',
                    keyword:'',
                    keyword2:''

                },
                sys_part_group:[],
                supp_name:'',
                common_group_list:[], // 코드그룹 리스트
                common_group_code:'', // 코드그룹 코드
                common_group_name:'', // 코드그룹 값
                common_group_code_post:'', // 코드그룹 코드 조회 데이터
                sys_common:{        // 코드 객체
                    code_type:"",
                    code_value:"",
                    code_name1:"",
                    code_name2:"",
                    code_name3:"",
                    code_name4:"",
                    code_name5:"",
                    code_name6:"",
                    code_name7:"",
                    code_name8:"",
                    use_yn:"Y",
                    user_name:"",
                    update_date:"",
                    keyword:""
                },
                sys_bPart_cd:{
                    part_code:'',
                    part_name:'',
                    alc_code:'',
                    part_grp_code:'',
                    part_type:'',
                    cargo_code:'',
                    loc_code:'',
                    supp_code:'',
                    supp_name:'',
                    spec:'',
                    unit_code:'',
                    pack_qty:0,
                    max_qty:'',
                    min_qty:'',
                    user_code:'',
                    user_name:'',
                    create_date:'',
                    update_date:'',
                    keyword:'',
                    qty:'',
                    lot_no:''
                }
            }
        },
        mounted: function(){
            var _this = this;
            _this.sys_part_group_get();
            _this.selectBox();
            _this.common_group_get(); // 코드그룹 가져오기
            jquery_scmDCBox(_this); // vue 에서 실행 못하는 jquery
            _this.jqGrid1(); // jqGrid 실행
            _this.jqGrid2(); // jqGrid 실행

        },
        created:function() {
            this.EventBus.$on('supp', this.supp_bus);
        },
        methods:{
            btn_up:function(){
                var _this =this;
                var ids2 = $("#jqGrid2").getGridParam('selarrrow').slice();

                for (var i =0; i<ids2.length;i++) {

                    $('#jqGrid2').jqGrid('delRowData', ids2[i]);
                }
                $('#jqGrid2').jqGrid("resetSelection");


            },
            btn_down:function(){
                var _this =this;
                var ids = $("#jqGrid1").getGridParam('selarrrow').slice();

                var ids2 = $("#jqGrid2").jqGrid("getDataIDs");
                var overlap = 0;

                for (var i =0; i<ids.length;i++){
                    for (var j =0; j<ids2.length;j++){
                        if (ids[i] === ids2[j]){
                            ids.splice(i,1);
                            overlap++;
                        }

                    }
                }
                var data;
                for (var i =0; i<ids.length;i++){

                    data = $('#jqGrid1').jqGrid('getRowData', ids[i]);
                    _this.modal_list.push(data);

                }
                callback(function () {

                    if (overlap !== 0){
                        alert(overlap+"개 중복");
                    }

                    for(var i =0; i<_this.modal_list.length;i++){

                        $('#jqGrid2').jqGrid('addRowData',_this.modal_list[i].part_code,_this.modal_list[i]);

                    }
                    $('#jqGrid1').jqGrid("resetSelection");

                    _this.modal_list = [];

                    // $('#scmDC_au_modal2').clearGridData();
                    // $('#scmDC_au_modal2').addJSONData(_this.modal_list);


                });
            },
            supp_bus:function(code,name){
                var _this =this;
                _this.keyword.keyword = code;
                _this.supp_name = name;
            },
            jqGrid1:function(){ // jqGrid 메소드
                var _this = this;
                var grid = $("#jqGrid1");
                grid.jqGrid({
                    datatype: "json",
                    mtype: 'POST',
                    colNames:['품목그룹','품번','품명','규격','단위','포장'],
                    colModel:[
                        {name:'part_grp_code',index:'part_grp_code',width:50,sortable: false,width:100,align:'center'},
                        {name:'part_code',index:'part_code',width:100,key: true ,sortable: false,width:100,align:'center'},
                        {name:'part_name',index:'part_name',width:100,sortable: false,width:100,align:'center'},
                        {name:'spec',index:'spec',width:100,sortable: false,width:100,align:'center'},
                        {name:'unit_code',index:'unit_code',width:100,sortable: false,width:100,align:'center'},
                        {name:'pack_qty',index:'pack_qty',width:100,sortable: false,width:100,align:'center'},
                    ],
                    autowidth: true,
                    shrinkToFit:false,
                    height:500,
                    pager:'#jqGridPager1',
                    jsonReader: {cell:""},
                    rowNum: 100,
                    rowList: [100, 200, 300, 400],
                    viewrecords: true,
                    multiselect:true,
                    // beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
                    //     var $myGrid = $(this),
                    //         i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                    //         cm = $myGrid.jqGrid('getGridParam', 'colModel');
                    //     return (cm[i].name === 'cb');
                    // },
                }).navGrid("#jqGridPager1", { search: false, add: false, edit: false, del: false});
            },

            jqGrid2:function(){ // jqGrid 메소드
                var lastsel2;
                var _this = this;
                var grid = $("#jqGrid2");
                grid.jqGrid({
                    editurl: 'clientArray',
                    datatype: "json",
                    mtype: 'POST',
                    colNames:['품목그룹','품번','품명','규격','단위','포장','수량','LOT/NO','사이즈',''],
                    colModel:[
                        {name:'part_grp_code',index:'part_grp_code',width:50,sortable: false,width:100,align:'center'},
                        {name:'part_code',index:'part_code',width:100,key: true ,sortable: false,width:100,align:'center'},
                        {name:'part_name',index:'part_name',width:100,sortable: false,width:100,align:'center'},
                        {name:'spec',index:'spec',width:100,sortable: false,width:100,align:'center'},
                        {name:'unit_code',index:'unit_code',width:100,sortable: false,width:100,align:'center'},
                        {name:'pack_qty',index:'pack_qty',width:100,sortable: false,width:100,align:'center'},
                        {name:'qty',index:'qty',width:100,sortable: false,width:100,align:'center', editable: true,sorttype:"int",classes:"jqGrid2_qty",
                            // editoptions: {
                            //     dataEvents: [
                            //         {
                            //             type: 'focusout',
                            //             fn: function (e) {
                            //                 if ($("#"+lastsel2+"_qty").val()){
                            //                     if (isNaN($("#"+lastsel2+"_qty").val())){
                            //                         return false;
                            //                     }
                            //                 }
                            //                 grid.jqGrid('saveRow', lastsel2);
                            //             }
                            //         }
                            //     ]
                            // }
                        },
                        {name:'lot_no',index:'lot_no',width:100,sortable: false,width:100,align:'center', editable: true,sorttype:"int",classes:"jqGrid2_lot_no"},
                        {name:'size',index:'size',width:100,sortable: false,width:100,align:'center',editable: true,edittype:"select",editoptions:{value:"large:대;middle:중;small:소"}},
                        {name:'print',index:'part_code',width:100,sortable: false,width:100,align:'center',
                            formatter: function (cellValue, option, rowObject) {
                                return '<button>인쇄</button>';
                            }
                        },
                    ],
                    onCellSelect: function(id){
                            grid.jqGrid('restoreRow',lastsel2);
                            grid.jqGrid('editRow',id,true);
                            lastsel2=id;
                    },
                    autowidth: true,
                    shrinkToFit:false,
                    height:500,
                    pager:'#jqGridPager2',
                    jsonReader: {cell:""},
                    rowNum: 100,
                    rowList: [100, 200, 300, 400],
                    viewrecords: true,
                    multiselect:true,

                    onCellSelect: function(rowid,icol,cellcontent,e){
                        // rowid : 선택한 셀의 행 번호
                        // icol : 선택한 셀의 열 번호
                        // cellcontent : 선택한 셀의 값
                            if (icol == 7 || icol == 8)
                            {
                                if ($("#"+lastsel2+"_qty").val()){
                                    if (isNaN($("#"+lastsel2+"_qty").val())){
                                        return false;
                                }
                            }
                                grid.jqGrid('saveRow', lastsel2);
                                grid.jqGrid('editRow',rowid,{
                                    keys: true,
                                });
                            }
                            if(icol == 10)
                            {
                                var data = grid.jqGrid('getRowData',rowid)
                                scmDCBoxAdd(_this,data);
                            }
                    },
                    beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
                        var $myGrid = $(this),
                            i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                            cm = $myGrid.jqGrid('getGridParam', 'colModel');
                        return (cm[i].name === 'cb');
                    },

                }).navGrid("#jqGridPager2", { search: false, add: false, edit: false, del: false});
            },
            selectBox:function(){  // select2 실행 메소드
                $("#part_group_select").select2();
            },
            sys_part_group_get:function(){
                var _this = this;
                $.ajax({
                    url: "common/part/group/get",
                    type: 'POST',
                    async: true,
                    dataType: "json",
                    success: function (data) {
                        _this.sys_part_group = data;
                    },
                    error: function () {

                    }
                });

            },
            common_group_get:function(){ // 코드그룹 가져오는 메소드
                 var _this =this;
                 axios
                     .post("sysCommon/common/group/get")
                     .then(function(response){
                        _this.common_group_list = response.data;
                        _this.common_group_code = response.data[0].group_code;
                        _this.sys_common.code_type = response.data[0].group_code;
                        _this.common_group_name = response.data[0].group_name;
                 });
            },
            common_group_change:function(code,name){ // select 박스 바뀔때
                var _this = this;
                 _this.common_group_code = code;
                 _this.sys_common.code_type=code;
                 _this.common_group_name = name;
            },
            common_get_btn:function (page) { // 조회 버튼
                var _this = this;
                _this.common_group_code_post =_this.common_group_code;
                $('#jqGrid1').setGridParam({ url: 'scmPart/bPart/get',postData: { keyword: _this.sys_part_group_code_post,keyword2:_this.part_code_post} ,datatype: "json", page: page}).trigger("reloadGrid");
            },
            common_get_btn2:function (page) { // 조회 버튼
                var _this = this;

                $('#jqGrid1').setGridParam({ url: 'scmPart/bPart/get',postData: { keyword: _this.sys_part_group_code_post,keyword2:_this.part_code_post} ,datatype: "json", page: page}).trigger("reloadGrid");

            },

            _sys_common_reset:function(){ //코드 객체 리셋
                 var _this = this;
                _this.sys_common.code_value="";
                _this.sys_common.code_name1="";
                _this.sys_common.code_name2="";
                _this.sys_common.code_name3="";
                _this.sys_common.code_name4="";
                _this.sys_common.code_name5="";
                _this.sys_common.code_name6="";
                _this.sys_common.code_name6="";
                _this.sys_common.code_name8="";
                _this.sys_common.use_yn="Y";
            },
        }
    });
}
