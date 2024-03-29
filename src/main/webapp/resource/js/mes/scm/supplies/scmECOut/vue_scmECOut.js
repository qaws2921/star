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
                    work_date:'',
                    ec_no:'',
                    supp_code_from:'',
                    supp_code_to:'',
                    keyword:'',
                    keyword2:'',
                    remark:'',
                    user_code:'',
                },

                supp_name:'',
                supp_name_modal:'',


                add_update_check:'I',    // 저장인지 수정인지 체크
                supp_bus_check:''
            }
        },
        mounted: function(){
            var _this = this;
            _this.sys_part_group_get(); // 코드그룹 가져오기
            jquery_scmECOut(_this); // vue 에서 실행 못하는 jquery
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
                $('#jqGrid').setGridParam({ url: 'scmECOut/sp_scm_ec_out_get',postData: _this.keyword_post ,datatype: "json", page: page}).trigger("reloadGrid");
            },
            main_gat_btn2:function (page) { // 조회 버튼
                var _this = this;
                $('#jqGrid').setGridParam({ url: 'scmECOut/sp_scm_ec_out_get',postData: _this.keyword_post ,datatype: "json", page: page}).trigger("reloadGrid");
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
                    if (data.order_qty.substr(0,6) === "<input" || data.order_qty ==="" ){
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
                            keyword3 += data.order_qty;
                        } else {
                            keyword2 +=","+data.part_code;
                            keyword3 +=","+data.order_qty;

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
                            url: "scmECOut/sp_scm_ec_out_add",
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
                if (data.in_type === '1'){
                    _this.add_update_check="S";
                }else {
                    _this.add_update_check="I";
                }
                $("#au_modal2").setGridParam({ url: 'scmECOut/sp_scm_ec_out_sub_get',postData: {ec_no:_this.scm_ec.ec_no} ,datatype: "json"}).trigger("reloadGrid");
                $('#myModal').modal("show");
            },
            main_edit:function (data) {   // 수정 값을 객체에 저장
                var _this = this;
                _this.reset();
                _this.scm_ec.ec_no = data.ec_no;
                _this.scm_ec.work_date = data.work_date;
                _this.scm_ec.remark = data.remark;
                _this.scm_ec.supp_code_to = data.supp_code_to;
                _this.supp_name_modal = data.supp_name_to;

            },
            main_delete:function () { //삭제를 누를시
                var _this = this;
                 var ids = jQuery("#jqGrid").getGridParam('selarrrow'); //체크된 row id들을 배열로 반환
                var no = ids.join(",");
                if (no === ''){
                    alert("삭제하는 데이터를 선택해주세요");
                } else {
                    if (confirm("삭제하겠습니까?")){
                        _this.main_delete_ajax(no);

                    }

                }
            },
            main_delete_ajax:function (no) {  // 삭제 ajax
                wrapWindowByMask();
                 var _this = this;
                 $.ajax({
                    url:"scmECOut/sp_scm_ec_out_del",
                    data:{ec_no:no},
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
                _this.scm_ec={
                    work_date:'',
                        ec_no:'',
                        supp_code_from:'',
                        supp_code_to:'',
                        keyword:'',
                        keyword2:'',
                        remark:'',
                        user_code:'',
                },

                _this.supp_name_modal = '';
                $("#part_group_select").val("").select2();
                $("#au_modal1").jqGrid('clearGridData');
                $("#au_modal2").jqGrid('clearGridData');

            },

            effectiveness:function () { // 유효성 검사
                var _this = this;
                if (_this.scm_ec.work_date === ''){
                    alert("날짜를 입력해주세요");
                    return false;
                }else if (_this.scm_ec.supp_code_to === ''){
                    alert("업체를 입력해주세요");
                    return false;

                }else if (_this.scm_ec.remark === ''){
                    alert("비고를 입력해주세요");
                    return false;

                }else {
                    return true;
                }
            },
            effectiveness2:function () { // 유효성 검사
                var _this = this;

                return true;

            },
            effectiveness3:function () { // 유효성 검사
                var _this = this;
                if (_this.scm_ec.work_date === ''){
                    alert("날짜를 선택해주세요");
                    return false;
                }else if (_this.scm_ec.supp_code_to === ''){
                    alert("협럭업체를 선택해주세요");
                    return false;
                }else if (_this.scm_ec.remark === ''){
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
