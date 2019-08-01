window.onload = function () {
    new Vue({
        el:"#app",
        data: function () {
            return{
                common_cargo_type_get:[],
                common_cargo_type_code:'',
                common_cargo_type_code_post:'',
                common_cargo_type_name:'',
                common_cargo_type_name_other:'',
                sys_cargo_cd:{
                    cargo_code:'',
                    cargo_name:'',
                    cargo_grp_code:'',
                    qty_yn:'Y',
                    use_yn:'Y',
                    user_code:'',
                    create_date:'',
                    update_date:'',
                    user_name:'',
                    keyword:''
                },

                add_update_check:'I'    // 저장인지 수정인지 체크
            }
        },
        mounted: function(){

            var _this = this;
            _this._common_cargo_type_get();

            _this.jqGrid(); // jqGrid 실행
            _this.selectBox(); // select2 실행
            jquery_scmCargo(_this); // vue 에서 실행 못하는 jquery



        },
        methods:{
             jqGrid:function(){ // jqGrid 메소드
                 var _this = this;
            var grid = $("#jqGrid");
                grid.jqGrid({


                    datatype: "json",
                    mtype: 'POST',
                    colNames:['구분','창고코드','창고명','수량관리','활성','등록자','등록일'],
                    colModel:[
                        {name:'cargo_grp_code',index:'cargo_grp_code' ,sortable: false,width:200},
                        {name:'cargo_code',index:'cargo_code',key: true,sortable: false,width:220},
                        {name:'cargo_name',index:'cargo_name',sortable: false,width:250},
                        {name:'qty_yn',index:'qty_yn',sortable: false,width:200},
                        {name:'use_yn',index:'use_yn',sortable: false,width:200},
                        {name:'user_name',index:'user_name',sortable: false,width:200},
                        {name:'update_date',index:'update_date',formatter:formmatter_date,sortable: false,width:200},
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
                        _this.cargo_cd_edit(data); // 데이터 가공
                        _this.cargo_cd_update(); // 수정창 띄어주기

                    }

                }).navGrid("#jqGridPager", { search: false, add: false, edit: false, del: false});


             },
            selectBox:function(){  // select2 실행 메소드
                 $("#common_cargo_type_select").select2();

            },
            _common_cargo_type_get:function(){
                var _this = this;
                $.ajax({
                    url: "scmCargo/common/cargo/type/get",
                    type: 'POST',
                    async: true,
                    dataType: "json",
                    success: function (data) {
                        _this.common_cargo_type_get = data;
                        _this.common_cargo_type_code = data[0].code_value;
                        _this.common_cargo_type_name = data[0].code_name1;

                    },
                    error: function () {
                        alert("실패");

                    }
                })

            },


            common_cargo_type_change:function(code,name){ // select 박스 바뀔때
                var _this = this;
                 _this.common_cargo_type_code = code;
                 _this.common_cargo_type_name = name;
            },
            cargo_type_get_btn:function (page) { // 조회 버튼
                var _this = this;
                _this.common_cargo_type_code_post =_this.common_cargo_type_code;
                $('#jqGrid').setGridParam({ url: 'scmCargo/cargo/cd/get',postData: { cargo_grp_code: _this.common_cargo_type_code_post} ,datatype: "json", page: page}).trigger("reloadGrid");

            },
            cargo_type_get_btn2:function (page) { // 조회 버튼
                var _this = this;
                $('#jqGrid').setGridParam({ url: 'scmCargo/cargo/cd/get',postData: { cargo_grp_code: _this.common_cargo_type_code_post} ,datatype: "json", page: page}).trigger("reloadGrid");

            },
            cargo_cd_au:function (au) { // 저장 수정 ajax
                var _this = this
                var txt ='저장 히겠습니까?';
                if (au === 'U'){
                    var txt ='수정 히겠습니까?';

                }
                if(confirm(txt)){
                    if (_this.effectiveness()) {
                        _this.sys_cargo_cd.keyword = au;
                        $.ajax({
                            url: "scmCargo/cargo/cd/au",
                            data: _this.sys_cargo_cd,
                            type: 'POST',
                            async: true,
                            dataType: "json",
                            success: function (data) {
                                if (data.result === 'NG'){
                                    alert(data.message);
                                } else {
                                    $('#myModal').modal("hide");
                                    if (au === 'I') {
                                        _this.cargo_type_get_btn($("#jqGrid").getGridParam('page'));

                                    } else {

                                        _this.cargo_type_get_btn2($("#jqGrid").getGridParam('page'));
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
            _sys_cargo_cd_reset:function(){ //코드 객체 리셋
                 var _this = this;
                _this.sys_cargo_cd={
                    cargo_code:'',
                    cargo_name:'',
                    cargo_grp_code:'',
                    qty_yn:'Y',
                    use_yn:'Y',
                    user_code:'',
                    create_date:'',
                    update_date:'',
                    user_name:'',
                    keyword:''
                }

            },
            cargo_cd_update:function () { // 업데이트 모달창
                var _this = this;
                _this.add_update_check="U";
                var cargo_grp_code = _this.sys_cargo_cd.cargo_grp_code;
                for (i=0;i < _this.common_cargo_type_get.length; i++){
                    if (cargo_grp_code === _this.common_cargo_type_get[i].code_value){
                        _this.common_cargo_type_name_other = this.common_cargo_type_get[i].code_name1;
                    }
                }
                _this.sys_cargo_cd.cargo_grp_code = _this.common_cargo_type_code_post;
                $('#myModal').modal("show");


            },
            cargo_cd_add:function () {    // 추가를 누를때
                var _this = this;
                _this.add_update_check="I";
                _this._sys_cargo_cd_reset();
                _this.sys_cargo_cd.cargo_grp_code = _this.common_cargo_type_code;


            },
            cargo_cd_edit:function (data) {   // 수정 값을 객체에 저장
                var _this = this;
                _this._sys_cargo_cd_reset();
                _this.sys_cargo_cd.cargo_grp_code=data.cargo_grp_code;
                _this.sys_cargo_cd.cargo_code=data.cargo_code;
                _this.sys_cargo_cd.cargo_name=data.cargo_name;
                _this.sys_cargo_cd.qty_yn=data.qty_yn;
                _this.sys_cargo_cd.use_yn=data.use_yn;
            },
            cargo_cd_delete:function () { //삭제를 누를시
                var _this = this;
                 var ids = jQuery("#jqGrid").getGridParam('selarrrow'); //체크된 row id들을 배열로 반환
                var code = ids.join(",");
                if (code === ''){
                    alert("삭제하는 데이터를 선택해주세요");
                } else {
                    if (confirm("삭제하겠습니까?")){
                        _this.cargo_cd_delete_ajax(code);

                    }

                }



            },
            cargo_cd_delete_ajax:function (code) {  // 삭제 ajax
                wrapWindowByMask();
                var _this = this;
                 $.ajax({
                    url:"scmCargo/cargo/cd/delete",
                    data:{cargo_code:code},
                    type : 'DELETE',
                    async: true,
                    dataType : "json",
                    success : function(data){
                        if (data.result === 'NG'){
                            closeWindowByMask();
                            alert(data.message);
                        } else {
                            closeWindowByMask();
                            _this.cargo_type_get_btn2($("#jqGrid").getGridParam('page'));
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

                if (_this.sys_cargo_cd.cargo_grp_code === ''){
                    alert("구분을 입력해주세요");
                    return false;
                } else if (_this.sys_cargo_cd.cargo_code === ''){
                    alert("창고코드를 입력해주세요");
                    return false;
                } else if (_this.sys_cargo_cd.cargo_name === ''){
                    alert("창고명을 입력해주세요");
                    return false;
                } else {

                    return true;
                }

            }

        }
    });
}
