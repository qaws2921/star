window.onload = function () {
    new Vue({
        el:"#app",
        data: function () {
            return{
                corp_type:'0',
                sys_supp_cd:{
                     supp_code:'',
                     supp_name:'',
                     supp_name_en:'',
                     ceo:'',
                     supp_no:'',
                     tel_no:'',
                     fax_no:'',
                     buss_type:'',
                     category:'',
                     address:'',
                     give_type:'',
                     emp_name:'',
                     emp_tel:'',
                     emp_email:'',
                     corp_type1:'Y',
                     corp_type2:'Y',
                     use_yn:'Y',
                     user_code:'',
                     user_name:'',
                     create_date:'',
                     update_date:'',
                     keyword:'',
                },

                add_update_check:'I'    // 저장인지 수정인지 체크
            }
        },
        mounted: function(){

            var _this = this;
            _this.jqGrid(); // jqGrid 실행

            _this.selectBox(); // select2 실행
            jquery_scmSupp(_this); // vue 에서 실행 못하는 jquery
        },
        methods:{
             jqGrid:function(){ // jqGrid 메소드
                 var _this = this;
            var grid = $("#jqGrid");
                grid.jqGrid({
                    datatype: "json",
                    mtype: 'POST',
                    colNames:['업체코드','업체명','업체명(영문)','사업자번호','대표자','전화번호','팩스번호','업태','종목','결재방법','주소','당담자','당담자(전화번호)','이메일','고객사구분','협력사구분','활성화','비고','등록자','등록일'],
                    colModel:[
                        {name:'supp_code',index:'supp_code',key: true,sortable: false},
                        {name:'supp_name',index:'supp_name' ,sortable: false},
                        {name:'supp_name_en',index:'supp_name_en',sortable: false},
                        {name:'supp_no',index:'supp_no',sortable: false},
                        {name:'ceo',index:'ceo',sortable: false},
                        {name:'tel_no',index:'tel_no',sortable: false},
                        {name:'fax_no',index:'fax_no',sortable: false},
                        {name:'buss_type',index:'buss_type',sortable: false},
                        {name:'category',index:'category',sortable: false},
                        {name:'give_type',index:'give_type',sortable: false},
                        {name:'address',index:'address',sortable: false},
                        {name:'emp_name',index:'emp_name',sortable: false},
                        {name:'emp_tel',index:'emp_tel',sortable: false},
                        {name:'emp_email',index:'emp_email',sortable: false},
                        {name:'corp_type1',index:'corp_type1',sortable: false},
                        {name:'corp_type2',index:'corp_type2',sortable: false},
                        {name:'use_yn',index:'use_yn',sortable: false},
                        {name:'11',index:'11',sortable: false},
                        {name:'user_name',index:'user_name',sortable: false},
                        {name:'update_date',index:'update_date',formatter:formmatter_date,sortable: false},
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
                        _this.supp_cd_edit(data); // 데이터 가공
                        _this.supp_cd_update(); // 수정창 띄어주기

                    }

                }).navGrid("#jqGridPager", { search: false, add: false, edit: false, del: false});


             },
            selectBox:function(){  // select2 실행 메소드
                 $("#corp_type_select").select2();
            },

            corp_type_select_change:function(code,name){ // select 박스 바뀔때
                var _this = this;
                 _this.corp_type = code;

            },
            supp_cd_get:function (page) { // 조회 버튼
                var _this = this;


                $('#jqGrid').setGridParam({ url: 'sysSupp/supp/cd/get',postData: { corp_type: _this.corp_type} ,datatype: "json", page: page}).trigger("reloadGrid");

            },
            supp_cd_get2:function (page) { // 조회 버튼
                var _this = this;

                $('#jqGrid').setGridParam({ url: 'sysSupp/supp/cd/get',postData: { corp_type: _this.corp_type} ,datatype: "json", page: page}).trigger("reloadGrid");

            },
            supp_cd_au:function (au) { // 저장 수정 ajax
                var _this = this
                var txt ='저장 히겠습니까?';
                if (au === 'U'){
                    var txt ='수정 히겠습니까?';

                }
                if(confirm(txt)){
                    if (_this.effectiveness()) {
                        _this.sys_supp_cd.keyword = au;
                        $.ajax({
                            url: "sysSupp/supp/cd/au",
                            data: _this.sys_supp_cd,
                            type: 'POST',
                            async: true,
                            dataType: "json",
                            success: function (data) {
                                if (data.result === 'NG'){
                                    alert(data.message);
                                } else {
                                    $('#myModal').modal("hide");
                                    if (au === 'I') {
                                        _this.supp_cd_get($("#jqGrid").getGridParam('page'));

                                    } else {

                                        _this.supp_cd_get2($("#jqGrid").getGridParam('page'));
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
            _sys_supp_cd_reset:function(){ //코드 객체 리셋
                 var _this = this;
                _this.sys_supp_cd={
                    supp_code:'',
                        supp_name:'',
                        supp_name_en:'',
                        ceo:'',
                        supp_no:'',
                        tel_no:'',
                        fax_no:'',
                        buss_type:'',
                        category:'',
                        address:'',
                        give_type:'',
                        emp_name:'',
                        emp_tel:'',
                        emp_email:'',
                        corp_type1:'Y',
                        corp_type2:'Y',
                        use_yn:'Y',
                        user_code:'',
                        user_name:'',
                        create_date:'',
                        update_date:'',
                        keyword:'',
                }

            },
            supp_cd_update:function () { // 업데이트 모달창
                var _this = this;
                _this.add_update_check="U";

                $('#myModal').modal("show");
            },
            supp_cd_add:function () {    // 추가를 누를때
                var _this = this;
                _this.add_update_check="I";
                _this._sys_supp_cd_reset();
            },
            supp_cd_edit:function (data) {   // 수정 값을 객체에 저장
                var _this = this;
                _this._sys_supp_cd_reset();
                _this.sys_supp_cd.supp_code = data.supp_code;
                _this.sys_supp_cd.supp_name = data.supp_name;
                _this.sys_supp_cd.supp_name_en = data.supp_name_en;
                _this.sys_supp_cd.ceo = data.ceo;
                _this.sys_supp_cd.supp_no = data.supp_no;
                _this.sys_supp_cd.tel_no = data.tel_no;
                _this.sys_supp_cd.fax_no = data.fax_no;
                _this.sys_supp_cd.buss_type = data.buss_type;
                _this.sys_supp_cd.category = data.category;
                _this.sys_supp_cd.address = data.address;
                _this.sys_supp_cd.give_type = data.give_type;
                _this.sys_supp_cd.emp_name = data.emp_name;
                _this.sys_supp_cd.emp_tel = data.emp_tel;
                _this.sys_supp_cd.emp_email = data.emp_email;
                _this.sys_supp_cd.corp_type1 = data.corp_type1;
                _this.sys_supp_cd.corp_type2 = data.corp_type2;
                _this.sys_supp_cd.use_yn = data.use_yn;

            },
            supp_cd_delete:function () { //삭제를 누를시
                var _this = this;
                 var ids = jQuery("#jqGrid").getGridParam('selarrrow'); //체크된 row id들을 배열로 반환
                var code = ids.join(",");
                if (code === ''){
                    alert("삭제하는 데이터를 선택해주세요");
                } else {
                    if (confirm("삭제하겠습니까?")){
                        _this.supp_cd_delete_ajax(code);

                    }

                }
                // _this.common_group_code_post


            },
            supp_cd_delete_ajax:function (code) {  // 삭제 ajax
                wrapWindowByMask();
                 var _this = this;
                 $.ajax({
                    url:"scmSupp/supp/cd/delete",
                    data:{supp_code:code},
                    type : 'DELETE',
                    async: true,
                    dataType : "json",
                    success : function(data){
                        if (data.result === 'NG'){
                            closeWindowByMask();
                            alert(data.message);
                        } else {
                            closeWindowByMask();
                            _this.supp_cd_get2($("#jqGrid").getGridParam('page'));
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
                if (_this.sys_supp_cd.supp_code === ''){
                    alert("업체코드를 입력해주세요");
                    return false;
                }else if (_this.sys_supp_cd.supp_name === ''){
                    alert("업체명을 입력해주세요");
                    return false;

                }else if (_this.sys_supp_cd.ceo === ''){
                    alert("대표자를 입력해주세요");
                    return false;

                }else if (_this.sys_supp_cd.supp_name_en === ''){
                    alert("업체명(영문)을 입력해주세요");
                    return false;

                }else if (_this.sys_supp_cd.supp_no === ''){
                    alert("사업자번호를 입력해주세요");
                    return false;

                }else if (_this.sys_supp_cd.tel_no === ''){
                    alert("전화번호를 입력해주세요");
                    return false;

                }else if (_this.sys_supp_cd.buss_type === ''){
                    alert("업태를 입력해주세요");
                    return false;

                }else if (_this.sys_supp_cd.fax_no === ''){
                    alert("팩스번호를 입력해주세요");
                    return false;

                }else if (_this.sys_supp_cd.category === ''){
                    alert("종목을 입력해주세요");
                    return false;

                }else if (_this.sys_supp_cd.give_type === ''){
                    alert("결재방법을 입력해주세요");
                    return false;

                }else if (_this.sys_supp_cd.address === ''){
                    alert("주소를 입력해주세요");
                    return false;

                }else if (_this.sys_supp_cd.emp_name === ''){
                    alert("당담자를 입력해주세요");
                    return false;

                }else if (_this.sys_supp_cd.emp_tel === ''){
                    alert("당담자(전화)를 입력해주세요");
                    return false;

                }else if (_this.sys_supp_cd.emp_email === ''){
                    alert("이메일을 입력해주세요");
                    return false;

                }
                else {
                    return true;
                }

            }

        }
    });
}
