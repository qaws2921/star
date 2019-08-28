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
                    keyword2:''

                },
                keyword_post:{
                    start_date:'',
                    end_date:'',
                    keyword:'',
                    keyword2:''

                },
                keyword_modal:{
                    keyword:'',
                    keyword2:'',
                    keyword3:'',
                    keyword4:'',
                    keyword5:'',
                    keyword6:''
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

                    $("#scmDC_au_modal2").jqGrid('clearGridData');


            }
        },


        mounted: function(){
            var _this = this;

            _this.sys_part_group_get(); // 코드그룹 가져오기
            jquery_scmDC(_this); // vue 에서 실행 못하는 jquery
            _this.selectBox();

            jqgrid_au_modal(_this);



        },
        created:function() {
            this.EventBus.$on('supp', this.supp_bus);
        },
        methods:{

            scmDC_btn:function (page) { // 조회 버튼
                var _this = this;
                _this.keyword_post = _this.keyword;
                $('#jqGrid').setGridParam({ url: 'scmDC/get',postData: _this.keyword_post ,datatype: "json", page: page}).trigger("reloadGrid");
            },
            scmDC_btn2:function (page) { // 조회 버튼
                var _this = this;
                $('#jqGrid').setGridParam({ url: 'scmDC/get',postData: _this.keyword_post ,datatype: "json", page: page}).trigger("reloadGrid");
            },
            modal_get_btn:function(page){
                var _this = this;
                if (_this.effectiveness2()){
                    $('#scmDC_au_modal1').setGridParam({ url: 'scmDC/SP_SCM_DC_BOX_READY_GET',postData: _this.keyword_modal ,datatype: "json", page: page}).trigger("reloadGrid");
                }
            },
            print_btn:function () {
                var _this = this;
                var ids = jQuery("#jqGrid").getGridParam('selarrrow'); //체크된 row id들을 배열로 반환
                var code_value = ids.join(",");
                if (code_value === ''){
                    alert("인쇄하는 데이터를 선택해주세요");
                } else {
                    var data;
                    for (var i = 0; i <ids.length; i++) {
                        data = $('#jqGrid').jqGrid('getRowData', ids[i]);
                        print(data.dc_no,data.work_date,data.supp_code,data.supp_name);
                    }


                }
            },
            add_btn:function () {    // 추가를 누를때
                var _this = this;
                _this.add_update_check="I";
                _this.reset();
            },
            modal_add_btn:function(au){
                var _this = this;
                if(confirm("저장하겠습니까?")){
                    if (_this.effectiveness3()){
                        var ids2 = $("#scmDC_au_modal2").jqGrid("getDataIDs").slice();
                        var box_no = ids2.join(",");
                        _this.keyword_modal.keyword5 = box_no;
                        if (box_no !== ''){
                            $.ajax({
                                url: "scmDC/SP_SCM_DC_ADD",
                                data: _this.keyword_modal,
                                type: 'POST',
                                async: true,
                                dataType: "json",
                                success: function (data) {
                                    if (data.result === 'NG'){
                                        alert(data.message);
                                    } else {
                                        $('#myModal').modal("hide");
                                        if (au === 'I') {
                                            _this.scmDC_btn(1);
                                        } else {
                                            _this.scmDC_btn2($("#jqGrid").getGridParam('page'));
                                        }
                                        _this.reset();
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
                }

            },
            reset:function(){ //코드 객체 리셋
                var _this = this;
                _this.keyword_modal={
                    keyword:'',
                    keyword2:'',
                    keyword3:'',
                    keyword4:'',
                    keyword5:'',
                    keyword6:''
                }
                _this.supp_name_modal = '';
                $("#part_group_select").val("").select2();
                $("#scmDC_au_modal1").jqGrid('clearGridData');
                $("#scmDC_au_modal2").jqGrid('clearGridData');

            },
            main_update:function (data) { // 업데이트 모달창
                var _this = this;
                _this.add_update_check="U";
                if(data.in_type === "1"){
                    _this.add_update_check="S";
                }
                $("#scmDC_au_modal2").setGridParam({ url: 'scmDC/SP_SCM_DC_BOX_GET',postData: {dc_no:data.dc_no} ,datatype: "json"}).trigger("reloadGrid");
                $('#myModal').modal("show");
            },

            main_edit:function (data) {   // 수정 값을 객체에 저장
                var _this = this;
                _this.reset();y+"-"+m+"-"+d;
                _this.keyword_modal.keyword6 = data.dc_no;
                _this.keyword_modal.keyword4 = data.remark;

                var y =  data.work_date.substring(0,4);
                var m =  data.work_date.substring(4,6);
                var d =  data.work_date.substring(6,8);

                _this.keyword_modal.keyword = y+"-"+m+"-"+d;
                _this.keyword_modal.keyword2 = data.supp_code;
                _this.supp_name_modal = data.supp_name;
            },
            main_delete:function () { //삭제를 누를시
                var _this = this;
                var ids = jQuery("#jqGrid").getGridParam('selarrrow'); //체크된 row id들을 배열로 반환
                var code_value = ids.join(",");
                if (code_value === ''){
                    alert("삭제하는 데이터를 선택해주세요");
                } else {
                    if (confirm("삭제하겠습니까?")){
                        _this.main_delete_ajax(code_value);
                    }
                }
            },
            main_delete_ajax:function (code_value) {  // 삭제 ajax
                wrapWindowByMask();
                var _this = this;
                $.ajax({
                    url:"scmDC/SP_SCM_DC_DEL",
                    data:{dc_no:code_value},
                    type : 'DELETE',
                    async: true,
                    dataType : "json",
                    success : function(data){
                        if (data.result === 'NG'){
                            closeWindowByMask();
                            alert(data.message);
                        } else {
                            closeWindowByMask();
                            _this.scmDC_btn2($("#jqGrid").getGridParam('page'));
                        }
                    },
                    error: function () {
                        closeWindowByMask();
                        alert("삭제실패")
                    }
                });
            },
            modal_delete:function () { //삭제를 누를시
                var _this = this;
                var ids = jQuery("#scmDC_au_modal1").getGridParam('selarrrow'); //체크된 row id들을 배열로 반환
                var code_value = ids.join(",");
                if (code_value === ''){
                    alert("삭제하는 데이터를 선택해주세요");
                } else {
                    if (confirm("삭제하겠습니까?")){
                        _this.modal_delete_ajax(code_value);
                    }
                }
            },
            modal_delete_ajax:function (code_value) {  // 삭제 ajax
                wrapWindowByMask();
                var _this = this;
                $.ajax({
                    url:"scmDC/SP_SCM_DC_BOX_DEL",
                    data:{box_no:code_value},
                    type : 'DELETE',
                    async: true,
                    dataType : "json",
                    success : function(data){
                        if (data.result === 'NG'){
                            closeWindowByMask();
                            alert(data.message);
                        } else {
                            closeWindowByMask();
                            _this.modal_get_btn(1);
                        }
                    },
                    error: function () {
                        closeWindowByMask();
                        alert("삭제실패")
                    }
                });
            },
            btn_up:function(){
                var _this =this;
                var ids2 = $("#scmDC_au_modal2").getGridParam('selarrrow').slice();
                for (var i =0; i<ids2.length;i++) {
                    $('#scmDC_au_modal2').jqGrid('delRowData', ids2[i]);
                }
                $('#scmDC_au_modal2').jqGrid("resetSelection");
            },
            btn_down:function(){
                var _this =this;
                var ids = $("#scmDC_au_modal1").getGridParam('selarrrow').slice();
                var ids2 = $("#scmDC_au_modal2").jqGrid("getDataIDs");
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
                    data = $('#scmDC_au_modal1').jqGrid('getRowData', ids[i]);
                    _this.modal_list.push(data);
                }
                callback(function () {
                    if (overlap !== 0){
                        alert(overlap+"개 중복");
                    }
                    for(var i =0; i<_this.modal_list.length;i++){
                        $('#scmDC_au_modal2').jqGrid('addRowData',_this.modal_list[i].box_no,_this.modal_list[i]);
                    }
                    $('#scmDC_au_modal1').jqGrid("resetSelection");
                    _this.modal_list = [];
                });
            },
            effectiveness2:function () { // 유효성 검사
                var _this = this;
                if (_this.keyword_modal.keyword2 === ''){
                    alert("협럭업체를 선택해주세요");
                    return false;
                }else {
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
                    _this.keyword_modal.keyword2 = code;
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
            }
        }
    });
}
function callback(cb) {
    cb();
}
