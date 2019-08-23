Vue.prototype.EventBus = new Vue();

window.onload = function () {
    new Vue({
        el:"#app",
        data: function () {
            return{
                cargo_group:[],
                lastsel2:'',

                modal_list:[],

                sys_part_group:[],
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

                keyword_modal:{
                    keyword:'',
                    keyword2:'',

                },

                out_order:{
                  work_date:'',
                  rq_no:'',
                  cargo_code_to:'',
                  remark:'',
                  user_code:'',
                    keyword:'',
                    keyword2:'',

                },


                add_update_check:'I',    // 저장인지 수정인지 체크
               
            }
        },


        mounted: function(){
            var _this = this;
            _this.sys_part_group_get(); // 코드그룹 가져오기
            _this.cargo_group_get(); // 코드그룹 가져오기
            jquery_scmOutOrder(_this); // vue 에서 실행 못하는 jquery
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
                $('#jqGrid').setGridParam({ url: 'scmOutOrder/SP_SCM_OUT_ORDER_GET',postData: _this.keyword_post ,datatype: "json", page: page}).trigger("reloadGrid");
            },
            main_gat_btn2:function (page) { // 조회 버튼
                var _this = this;
                $('#jqGrid').setGridParam({ url: 'scmOutOrder/SP_SCM_OUT_ORDER_GET',postData: _this.keyword_post ,datatype: "json", page: page}).trigger("reloadGrid");
            },
            add_btn:function () {    // 추가를 누를때
                var _this = this;
                _this.add_update_check="I";
                _this.reset();
            },
            modal_get_btn:function(page){
                var _this = this;

                $('#au_modal1').setGridParam({ url: 'scmPart/bPart/supp/get',postData: _this.keyword_modal ,datatype: "json", page: page}).trigger("reloadGrid");


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
                    if (data.qty.substr(0,6) === "<input" || data.qty ==="" ){
                        alert("요청수량을 확인해주세요");
                        return false;
                    }
                }
                //scmln/SP_SCM_IN_ADD
                callback(function () {
                    var keyword ='';
                    var keyword2 ='';
                    for(var i =0; i<ids2.length;i++){
                        data = $('#au_modal2').jqGrid('getRowData', ids2[i]);
                        if (i === 0 ){
                            keyword += data.part_code;
                            keyword2 += data.qty;
                        } else {
                            keyword +=","+data.part_code;
                            keyword2 +=","+data.qty;

                        }
                    }
                        callback(function () {

                            _this.out_order.keyword = keyword;
                            _this.out_order.keyword2 = keyword2;
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
                            url: "scmOutOrder/SP_SCM_OUT_ORDER_ADD",
                            data: _this.out_order,
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
                if (data.rq_type == 1){
                    _this.add_update_check="U";

                }else {
                    _this.add_update_check="I";

                }
                $("#au_modal2").setGridParam({ url: 'scmOutOrder/SP_SCM_OUT_ORDER_SUB_GET',postData: {rq_no:_this.out_order.rq_no} ,datatype: "json"}).trigger("reloadGrid");
                $('#myModal').modal("show");
            },
            main_edit:function (data) {   // 수정 값을 객체에 저장
                var _this = this;
                _this.reset();
                _this.out_order.rq_no = data.rq_no;

                var y =  data.work_date.substring(0,4);
                var m =  data.work_date.substring(4,6);
                var d =  data.work_date.substring(6,8);

                _this.out_order.work_date = y+"-"+m+"-"+d;
                _this.out_order.cargo_code_to = data.cargo_code_to;
                $("#cargo_group_modal_select").val(data.cargo_code_to).select2();
            },
            main_delete:function () { //삭제를 누를시
                var _this = this;
                 var ids = jQuery("#jqGrid").getGridParam('selarrrow'); //체크된 row id들을 배열로 반환
                var data;
                for (var i = 0 ; i<ids.length;i++){
                    data = $('#jqGrid').jqGrid('getRowData', ids[i]);
                    if (data.rq_type == 1){
                        // ids.splice(i, 1);
                        alert("완료된 데이터는 삭제할수 없습니다.");
                        return false;
                    }
                }

                callback(function () {
                    var rq_no = ids.join(",");
                    if (rq_no === ''){
                        alert("삭제하는 데이터를 선택해주세요");
                    } else {
                        if (confirm("삭제하겠습니까?")){
                            _this.main_delete_ajax(rq_no);

                        }

                    }

                });
            },
            main_delete_ajax:function (rq_no) {  // 삭제 ajax
                wrapWindowByMask();
                 var _this = this;
                 $.ajax({
                    url:"scmOutOrder/SP_SCM_OUT_ORDER_DEL",
                    data:{rq_no:rq_no},
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


                _this.out_order={
                    work_date:'',
                        rq_no:'',
                        cargo_code_to:'',
                        remark:'',
                        user_code:'',
                        keyword:'',
                        keyword2:'',

                }
                $("#cargo_group_modal_select").val("").select2();
                $("#part_group_select").val("").select2();
                $("#au_modal1").jqGrid('clearGridData');
                $("#au_modal2").jqGrid('clearGridData');

            },

            effectiveness:function () { // 유효성 검사
                var _this = this;
                if (_this.out_order.work_date === ''){
                    alert("날짜를 입력해주세요");
                    return false;
                }else if (_this.out_order.cargo_code_to === ''){
                    alert("받을창고를 선택해주세요");
                    return false;

                }else {
                    return true;
                }
            },

            selectBox:function(){  // select2 실행 메소드
                $("#part_group_select").select2();
                $("#cargo_group_select").select2();
                $("#rq_type_select").select2();
                $("#cargo_group_modal_select").select2();
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
            cargo_group_get:function(){
                var _this = this;
                $.ajax({
                    url: "common/SP_SYS_CARGO_GET",
                    type: 'POST',
                    async: true,
                    dataType: "json",
                    success: function (data) {
                        _this.cargo_group = data;
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
