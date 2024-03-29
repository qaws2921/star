Vue.prototype.EventBus = new Vue();

window.onload = function () {
    new Vue({
        el:"#app",
        data: function () {
            return{
                sys_part_group:[],
                sys_common:[],
                sys_cargo_cd:[],
                sys_loc_cd:[],
                sys_common_unit:[],

                sys_part_group_code:'',
                sys_part_group_code_post:'',
                part_code:'',
                part_code_post:'',
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
                     keyword:''
                },

                add_update_check:'I'    // 저장인지 수정인지 체크
            }
        },
        mounted: function(){

            var _this = this;

            _this.sys_part_group_get();
            _this.sys_common_get();
            _this.sys_common_unit_get();
            _this.sys_carogo_cd_get();


            _this.jqGrid(); // jqGrid 실행

            _this.selectBox(); // select2 실행
            jquery_scmPart(_this); // vue 에서 실행 못하는 jquery
        },
        created:function() {
            this.EventBus.$on('supp', this.supp_bus);
        },
        methods:{
            _test2:function(test2,test3){
                alert(test2);
                alert(test3);
            },
            supp_bus:function(code,name){
                var _this =this;
                _this.sys_bPart_cd.supp_code = code;
                _this.sys_bPart_cd.supp_name = name;

            },
             jqGrid:function(){ // jqGrid 메소드
                 var _this = this;
            var grid = $("#jqGrid");
                grid.jqGrid({
                    datatype: "json",
                    mtype: 'POST',
                    colNames:['코드그룹','품목구분','품목코드','품목명','보관창고','보관로케이션','업체명','등급','규격','단위','재고최대','재고최소','사용자','수정일'],
                    colModel:[
                        {name:'part_grp_code',index:'part_grp_code',width:100,sortable: false, width:150},
                        {name:'part_type',index:'part_type',width:100,sortable: false, width:150},
                        {name:'part_code',index:'part_code',width:100,key: true ,sortable: false, width:150},
                        {name:'part_name',index:'part_name',width:100,sortable: false, width:150},
                        {name:'cargo_code',index:'cargo_code',width:100,sortable: false, width:150},
                        {name:'loc_code',index:'loc_code',width:100,sortable: false, width:150},
                        {name:'supp_code',index:'supp_code',width:100,sortable: false, width:150},
                        {name:'spec1',index:'spec1',width:100,sortable: false, width:150},
                        {name:'spec',index:'spec',width:100,sortable: false, width:150},
                        {name:'unit_code',index:'unit_code',width:100,sortable: false, width:150},
                        {name:'max_qty',index:'max_qty',width:100,sortable: false, width:150},
                        {name:'min_qty',index:'min_qty',width:100,sortable: false, width:150},
                        {name:'user_name',index:'user_name',width:100,sortable: false, width:150},
                        {name:'update_date',index:'update_date',width:100,formatter:formmatter_date,sortable: false, width:150},
                    ],
                    autowidth: true,
                    shrinkToFit:false,
                    height:450,
                    pager:'#jqGridPager',
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
                        var data = $('#jqGrid').jqGrid('getRowData', rowid); // 그 셀에 해당되는 데이터
                        _this.scmPart_edit(data); // 데이터 가공
                        _this.scmPart_update(); // 수정창 띄어주기

                    }

                }).navGrid("#jqGridPager", { search: false, add: false, edit: false, del: false});


             },
            selectBox:function(){  // select2 실행 메소드
                $("#scm_part_select1").select2();
                $("#part_group_select").val("").select2();
                $("#common_select").val("").select2();
                $("#cargo_select").val("").select2();
                $("#loc_select").val("").select2();
                $("#common_unit_select").val("").select2();

            },
            selectBox_update:function(part,common,cargo,loc,common_u){  // select2 실행 메소드
                var _this= this;
                $("#part_group_select").val(part).select2();
                $("#common_select").val(common).select2();
                $("#cargo_select").val(cargo).select2();
                $("#common_unit_select").val(common_u).select2();
                _this.sys_loc_cd_get(cargo);

                callback(function () {
                    $("#loc_select").val(loc).select2();

                })

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
            sys_common_get:function(){
                var _this = this;
                $.ajax({
                    url: "common/common/get",
                    type: 'POST',
                    data:{keyword:"PART_TYPE"},
                    async: true,
                    dataType: "json",
                    success: function (data) {
                        _this.sys_common = data;
                    },
                    error: function () {

                    }
                });

            },
            sys_carogo_cd_get:function(){
                var _this = this;
                $.ajax({
                    url: "common/cargo/cd/get",
                    type: 'POST',
                    async: true,
                    dataType: "json",
                    success: function (data) {
                        _this.sys_cargo_cd = data;
                    },
                    error: function () {

                    }
                });

            },
            sys_loc_cd_get:function(keyword){
                var _this = this;
                $.ajax({
                    url: "common/loc/cd/get",
                    type: 'POST',
                    data:{keyword:keyword},
                    async: true,
                    dataType: "json",
                    success: function (data) {
                        _this.sys_loc_cd = data;
                    },
                    error: function () {

                    }
                });

            },
            sys_common_unit_get:function(){
                var _this = this;
                $.ajax({
                    url: "common/common/get",
                    type: 'POST',
                    data:{keyword:"UNIT"},
                    async: true,
                    dataType: "json",
                    success: function (data) {
                        _this.sys_common_unit = data;
                    },
                    error: function () {

                    }
                });

            },

            part_group_change:function(code,name){ // select 박스 바뀔때
                var _this = this;
                 _this.sys_part_group_code = code;

            },
            bPart_get_btn:function (page) { // 조회 버튼
                var _this = this;
                _this.sys_part_group_code_post =_this.sys_part_group_code;
                _this.part_code_post =_this.part_code;

                $('#jqGrid').setGridParam({ url: 'scmPart/bPart/get',postData: { keyword: _this.sys_part_group_code_post,keyword2:_this.part_code_post} ,datatype: "json", page: page}).trigger("reloadGrid");

            },
            bPart_get_btn2:function (page) { // 조회 버튼
                var _this = this;

                $('#jqGrid').setGridParam({ url: 'scmPart/bPart/get',postData: { keyword: _this.sys_part_group_code_post,keyword2:_this.part_code_post} ,datatype: "json", page: page}).trigger("reloadGrid");

            },
            scmPart_au:function (au) { // 저장 수정 ajax
                var _this = this
                var txt ='저장 히겠습니까?';
                if (au === 'U'){
                    var txt ='수정 히겠습니까?';

                }
                if(confirm(txt)){
                    if (_this.effectiveness()) {
                        _this.sys_bPart_cd.keyword = au;
                        $.ajax({
                            url: "scmPart/au",
                            data: _this.sys_bPart_cd,
                            type: 'POST',
                            async: true,
                            dataType: "json",
                            success: function (data) {
                                if (data.result === 'NG'){
                                    alert(data.message);
                                } else {
                                    $('#myModal').modal("hide");
                                    if (au === 'I') {
                                        _this.bPart_get_btn($("#jqGrid").getGridParam('page'));

                                    } else {

                                        _this.bPart_get_btn2($("#jqGrid").getGridParam('page'));
                                    }
                                }
                            },
                            error: function () {
                                if (au === 'I') {
                                    alert("저장실패");

                                } else {

                                    alert("수정실패");
                                }
                            }
                        });
                    }
                }
            },
            _sys_bPart_cd_reset:function(){ //코드 객체 리셋
                 var _this = this;
                 _this.sys_bPart_cd = {
                     part_code:'',
                     part_name:'',
                     alc_code:'',
                     part_grp_code:'',
                     part_type:'',
                     cargo_code:'',
                     loc_code:'',
                     supp_code:'',
                     spec:'',
                     unit_code:'',
                     pack_qty:0,
                     max_qty:'',
                     min_qty:'',
                     user_code:'',
                     user_name:'',
                     create_date:'',
                     update_date:'',
                     keyword:''
                 };

            },
            scmPart_update:function () { // 업데이트 모달창
                var _this = this;
                _this.add_update_check="U";
                _this.selectBox_update(_this.sys_bPart_cd.part_grp_code, _this.sys_bPart_cd.part_type, _this.sys_bPart_cd.cargo_code,_this.sys_bPart_cd.loc_code,_this.sys_bPart_cd.unit_code);
                $('#myModal').modal("show");
            },
            scmPart_add:function () {    // 추가를 누를때
                var _this = this;
                _this.add_update_check="I";
                _this._sys_bPart_cd_reset();
                _this.selectBox();
                _this.sys_loc_cd=[];
                $("#part_group_select").val(_this.sys_part_group_code).select2();


            },
            scmPart_edit:function (data) {   // 수정 값을 객체에 저장
                var _this = this;
                _this._sys_bPart_cd_reset();
                _this.sys_bPart_cd.part_grp_code = data.part_grp_code;
                _this.sys_bPart_cd.part_code = data.part_code;
                _this.sys_bPart_cd.part_name = data.part_name;
                _this.sys_bPart_cd.part_type = data.part_type;
                _this.sys_bPart_cd.cargo_code = data.cargo_code;
                _this.sys_bPart_cd.loc_code = data.loc_code;
                _this.sys_bPart_cd.supp_code = data.supp_code;
                _this.sys_bPart_cd.spec = data.spec;
                _this.sys_bPart_cd.unit_code = data.unit_code;
                _this.sys_bPart_cd.max_qty = data.max_qty;
                _this.sys_bPart_cd.min_qty = data.min_qty;

            },
            scmPart_delete:function () { //삭제를 누를시
                var _this = this;
                 var ids = jQuery("#jqGrid").getGridParam('selarrrow'); //체크된 row id들을 배열로 반환
                var part_code = ids.join(",");
                if (part_code === ''){
                    alert("삭제하는 데이터를 선택해주세요");
                } else {
                    if (confirm("삭제하겠습니까?")){
                        _this.scmPart_delete_ajax(part_code);

                    }

                }
                // _this.common_group_code_post


            },
            scmPart_delete_ajax:function (part_code) {  // 삭제 ajax
                wrapWindowByMask();
                 var _this = this;
                 $.ajax({
                    url:"scmPart/delete",
                    data:{part_code:part_code},
                    type : 'DELETE',
                    async: true,
                    dataType : "json",
                    success : function(data){
                        if (data.result === 'NG'){
                            closeWindowByMask();
                            alert(data.message);
                        } else {
                            closeWindowByMask();
                            _this.bPart_get_btn2($("#jqGrid").getGridParam('page'));
                        }

                        },
                     error: function () {
                         closeWindowByMask();
                         alert("삭제실패")
                     }

                });
            },

            effectiveness:function () { // 유효성 검사
                var _this = this;
                // if (_this.sys_common.code_value === ''){
                //     alert("코드를 입력해주세요");
                //     return false;
                // }else if (_this.sys_common.code_name1 === ''){
                //     alert("명칭1을 입력해주세요");
                //     return false;
                //
                // }else {
                //     return true;
                // }
                return true;
            }

        }
    });
}
function callback(cb) {
    cb();
}
