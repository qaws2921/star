Vue.prototype.EventBus = new Vue();

window.onload = function () {
    new Vue({
        el:"#app",
        data: function () {
            return{

                common_get:[],

                modal_list:[],

                sys_part_group:[],
                keyword:{
                    start_date:'',
                    end_date:'',
                    keyword:'',


                },
                keyword_post:{
                    start_date:'',
                    end_date:'',
                    keyword:'',


                },

                keyword_modal:{
                    keyword:'',
                    keyword2:'',

                },

                scm_stock_rev:{
                    seq:0,
                    work_date:'',
                    rev_code:'',
                    part_code:'',
                    stock_qty_prev:'',
                    stock_qty:'',
                    user_code:'',
                    create_date:'',
                    part_name:'',
                    supp_name:'',
                    user_name:'',
                    part_grp_name:'',

                },



                scm_in :{
                    in_no:'',
                    work_date:'',
                    supp_code:'',
                    supp_name:'',
                    dc_no:'',
                    user_code:'',
                    user_name:'',
                    close_yn:'',
                    remark:'',

                    create_date:'',
                    update_date:'',
                    keyword:'',
                    keyword2:'',
                    keyword3:'',
                    keyword4:'',
                },


                supp_code:'',

                supp_name:'',
                supp_name_modal:'',


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
            _this.sys_part_group_get(); // 코드그룹 가져오기
            _this.sys_common_get(); // 코드그룹 가져오기
            jquery_scmStockRev(_this); // vue 에서 실행 못하는 jquery
            _this.selectBox();
            jqgrid_au_modal(_this);

        },
        created:function() {
            this.EventBus.$on('supp', this.supp_bus);
        },
        methods:{
            main_gat_btn:function (page) { // 조회 버튼
                var _this = this;
                _this.keyword_post = _this.keyword;
                $('#jqGrid').setGridParam({ url: 'scmStockRev/SP_SCM_STOCK_REV_GET',postData: _this.keyword_post ,datatype: "json", page: page}).trigger("reloadGrid");
            },
            main_gat_btn2:function (page) { // 조회 버튼
                var _this = this;
                $('#jqGrid').setGridParam({ url: 'scmStockRev/SP_SCM_STOCK_REV_GET',postData: _this.keyword_post ,datatype: "json", page: page}).trigger("reloadGrid");
            },
            add_btn:function () {    // 추가를 누를때
                var _this = this;
                _this.add_update_check="I";
                _this.reset();
            },
            modal_get_btn:function(page){
                var _this = this;
                if (_this.effectiveness2()){
                    $('#au_modal1').setGridParam({ url: 'scmPart/bPart/supp/get',postData: _this.keyword_modal ,datatype: "json", page: page}).trigger("reloadGrid");
                }

            },
            btn_up:function(){
                var _this =this;
                var ids2 = $("#au_modal2").getGridParam('selarrrow').slice();
                for (var i =0; i<ids2.length;i++) {
                    $('#au_modal2').jqGrid('delRowData', ids2[i]);
                }
                $('#au_modal2').jqGrid("resetSelection");
            },
            btn_down:function(){
                var _this =this;
                var ids = $("#au_modal1").getGridParam('selarrrow').slice();

                var ids2 = $("#au_modal2").jqGrid("getDataIDs");
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
                    data = $('#au_modal1').jqGrid('getRowData', ids[i]);
                    _this.modal_list.push(data);
                }
                callback(function () {
                    if (overlap !== 0){
                        alert(overlap+"개 중복");
                    }
                    for(var i =0; i<_this.modal_list.length;i++){
                        _this.modal_list[i].in_qty = _this.modal_list[i].pack_qty;
                        $('#au_modal2').jqGrid('addRowData',_this.modal_list[i].part_code,_this.modal_list[i]);
                    }
                    $('#au_modal1').jqGrid("resetSelection");
                    _this.modal_list = [];
                });
            },
            modal_add_btn:function(){
                var _this = this;

                var ids2 = $("#au_modal2").jqGrid("getDataIDs");
                if (ids2.toString() !== "" && _this.effectiveness()) {

                var data;
                for(var i =0; i<ids2.length;i++){
                    data = $('#au_modal2').jqGrid('getRowData', ids2[i]);
                    if (data.in_qty.substr(0,6) === "<input" || data.in_qty ==="" ){
                        alert("입고수량을 확인해주세요");
                        return false;
                    }
                }
                //scmln/SP_SCM_IN_ADD
                callback(function () {
                    var keyword2 ='';
                    var keyword3 ='';
                    var keyword4 ='';
                    for(var i =0; i<ids2.length;i++){
                        data = $('#au_modal2').jqGrid('getRowData', ids2[i]);
                        if (i === 0 ){
                            keyword2 += data.part_code;
                            keyword4 += data.in_qty;
                            keyword3 += data.pack_qty;
                        } else {
                            keyword2 +=","+data.part_code;
                            keyword4 +=","+data.in_qty;
                            keyword3 +=","+data.pack_qty;

                        }
                    }
                        callback(function () {

                            _this.scm_stock_rev.part_code = keyword2;
                            _this.scm_stock_rev.stock_qty_prev = keyword3;
                            _this.scm_stock_rev.stock_qty = keyword4;
                            _this.modal_add_go();
                        });

                })

                }
            },
            modal_add_go:function(){ // 지울거
                var _this = this;
                if (true){

                    if (true){
                        $.ajax({
                            url: "scmStockRev/SP_SCM_STOCK_REV_ADD",
                            data: _this.scm_stock_rev,
                            type: 'POST',
                            async: true,
                            dataType: "json",
                            success: function (data) {
                                if (data.result === 'NG'){
                                    alert(data.message);
                                } else {
                                    $('#myModal').modal("hide");
                                    _this.main_gat_btn(1);
                                    _this.reset();
                                }
                            },
                            error: function () {
                                    alert("저장실패");
                            }
                        });
                    } else {
                        alert("값을 선택해주세요");
                    }


                }

            },
            reset:function(){ //코드 객체 리셋
                var _this = this;
                _this.keyword_modal={
                    keyword:'',
                    keyword2:''
                };

                _this.scm_stock_rev={
                    seq:0,
                        work_date:'',
                        rev_code:'',
                        part_code:'',
                        stock_qty_prev:'',
                        stock_qty:'',
                        user_code:'',
                        create_date:'',
                        part_name:'',
                        supp_name:'',
                        user_name:'',
                        part_grp_name:'',

                };

                _this.supp_name_modal = '';
                $("#part_group_select").val("").select2();
                $("#common_get_select").val("").select2();
                $("#au_modal1").jqGrid('clearGridData');
                $("#au_modal2").jqGrid('clearGridData');

            },

            effectiveness:function () { // 유효성 검사
                var _this = this;
                if (_this.scm_stock_rev.work_date === ''){
                    alert("날짜를 입력해주세요");
                    return false;
                }else if (_this.scm_stock_rev.rev_code === ''){
                    alert("조정사유를 선택해주세요");
                    return false;

                }else {
                    return true;
                }
            },
            effectiveness2:function () { // 유효성 검사
                var _this = this;
                if (_this.keyword_modal.keyword === ''){
                    alert("협럭업체를 선택해주세요");
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

                    _this.keyword.keyword = code;
                    _this.supp_name = name;
                }else if( _this.supp_bus_check === 'S'){
                    _this.keyword_modal.keyword = code;
                    _this.scm_in.supp_code =code;
                    _this.supp_code = code;
                    _this.supp_name_modal = name;
                }

            },
            selectBox:function(){  // select2 실행 메소드
                $("#part_group_select").select2();
                $("#common_get_select").select2();
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
                    async: true,
                    data:{keyword:'STOCK_REV'},
                    dataType: "json",
                    success: function (data) {
                        _this.common_get = data;
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
