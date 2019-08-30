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
            jqGrid2(_this); // jqGrid2 실행
            jqGrid(_this); // jqGrid 실행
            _this.menu_group_get(); // 코드그룹 가져오기
            _this.selectBox(); // select2 실행
            jquery_sysAuthProgram(_this); // vue 에서 실행 못하는 jquery
        },
        methods:{
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
                 _this. main_get();
            },
            main_get:function () { // 조회 버튼
                var _this = this;
                $('#jqGrid').setGridParam({ url: 'menu/cd/program/get',postData: { menu_code: _this.menu_group_code,auth_code:_this.auth_code} ,datatype: "json"}).trigger("reloadGrid");
            },
            main_add_btn:function () {
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
                        _this.main_get();
                    })
                }
            }
        }
    });
}
function callback(cb) {
    cb();
}
