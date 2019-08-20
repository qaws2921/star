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

                common_group_list:[], // 코드그룹 리스트
                common_group_code:'', // 코드그룹 코드
                common_group_name:'', // 코드그룹 값
                common_group_code_post:'', // 코드그룹 코드 조회 데이터
                sys_common:{        // 코드 객체
                    code_type:"",
                    code_value:"",
                    code_name1:"",
                    code_name2:"",
                    code_name3:"",
                    code_name4:"",
                    code_name5:"",
                    code_name6:"",
                    code_name7:"",
                    code_name8:"",
                    use_yn:"Y",
                    user_name:"",
                    update_date:"",
                    keyword:""
                },
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



            _this.jqGrid(); // jqGrid 실행
            _this.sys_part_group_get(); // 코드그룹 가져오기
            jquery_scmDC(_this); // vue 에서 실행 못하는 jquery
            _this.selectBox();

            jqgrid_au_modal(_this);

            _this.jqGrid1(); // jqGrid 실행
            _this.jqGrid2(); // jqGrid 실행

        },
        created:function() {
            this.EventBus.$on('supp', this.supp_bus);
        },
        methods:{
            add_uadate:function(keyword){


            },


            modal_add_btn:function(au){
                var _this = this;
                if (_this.effectiveness3()){
                    var ids2 = $("#scmDC_au_modal2").jqGrid("getDataIDs").slice();
                    var box_no = ids2.join(",");
                    _this.keyword_modal.keyword5 = box_no;
                    _this.keyword_modal.keyword6 = au;

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
                                    $("#scmDC_au_modal1").jqGrid('clearGridData');
                                    $("#scmDC_au_modal2").jqGrid('clearGridData');
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
                    } else {
                        alert("값을 선택해주세요");
                    }


                }

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

                    // $('#scmDC_au_modal2').clearGridData();
                    // $('#scmDC_au_modal2').addJSONData(_this.modal_list);


                });
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
             jqGrid:function(){ // jqGrid 메소드
                 var _this = this;
            var grid = $("#jqGrid");
                grid.jqGrid({
                    datatype: "json",
                    mtype: 'POST',
                    colNames:['납품증번호','업체코드','업체명','납품일','입고구분','등록자'],
                    colModel:[
                        {name:'dc_no',index:'dc_no',width:50,key: true,sortable: false,width:150},
                        {name:'supp_code',index:'supp_code',width:100 ,sortable: false,width:150},
                        {name:'supp_name',index:'supp_name',width:100,sortable: false,width:150},
                        {name:'work_date',index:'work_date',width:100,sortable: false,width:150},
                        {name:'in_type',index:'in_type',width:100,sortable: false,width:150},
                        {name:'user_name',index:'user_name',width:100,sortable: false,width:150},
                    ],
                    autowidth: true,
                    shrinkToFit:false,
                    height:450,
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
                        _this.common_edit(data); // 데이터 가공
                        _this.common_update(); // 수정창 띄어주기

                    }

                }).navGrid("#jqGridPager", { search: false, add: false, edit: false, del: false});
             },
            jqGrid1:function(){ // jqGrid 메소드
                var _this = this;
                var grid = $("#jqGrid1");
                grid.jqGrid({
                    datatype: "json",
                    mtype: 'POST',
                    colNames:['납품증번호','업체코드','업체명','납품일','입고구분','등록자'],
                    colModel:[
                        {name:'code_type',index:'code_type',width:50,sortable: false,width:150},
                        {name:'code_value',index:'code_value',width:100,key: true ,sortable: false,width:150},
                        {name:'code_name1',index:'code_name1',width:100,sortable: false,width:150},
                        {name:'code_name2',index:'code_name2',width:100,sortable: false,width:150},
                        {name:'code_name8',index:'code_name8',width:100,sortable: false,width:150},
                        {name:'code_name8',index:'code_name8',width:100,sortable: false,width:150},
                    ],
                    width:926,
                    shrinkToFit:false,
                    height:150,
                    pager:'#jqGridPager1',
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
                        var data = $('#jqGrid1').jqGrid('getRowData', rowid); // 그 셀에 해당되는 데이터
                        _this.common_edit(data); // 데이터 가공
                        _this.common_update(); // 수정창 띄어주기

                    }

                }).navGrid("#jqGridPager1", { search: false, add: false, edit: false, del: false});
            },
            jqGrid2:function(){ // jqGrid 메소드
                var _this = this;
                var grid = $("#jqGrid2");
                grid.jqGrid({
                    datatype: "json",
                    mtype: 'POST',
                    colNames:['납품증번호','업체코드','업체명','납품일','입고구분','등록자'],
                    colModel:[
                        {name:'dc_no',index:'dc_no',width:50,key: true,sortable: false,width:150},
                        {name:'supp_code',index:'supp_code',width:100 ,sortable: false,width:150},
                        {name:'supp_name',index:'supp_name',width:100,sortable: false,width:150},
                        {name:'work_date',index:'work_date',width:100,sortable: false,width:150},
                        {name:'in_type',index:'in_type',width:100,sortable: false,width:150},
                        {name:'user_name',index:'user_name',width:100,sortable: false,width:150},
                    ],
                    width:926,
                    shrinkToFit:false,
                    height:150,
                    pager:'#jqGridPager2',
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
                        var data = $('#jqGrid2').jqGrid('getRowData', rowid); // 그 셀에 해당되는 데이터
                        _this.common_edit(data); // 데이터 가공
                        _this.common_update(); // 수정창 띄어주기

                    }

                }).navGrid("#jqGridPager2", { search: false, add: false, edit: false, del: false});
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
            common_group_change:function(code,name){ // select 박스 바뀔때
                var _this = this;
                 _this.common_group_code = code;
                 _this.sys_common.code_type=code;

                 _this.common_group_name = name;

            },
            modal_get_btn:function(page){
                var _this = this;
                if (_this.effectiveness2()){
                    $('#scmDC_au_modal1').setGridParam({ url: 'scmDC/SP_SCM_DC_BOX_READY_GET',postData: _this.keyword_modal ,datatype: "json", page: page}).trigger("reloadGrid");
                }

            },

            scmDC_btn:function (page) { // 조회 버튼
                var _this = this;
                _this.keyword_post = _this.keyword;

                $('#jqGrid').setGridParam({ url: 'scmDC/get',postData: _this.keyword_post ,datatype: "json", page: page}).trigger("reloadGrid");

            },
            scmDC_btn2:function (page) { // 조회 버튼
                var _this = this;

                $('#jqGrid').setGridParam({ url: 'scmDC/get',postData: _this.keyword_post ,datatype: "json", page: page}).trigger("reloadGrid");

            },
            common_au:function (au) { // 저장 수정 ajax
                var _this = this
                var txt ='저장 히겠습니까?';
                if (au === 'U'){
                    var txt ='수정 히겠습니까?';

                }
                if(confirm(txt)){
                    if (_this.effectiveness()) {
                        _this.sys_common.keyword = au;
                        $.ajax({
                            url: "sysCommon/common/au",
                            data: _this.sys_common,
                            type: 'POST',
                            async: true,
                            dataType: "json",
                            success: function (data) {
                                if (data.result === 'NG'){
                                    alert(data.message);
                                } else {
                                    $('#myModal').modal("hide");
                                    if (au === 'I') {
                                        _this.scmDC_btn($("#jqGrid").getGridParam('page'));

                                    } else {

                                        _this.scmDC_btn2($("#jqGrid").getGridParam('page'));
                                    }
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
            _sys_common_reset:function(){ //코드 객체 리셋
                 var _this = this;
                _this.sys_common.code_value="";
                _this.sys_common.code_name1="";
                _this.sys_common.code_name2="";
                _this.sys_common.code_name3="";
                _this.sys_common.code_name4="";
                _this.sys_common.code_name5="";
                _this.sys_common.code_name6="";
                _this.sys_common.code_name6="";
                _this.sys_common.code_name8="";
                _this.sys_common.use_yn="Y";

            },
            common_update:function () { // 업데이트 모달창
                var _this = this;
                _this.add_update_check="U";

                $('#myModal').modal("show");
            },
            common_add:function () {    // 추가를 누를때
                var _this = this;
                _this.add_update_check="I";
                _this._sys_common_reset();
            },
            common_edit:function (data) {   // 수정 값을 객체에 저장
                var _this = this;
                _this._sys_common_reset();
                _this.sys_common.code_type=data.code_type;
                _this.sys_common.code_value=data.code_value;
                _this.sys_common.code_name1=data.code_name1;
                _this.sys_common.code_name2=data.code_name2;
                _this.sys_common.code_name3=data.code_name3;
                _this.sys_common.code_name4=data.code_name4;
                _this.sys_common.code_name5=data.code_name5;
                _this.sys_common.code_name6=data.code_name6;
                _this.sys_common.code_name7=data.code_name7;
                _this.sys_common.code_name8=data.code_name8;
                _this.sys_common.use_yn=data.use_yn;
            },
            common_delete:function () { //삭제를 누를시
                var _this = this;
                 var ids = jQuery("#jqGrid").getGridParam('selarrrow'); //체크된 row id들을 배열로 반환
                var code_value = ids.join(",");
                if (code_value === ''){
                    alert("삭제하는 데이터를 선택해주세요");
                } else {
                    if (confirm("삭제하겠습니까?")){
                        _this.common_delete_ajax(_this.common_group_code_post,code_value);

                    }

                }
                // _this.common_group_code_post


            },
            common_delete_ajax:function (type,value) {  // 삭제 ajax
                wrapWindowByMask();
                 var _this = this;
                 $.ajax({
                    url:"sysCommon/common/delete",
                    data:{code_type:type , code_value:value},
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

            effectiveness:function () { // 유효성 검사
                var _this = this;
                if (_this.sys_common.code_value === ''){
                    alert("코드를 입력해주세요");
                    return false;
                }else if (_this.sys_common.code_name1 === ''){
                    alert("명칭1을 입력해주세요");
                    return false;

                }else {
                    return true;
                }
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
            }


        }
    });
}
function callback(cb) {
    cb();
}
