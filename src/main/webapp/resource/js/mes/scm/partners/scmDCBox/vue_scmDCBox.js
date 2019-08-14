Vue.prototype.EventBus = new Vue();

window.onload = function () {
    new Vue({
        el:"#app",
        data: function () {
            return{
                keyword:{
                    date:'',
                    keyword:'',
                    keyword2:''

                },
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
                add_update_check:'I'    // 저장인지 수정인지 체크
            }
        },
        mounted: function(){
            var _this = this;
            _this.common_group_get(); // 코드그룹 가져오기
            jquery_scmDCBox(_this); // vue 에서 실행 못하는 jquery
            _this.jqGrid1(); // jqGrid 실행
            _this.jqGrid2(); // jqGrid 실행

        },
        created:function() {
            this.EventBus.$on('supp', this.supp_bus);
        },
        methods:{
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
                    colNames:['품목그룹','품번','품명','규격','단위'],
                    colModel:[
                        {name:'code_type',index:'code_type',width:50,sortable: false,width:100,align:'center'},
                        {name:'code_value',index:'code_value',width:100,key: true ,sortable: false,width:100,align:'center'},
                        {name:'code_name1',index:'code_name1',width:100,sortable: false,width:100,align:'center'},
                        {name:'code_name2',index:'code_name2',width:100,sortable: false,width:100,align:'center'},
                        {name:'code_name8',index:'code_name8',width:100,sortable: false,width:100,align:'center'},
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
                    beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
                        var $myGrid = $(this),
                            i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                            cm = $myGrid.jqGrid('getGridParam', 'colModel');
                        return (cm[i].name === 'cb');
                    },
                    ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
                        var data = $('#jqGrid1').jqGrid('getRowData', rowid); // 그 셀에 해당되는 데이터
                        _this.common_edit(data); // 데이터 가공
                        _this.common_update(); // 수정창 띄어주기

                    }

                }).navGrid("#jqGridPager1", { search: false, add: false, edit: false, del: false});
            },
            jqGrid2:function(){ // jqGrid 메소드
                var _this = this;
                var grid = $("#jqGrid2");
                grid.jqGrid({
                    datatype: "json",
                    mtype: 'POST',
                    colNames:['품목그룹','품번','품명','규격','단위','포장','수량','LOT/NO','사이즈','인쇄'],
                    colModel:[
                        {name:'code_type',index:'code_type',width:50,sortable: false,width:100,align:'center'},
                        {name:'code_value',index:'code_value',width:100,key: true ,sortable: false,width:100,align:'center'},
                        {name:'code_name1',index:'code_name1',width:100,sortable: false,width:100,align:'center'},
                        {name:'code_name2',index:'code_name2',width:100,sortable: false,width:100,align:'center'},
                        {name:'code_name8',index:'code_name8',width:100,sortable: false,width:100,align:'center'},
                        {name:'code_name8',index:'code_name8',width:100,sortable: false,width:100,align:'center'},
                        {name:'code_name8',index:'code_name8',width:100,sortable: false,width:100,align:'center'},
                        {name:'code_name8',index:'code_name8',width:100,sortable: false,width:100,align:'center'},
                        {name:'code_name8',index:'code_name8',width:100,sortable: false,width:100,align:'center', background:'#eee'},
                        {name:'code_name8',index:'code_name8',width:100,sortable: false,width:100,align:'center'},
                    ],
                    autowidth: true,
                    shrinkToFit:false,
                    height:500,
                    pager:'#jqGridPager2',
                    jsonReader: {cell:""},
                    rowNum: 100,
                    rowList: [100, 200, 300, 400],
                    viewrecords: true,
                    multiselect:true,
                    beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
                        var $myGrid = $(this),
                            i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                            cm = $myGrid.jqGrid('getGridParam', 'colModel');
                        return (cm[i].name === 'cb');
                    },
                    ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
                        var data = $('#jqGrid2').jqGrid('getRowData', rowid); // 그 셀에 해당되는 데이터
                        _this.common_edit(data); // 데이터 가공
                        _this.common_update(); // 수정창 띄어주기

                    }

                }).navGrid("#jqGridPager2", { search: false, add: false, edit: false, del: false});
            },
            selectBox:function(){  // select2 실행 메소드
                 $("#common_group_select").select2();
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

                $('#jqGrid1').setGridParam({ url: 'scmDCBox/SP_SYS_BPART_GET',postData: { code_type: _this.common_group_code_post} ,datatype: "json", page: page}).trigger("reloadGrid");

            },
            common_get_btn2:function (page) { // 조회 버튼
                var _this = this;

                $('#jqGrid1').setGridParam({ url: 'sysCommon/common/get',postData: { code_type: _this.common_group_code_post} ,datatype: "json", page: page}).trigger("reloadGrid");

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
