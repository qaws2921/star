
window.onload = function () {
    new Vue({
        el:"#app",
        data: function () {
            return{
                supp_name:'',
                keyword:{
                    keyword:'',
                    keyword2:'',
                    keyword3:'',
                    keyword4:'',
                },
                keyword_post:{
                    keyword:'',
                    keyword2:'',
                    keyword3:'',
                    keyword4:'',
                },
                lastsel2:'',
            }
        },
        mounted: function(){
            var _this = this;

            jquery_scmInFromDC(_this); // vue 에서 실행 못하는 jquery
            jqgrid_au_modal(_this);

        },
        methods:{
            main_gat_btn:function (page) { // 조회 버튼
                var _this = this;
                if (_this.effectiveness2()){
                    _this.keyword_post.keyword = _this.keyword.keyword;
                    $('#jqGrid').setGridParam({ url: 'scmInFromDC/SP_SCM_IN_READY_GET',postData: _this.keyword_post ,datatype: "json"}).trigger("reloadGrid");
                }
            },
            main_in_push:function () { //삭제를 누를시
                var _this = this;
                if (_this.effectiveness()){


                    if ($("#"+_this.lastsel2+"_in_qty").val()){
                        var data = $('#jqGrid').jqGrid('getRowData', lastsel2);
                        if (isNaN($("#"+_this.lastsel2+"_in_qty").val())){
                            alert("숫자만 가능합니다.");
                            return false;
                        } else if($("#"+_this.lastsel2+"_in_qty").val()>$('#jqGrid').jqGrid('getRowData', _this.lastsel2).order_qty){
                            alert("입고수량이 초과했습니다.");
                            return false;
                        }
                    }
                    var ids = jQuery("#jqGrid").jqGrid("getDataIDs");
                    var part_code = ids.join(",");
                    if (part_code === ''){
                        alert("입고처리 데이터가 없습니다.");
                    } else {
                        if (confirm("입고처리 하시겠습니까?")){
                            var data;
                            var order_qty = '';
                            var bad_qty = '';
                            var in_qty = '';
                            for(var i = 0; i < ids.length;i++){
                                data = $('#jqGrid').jqGrid('getRowData', ids[i]);
                                if (i === 0){
                                    order_qty += data.order_qty;
                                    bad_qty += data.bad_qty;
                                    in_qty += data.in_qty;
                                } else {
                                    order_qty += ","+data.order_qty;
                                    bad_qty += ","+data.bad_qty;
                                    in_qty += ","+data.in_qty;
                                }
                            }

                            callback(function () {
                                _this.main_in_push_ajax(part_code,order_qty,bad_qty,in_qty);
                            });
                        }

                    }
                }
            },
            main_in_push_ajax:function (part_code,order_qty,bad_qty,in_qty) {  // 삭제 ajax
                wrapWindowByMask();
                 var _this = this;
                 var data = {
                   dc_no:_this.keyword_post.keyword,
                   supp_code:_this.keyword_post.keyword2,
                   work_date:_this.keyword_post.keyword3,
                   remark:_this.keyword_post.keyword4,
                     part_code:part_code,
                     order_qty_s:order_qty,
                     bad_qty_s:bad_qty,
                     in_qty_s:in_qty
                 };
                 $.ajax({
                    url:"scmInFromDC/SP_SCM_IN_ADD",
                    data:data,
                    type : 'POST',
                    async: true,
                    dataType : "json",
                    success : function(data){
                        if (data.result === 'NG'){
                            closeWindowByMask();
                            alert(data.message);
                        } else {
                            closeWindowByMask();
                            $("#jqGrid").jqGrid('clearGridData');
                            _this.reset();
                        }

                        },
                     error: function () {
                         closeWindowByMask();
                         alert("입고실패");
                     }

                });
            },
            reset:function(){ //코드 객체 리셋
                var _this = this;
                _this.keyword={
                    keyword:'',
                    keyword2:''
                };
                _this.keyword_post={
                    keyword:'',
                    keyword2:'',
                    keyword3:'',
                    keyword4:''
                };
                _this.supp_name = '';

            },

            effectiveness:function () { // 유효성 검사
                var _this = this;
                if (_this.keyword_post.keyword3 === ''){
                    alert("날짜를 입력해주세요");
                    return false;
                }else if (_this.keyword_post.keyword4 === ''){
                    alert("비고를 입력해주세요");
                    return false;

                }else {
                    return true;
                }
            },
            effectiveness2:function () { // 유효성 검사
                var _this = this;
                if (_this.keyword.keyword === ''){
                    alert("전표번호를 입력해주세요");
                    return false;
                }else {
                    return true;
                }
            },


        }
    });
}
function callback(cb) {
    cb();
}
