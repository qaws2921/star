window.onload = function () {
    new Vue({
        el:"#app",
        data: function () {
            return{
                menu_group_list:[], // 코드그룹 리스트
                menu_group_code:'',
                auth_code:'',
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
            _this.jqGrid(); // jqGrid 실행
            _this.jqGrid2(); // jqGrid 실행
            _this.menu_group_get(); // 코드그룹 가져오기
            _this.selectBox(); // select2 실행
            jquery_sysAuthProgram(_this); // vue 에서 실행 못하는 jquery




        },
        methods:{
            jqGrid2:function(){
            var _this = this;
                var grid = $("#jqGrid2");
                grid.jqGrid({

                    url:'sysAuth/auth/cd/get',
                    datatype: "json",
                    mtype: 'POST',
                    colNames:['권한그룹명','권한그룹코드'],
                    colModel:[
                        {name:'auth_name',index:'auth_name'},
                        {name:'auth_code',index:'auth_code',hidden:true,key: true},




                    ],
                    width:500,
                    height:500,
                    caption: "권한그룹명",

                    jsonReader: {cell:""},

                    viewrecords: true,

                    onCellSelect: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
                       _this.auth_code = $("#jqGrid2").jqGrid('getRowData', rowid).auth_code;
                        _this.menu_get_btn();

                    }

                }).navGrid("#jqGridPager", { search: false, add: false, edit: false, del: false});

            },
             jqGrid:function(){ // jqGrid 메소드
                 var _this = this;
            var grid = $("#jqGrid");
                grid.jqGrid({


                    datatype: "json",
                    mtype: 'POST',
                    colNames:['code','메뉴','조회','추가','수정','삭제'],
                    colModel:[
                        {name:'menu_code',index:'menu_code',key: true,hidden:true},
                        {name:'menu_name',index:'menu_name',width:500,formatter:cell},
                        {name:'check_get',index:'check_get', editable: true, formatter: 'checkbox', edittype:"checkbox", editoptions:{value:'Y:N', defaultValue:'N'}, formatoptions:{disabled:false}},
                        {name:'check_add',index:'check_add', editable: true,formatter: 'checkbox', edittype:"checkbox", editoptions:{value:'Y:N', defaultValue:'N'}, formatoptions:{disabled:false}},
                        {name:'check_edit',index:'check_edit', editable: true,formatter: 'checkbox', edittype:"checkbox", editoptions:{value:'Y:N', defaultValue:'N'}, formatoptions:{disabled:false}},
                        {name:'check_del',index:'check_del', editable: true,formatter: 'checkbox', edittype:"checkbox", editoptions:{value:'Y:N', defaultValue:'N'}, formatoptions:{disabled:false}},



                    ],



                    width:950,
                    height:500,
                    caption: "코드관리",

                    jsonReader: {cell:""},
                    rowNum: 100,
                    rowList: [100, 200, 300, 400],
                    viewrecords: true,

                    ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창



                    }

                }).navGrid("#jqGridPager", { search: false, add: false, edit: false, del: false});

             },
            selectBox:function(){  // select2 실행 메소드
                 $("#menu_group_select").select2();
            },
            menu_group_get:function(){ // 코드그룹 가져오는 메소드
                 var _this =this;
                 axios
                     .post("menu/group/get")
                     .then(function(response){
                        _this.menu_group_list = response.data;
                        _this.menu_group_code = response.data[0].menu_code;



                 });
            },
            menu_group_change:function(code,name){ // select 박스 바뀔때
                var _this = this;
                 _this.menu_group_code = code;
                 _this. menu_get_btn();
                 _this.sys_common.code_type=code;

                 _this.common_group_name = name;

            },
            menu_get_btn:function () { // 조회 버튼
                var _this = this;

                $('#jqGrid').setGridParam({ url: 'menu/cd/program/get',postData: { menu_code: _this.menu_group_code,auth_code:_this.auth_code} ,datatype: "json"}).trigger("reloadGrid");

            },
            common_au:function (au) { // 저장 수정 ajax
                var _this = this
                var txt ='저장 히겠습니까?';
                if (au === 'U'){
                    var txt ='수정 히겠습니까?';

                }
                if(confirm(txt)){
                    if (_this.effectiveness()) {
                        _this.sys_common.keyword = au;
                        $.ajax({
                            url: "sysCommon/common/au",
                            data: _this.sys_common,
                            type: 'POST',
                            async: true,
                            dataType: "json",
                            success: function (data) {

                                $('#myModal').modal("hide");
                                _this.menu_get_btn();

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
            common_update:function () { // 업데이트 모달창
                var _this = this;
                _this.add_update_check="U";

                $('#myModal').modal("show");
            },
            common_add:function () {    // 추가를 누를때
                var _this = this;
                _this.add_update_check="I";
                _this._sys_common_reset();

            },
            common_edit:function (data) {   // 수정 값을 객체에 저장
                var _this = this;
                _this._sys_common_reset();
                _this.sys_common.code_type=data.code_type;
                _this.sys_common.code_value=data.code_value;
                _this.sys_common.code_name1=data.code_name1;
                _this.sys_common.code_name2=data.code_name2;
                _this.sys_common.code_name3=data.code_name3;
                _this.sys_common.code_name4=data.code_name4;
                _this.sys_common.code_name5=data.code_name5;
                _this.sys_common.code_name6=data.code_name6;
                _this.sys_common.code_name6=data.code_name7;
                _this.sys_common.code_name8=data.code_name8;
                _this.sys_common.use_yn=data.use_yn;
            },
            common_delete:function () { //삭제를 누를시
                var _this = this;
                 var ids = jQuery("#jqGrid").getGridParam('selarrrow'); //체크된 row id들을 배열로 반환
                var code_value = ids.join(",");
                if (code_value === ''){
                    alert("삭제하는 데이터를 선택해주세요");
                } else {
                    if (confirm("삭제하겠습니까?")){
                        _this.common_delete_ajax(_this.common_group_code_post,code_value);

                    }

                }
                // _this.common_group_code_post


            },
            common_delete_ajax:function (type,value) {  // 삭제 ajax
                var _this = this;
                 $.ajax({
                    url:"sysCommon/common/delete",
                    data:{code_type:type , code_value:value},
                    type : 'DELETE',
                    async: true,
                    dataType : "json",
                    success : function(data){
                        _this.menu_get_btn();
                    },
                     error: function () {
                         alert("삭제실패")
                     }

                });
            },

            effectiveness:function () { // 유효성 검사
                var _this = this;
                if (_this.sys_common.code_value === ''){
                    alert("코드를 입력해주세요");
                    return false;
                }else if (_this.sys_common.code_name1 === ''){
                    alert("명칭1을 입력해주세요");
                    return false;

                }else {
                    return true;
                }
            },
            menu_cd_add:function () {
                var _this =this;
                var ids = $("#jqGrid").jqGrid('getDataIDs');
                var rows = {};
                for (i=0 ; i < ids.length; i++){
                   rows = $( "#jqGrid" ).jqGrid('getRowData', ids[i]);

                   rows.auth_code = _this.auth_code;
                   console.log(rows);
                    callback(function () {
                        $.ajax({
                            url: "auth/program/add",
                            data: rows,
                            type: 'POST',
                            async: false,
                            dataType: "json",
                            success: function (data) {


                            },
                            error: function () {
                              alert("실패");
                            }
                        });
                    })

                }
                callback(function () {
                    _this.menu_get_btn();

                })
            }

        }
    });
}
function callback(cb) {
    cb();
}
