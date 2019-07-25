window.onload = function () {
    new Vue({
        el:"#app",
        data: function () {
            return{

                sys_msg:{ // 메세지 코드 객체
                    msg_code:'',
                    msg_name1:'',
                    msg_name2:'',
                    msg_name3:'',
                    msg_name4:'',
                    user_code:'',
                    user_name:'',
                    update_date:'',
                    keyword:''
                },
                add_update_check:'I'    // 저장인지 수정인지 체크
            }
        },
        mounted: function(){
            var _this = this;
            _this.jqGrid(); // jqGrid 실행
            jquery_sysMsg(_this); // vue 에서 실행 못하는 jquery
        },
        methods:{
             jqGrid:function(){ // jqGrid 메소드
                 var _this = this;
            var grid = $("#jqGrid");
                grid.jqGrid({


                    datatype: "json",
                    mtype: 'POST',
                    colNames:['메세지코드','메세지명1','메세지명2','메세지명3','메세지명4','등록자','등록일'],
                    colModel:[
                        {name:'msg_code',index:'msg_code',key: true,sortable: false },
                        {name:'msg_name1',index:'msg_name1',sortable: false},
                        {name:'msg_name2',index:'msg_name2',sortable: false},
                        {name:'msg_name3',index:'msg_name3',sortable: false},
                        {name:'msg_name4',index:'msg_name4',sortable: false},
                        {name:'user_name',index:'user_name',sortable: false},
                        {name:'update_date',index:'update_date',formatter:formmatter_date,sortable: false},


                    ],
                    width:1500,
                    height:500,
                    caption: "메세지관리",
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
                        _this.msg_edit(data); // 데이터 가공
                        _this.msg_update(); // 수정창 띄어주기

                    }

                }).navGrid("#jqGridPager", { search: false, add: false, edit: false, del: false});


             },

            msg_get_btn:function (page) { // 조회 버튼
                var _this = this;

                $('#jqGrid').setGridParam({ url: 'sysMsg/msg/get' ,datatype: "json", page: page}).trigger("reloadGrid");

            },
            msg_au:function (au) { // 저장 수정 ajax
                var _this = this
                var txt ='저장 히겠습니까?';
                if (au === 'U'){
                    var txt ='수정 히겠습니까?';

                }
                if(confirm(txt)){
                    if (_this.effectiveness()) {
                        _this.sys_msg.keyword = au;
                        $.ajax({
                            url: "sysMsg/msg/au",
                            data: _this.sys_msg,
                            type: 'POST',
                            async: true,
                            dataType: "json",
                            success: function (data) {
                                if (data.result === 'NG'){
                                    alert(data.message);
                                } else {
                                    $('#myModal').modal("hide");
                                    _this.msg_get_btn($("#jqGrid").getGridParam('page'));
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
            _sys_msg_reset:function(){ //코드 객체 리셋
                 var _this = this;
                _this.sys_msg={
                    msg_code:'',
                    msg_name1:'',
                    msg_name2:'',
                    msg_name3:'',
                    msg_name4:'',
                    user_code:'',
                    user_name:'',
                    update_date:'',
                    keyword:''
                }

            },
            msg_update:function () { // 업데이트 모달창
                var _this = this;
                _this.add_update_check="U";

                $('#myModal').modal("show");
            },
            msg_add:function () {    // 추가를 누를때
                var _this = this;
                _this.add_update_check="I";
                _this._sys_msg_reset();

            },
            msg_edit:function (data) {   // 수정 값을 객체에 저장
                var _this = this;
                _this._sys_msg_reset();
                _this.sys_msg.msg_code=data.msg_code;
                _this.sys_msg.msg_name1=data.msg_name1;
                _this.sys_msg.msg_name2=data.msg_name2;
                _this.sys_msg.msg_name3=data.msg_name3;
                _this.sys_msg.msg_name4=data.msg_name4;

            },
            msg_delete:function () { //삭제를 누를시
                var _this = this;
                 var ids = jQuery("#jqGrid").getGridParam('selarrrow'); //체크된 row id들을 배열로 반환
                var code = ids.join(",");


                    if (code === ''){
                        alert("삭제하는 데이터를 선택해주세요");
                    } else {
                        if (confirm("삭제하겠습니까?")){
                            _this.msg_delete_ajax(code);

                        }

                    }

            },
            msg_delete_ajax:function (code) {  // 삭제 ajax
                wrapWindowByMask();
                 var _this = this;
                 $.ajax({
                    url:"sysMsg/msg/delete",
                    data:{msg_code:code },
                    type : 'DELETE',
                    async: true,
                    dataType : "json",
                    success : function(data){
                        if (data.result === 'NG'){
                            closeWindowByMask();
                            alert(data.message);
                        } else {
                            closeWindowByMask();
                            _this.msg_get_btn($("#jqGrid").getGridParam('page'));
                        }
                        },
                     error: function () {
                         closeWindowByMask();
                         alert("삭제실패");
                     }

                });
            },

            effectiveness:function () { // 유효성 검사
                var _this = this;
                if (_this.sys_msg.msg_code === ''){
                    alert("메세지코드를 입력해주세요");
                    return false;
                }else if (_this.sys_msg.msg_name1 === ''){
                    alert("메세지명1을 입력해주세요");
                    return false;

                }else {
                    return true;
                }
            }

        }
    });
}


function callback(cb) {
    cb();
}
