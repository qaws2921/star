Vue.prototype.EventBus = new Vue();

window.onload = function () {
    new Vue({
        el:"#app",
        data: function () {
            return{
                sys_cargo_cd:[],

                keyword:{
                    start_date:'',
                    end_date:'',
                    keyword:'',
                    keyword2:'',



                },
                keyword_post:{
                    start_date:'',
                    end_date:'',
                    keyword:'',
                    keyword2:'',
                },

                supp_code:'',
                supp_name:'',

                add_update_check:'I',    // 저장인지 수정인지 체크
                supp_bus_check:''
            }
        },
        watch: {

            supp_code: function () {
                if(this.add_update_check === 'I'){

                    $("#au_modal2").jqGrid('clearGridData');
                }

            }
        },


        mounted: function(){
            var _this = this;
            _this.sys_carogo_cd_get(); // 코드그룹 가져오기
            jquery_scmStockRetList(_this); // vue 에서 실행 못하는 jquery
            _this.selectBox();
            jqgrid_au_modal(_this);


        },
        created:function() {
            this.EventBus.$on('supp', this.supp_bus);
        },
        methods:{
            main_get_btn:function (page) { // 조회 버튼
                var _this = this;
                if ( _this.effectiveness2()){

                _this.keyword_post = _this.keyword;
                $('#jqGrid').setGridParam({ url: 'scmStockRet/SP_SCM_STOCK_RET_GET',postData: _this.keyword_post ,datatype: "json", page: page}).trigger("reloadGrid");
                }
            },
            excel_download:function(){
                var _this = this;
                if (_this.effectiveness()){

                wrapWindowByMask();
                $.fileDownload('scmStockList/excel/download', {
                    httpMethod: "POST",
                    data: _this.keyword_post,
                    successCallback: function(url){
                        closeWindowByMask();
                    },
                    failCallback: function(){
                        alert('엑셀 파일 생성에 실패 했습니다.\n잠시 후 다시 시도해 주시기 바랍니다. ');
                        closeWindowByMask();
                    }
                });
                }
            },


            effectiveness:function () { // 유효성 검사
                var _this = this;
                if (_this.keyword_post.start_date === ''){
                    alert("날짜를 입력해주세요");
                    return false;
                } else if (_this.keyword_post.end_date=== ''){
                    alert("날짜를 입력해주세요");
                    return false;
                }else {
                    return true;
                }
            },
            effectiveness2:function () { // 유효성 검사
                var _this = this;
                if (_this.keyword.start_date === ''){
                    alert("날짜를 입력해주세요");
                    return false;
                } else if (_this.keyword.end_date=== ''){
                    alert("날짜를 입력해주세요");
                    return false;
                }else {
                    return true;
                }
            },


            _supp_bus_check:function (what){
                var _this = this;
                _this.supp_bus_check = what;
            },

            supp_bus:function(code,name){
                var _this =this;
                if ( _this.supp_bus_check === 'M'){

                    _this.keyword.keyword2 = code;
                    _this.supp_name = name;
                }

            },
            selectBox:function(){  // select2 실행 메소드
                $("#cargo_select").select2();
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

        }
    });
}
function callback(cb) {
    cb();
}
