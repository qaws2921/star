Vue.prototype.EventBus = new Vue();

window.onload = function () {
    new Vue({
        el:"#app",
        data: function () {
            return{

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
                scm_ec:{
                  ec_no:'',
                  supp_code_to:'',
                    keyword:'',
                    keyword2:'',
                    user_code:'',
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

            'scm_ec.ec_no': function () {
                if(this.add_update_check === 'I'){

                    $("#au_modal2").jqGrid('clearGridData');
                }

            },
            'scm_ec.supp_code_to': function () {
                if(this.add_update_check === 'I'){

                    $("#au_modal2").jqGrid('clearGridData');
                }

            }
        },


        mounted: function(){
            var _this = this;
            _this.sys_part_group_get(); // 코드그룹 가져오기
            jquery_scmECIn(_this); // vue 에서 실행 못하는 jquery
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
                $('#jqGrid').setGridParam({ url: 'scmECIn/sp_scm_ec_in_get',postData: _this.keyword_post ,datatype: "json", page: page}).trigger("reloadGrid");
            },
            main_gat_btn2:function (page) { // 조회 버튼
                var _this = this;
                $('#jqGrid').setGridParam({ url: 'scmECIn/sp_scm_ec_in_get',postData: _this.keyword_post ,datatype: "json", page: page}).trigger("reloadGrid");
            },
            add_btn:function () {    // 추가를 누를때
                var _this = this;
                _this.add_update_check="I";
                _this.reset();
            },
            modal_get_btn:function(page){
                var _this = this;
                if (_this.effectiveness2()){
                    $('#au_modal2').setGridParam({ url: 'scmECIn/sp_scm_ec_in_ready_get',postData: _this.scm_ec ,datatype: "json"}).trigger("reloadGrid");
                }

            },
            modal_add_btn:function(){
                var _this = this;

                var ids2 = $("#au_modal2").jqGrid("getDataIDs");
                if (ids2.toString() !== "") {

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
                    for(var i =0; i<ids2.length;i++){
                        data = $('#au_modal2').jqGrid('getRowData', ids2[i]);
                        if (i === 0 ){
                            keyword2 += data.part_code;
                            keyword3 += data.in_qty;
                        } else {
                            keyword2 +=","+data.part_code;
                            keyword3 +=","+data.in_qty;

                        }
                    }
                        callback(function () {

                            _this.scm_ec.keyword = keyword2;
                            _this.scm_ec.keyword2 = keyword3;
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
                            url: "scmECIn/sp_scm_ec_in_add",
                            data: _this.scm_ec,
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

            main_update:function (data) { // 업데이트 모달창
                var _this = this;
                _this.add_update_check="U";
                $("#au_modal").setGridParam({ url: 'scmln/SP_SCM_IN_SUB_GET',postData: {in_no:_this.scm_in.in_no} ,datatype: "json"}).trigger("reloadGrid");
                $('#myModal').modal("show");
            },
            main_edit:function (data) {   // 수정 값을 객체에 저장
                var _this = this;
                _this.reset();
                _this.scm_in.in_no = data.in_no;
                _this.scm_in.work_date = data.work_date;
                _this.scm_in.remark = data.remark;

            },
            main_delete:function () { //삭제를 누를시
                var _this = this;
                 var ids = jQuery("#jqGrid").getGridParam('selarrrow'); //체크된 row id들을 배열로 반환
                var in_no = ids.join(",");
                if (in_no === ''){
                    alert("삭제하는 데이터를 선택해주세요");
                } else {
                    if (confirm("삭제하겠습니까?")){
                        _this.main_delete_ajax(in_no);

                    }

                }
            },
            main_delete_ajax:function (in_no) {  // 삭제 ajax
                wrapWindowByMask();
                 var _this = this;
                 $.ajax({
                    url:"scmln/SP_SCM_IN_DEL",
                    data:{in_no:in_no},
                    type : 'DELETE',
                    async: true,
                    dataType : "json",
                    success : function(data){
                        if (data.result === 'NG'){
                            closeWindowByMask();
                            alert(data.message);
                        } else {
                            closeWindowByMask();
                            _this.main_gat_btn2($("#jqGrid").getGridParam('page'));
                        }

                        },
                     error: function () {
                         closeWindowByMask();
                         alert("삭제실패")
                     }

                });
            },
            reset:function(){ //코드 객체 리셋
                var _this = this;
                _this.keyword_modal={
                    keyword:'',
                    keyword2:''
                };
                _this. scm_ec={
                    ec_no:'',
                        supp_code_to:'',
                        keyword:'',
                        keyword2:'',
                        user_code:'',
                };

                _this.supp_name_modal = '';

                $("#au_modal2").jqGrid('clearGridData');

            },

            effectiveness:function () { // 유효성 검사
                var _this = this;
                if (_this.scm_in.work_date === ''){
                    alert("날짜를 입력해주세요");
                    return false;
                }else if (_this.scm_in.remark === ''){
                    alert("비고를 입력해주세요");
                    return false;

                }else {
                    return true;
                }
            },
            effectiveness2:function () { // 유효성 검사
                var _this = this;
                if (_this.scm_ec.ec_no === ''){
                    alert("출고번호를 입력해주세요");
                    return false;
                }else if(_this.scm_ec.supp_code_to === ''){
                    alert("협럭업체를 선택해주세요");
                    return false;
                } else {
                    return true;
                }
            },
            effectiveness3:function () { // 유효성 검사
                var _this = this;
                if (_this.keyword_modal.keyword === ''){
                    alert("날짜를 선택해주세요");
                    return false;
                }else if (_this.keyword_modal.keyword2 === ''){
                    alert("협럭업체를 선택해주세요");
                    return false;
                }else if (_this.keyword_modal.keyword4 === ''){
                    alert("비고를 입력해주세요");
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
                    _this.scm_ec.supp_code_to = code;
                    _this.supp_code = code;
                    _this.supp_name_modal = name;
                }

            },
            selectBox:function(){  // select2 실행 메소드
                $("#part_group_select").select2();
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

        }
    });
}
function callback(cb) {
    cb();
}
