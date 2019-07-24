window.onload = function () {
    new Vue({
        el:"#app",
        data: function () {
            return{
                menu_group_list:[], // 코드그룹 리스트
                menu_group_code:'',
                auth_code:'',

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
                        {name:'auth_name',index:'auth_name',sortable: false},
                        {name:'auth_code',index:'auth_code',hidden:true,key: true},



                    ],
                    page:0,
                    rowNum:0,
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
                        {name:'menu_code',index:'menu_code',key: true,hidden:true,sortable: false},
                        {name:'menu_name',index:'menu_name',width:500,formatter:cell,sortable: false},
                        {name:'check_get',index:'check_get', editable: true, formatter: 'checkbox', edittype:"checkbox", editoptions:{value:'Y:N', defaultValue:'N'}, formatoptions:{disabled:false},sortable: false},
                        {name:'check_add',index:'check_add', editable: true,formatter: 'checkbox', edittype:"checkbox", editoptions:{value:'Y:N', defaultValue:'N'}, formatoptions:{disabled:false},sortable: false},
                        {name:'check_edit',index:'check_edit', editable: true,formatter: 'checkbox', edittype:"checkbox", editoptions:{value:'Y:N', defaultValue:'N'}, formatoptions:{disabled:false},sortable: false},
                        {name:'check_del',index:'check_del', editable: true,formatter: 'checkbox', edittype:"checkbox", editoptions:{value:'Y:N', defaultValue:'N'}, formatoptions:{disabled:false},sortable: false},



                    ],



                    width:950,
                    height:500,
                    caption: "권한그룹별 프로그램관리",

                    jsonReader: {cell:""},

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


            },
            menu_get_btn:function () { // 조회 버튼
                var _this = this;

                $('#jqGrid').setGridParam({ url: 'menu/cd/program/get',postData: { menu_code: _this.menu_group_code,auth_code:_this.auth_code} ,datatype: "json"}).trigger("reloadGrid");

            },

            menu_cd_add:function () {
                var _this =this;

                if (_this.auth_code === ''){
                    alert("권한그룹명을 선택해주세요");
                }else {
                    var ids = $("#jqGrid").jqGrid('getDataIDs');
                    var rows = {};
                    for (i=0 ; i < ids.length; i++){
                       rows = $( "#jqGrid" ).jqGrid('getRowData', ids[i]);

                       rows.auth_code = _this.auth_code;

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

        }
    });
}
function callback(cb) {
    cb();
}
