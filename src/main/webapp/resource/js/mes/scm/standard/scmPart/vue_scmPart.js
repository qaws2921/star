window.onload = function () {
    new Vue({
        el:"#app",
        data: function () {
            return{
                sys_part_group:[],
                sys_common:[],
                sys_part_group_code:'',
                sys_part_group_code_post:'',
                part_code:'',
                part_code_post:'',
                sys_bPart_cd:{
                     part_code:'',
                     part_name:'',
                     alc_code:'',
                     part_grp_code:'',
                     part_type:'',
                     cargo_code:'',
                     loc_code:'',
                     supp_code:'',
                     spec:'',
                     unit_code:'',
                     pack_qty:'',
                     max_qty:'',
                     min_qty:'',
                     user_code:'',
                     user_name:'',
                     create_date:'',
                     update_date:'',
                     keyword:''
                },


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
                add_update_check:'I'    // 저장인지 수정인지 체크
            }
        },
        mounted: function(){

            var _this = this;

            _this.sys_part_group_get();
            _this.sys_common_get();


            _this.jqGrid(); // jqGrid 실행
            _this.common_group_get(); // 코드그룹 가져오기
            _this.selectBox(); // select2 실행
            jquery_scmPart(_this); // vue 에서 실행 못하는 jquery
        },
        methods:{
             jqGrid:function(){ // jqGrid 메소드
                 var _this = this;
            var grid = $("#jqGrid");
                grid.jqGrid({
                    datatype: "json",
                    mtype: 'POST',
                    colNames:['품목코드','품목명','보관창고','보관로케이션','업체명','등급','규격','단위','재고최대','재고최소','사용자','수정일'],
                    colModel:[
                        {name:'part_code',index:'part_code',width:100,key: true ,sortable: false, width:150},
                        {name:'part_name',index:'part_name',width:100,sortable: false, width:150},
                        {name:'cargo_code',index:'cargo_code',width:100,sortable: false, width:150},
                        {name:'loc_code',index:'loc_code',width:100,sortable: false, width:150},
                        {name:'supp_code',index:'supp_code',width:100,sortable: false, width:150},
                        {name:'spec1',index:'spec1',width:100,sortable: false, width:150},
                        {name:'spec',index:'spec',width:100,sortable: false, width:150},
                        {name:'unit_code',index:'unit_code',width:100,sortable: false, width:150},
                        {name:'max_qty',index:'max_qty',width:100,sortable: false, width:150},
                        {name:'min_qty',index:'min_qty',width:100,sortable: false, width:150},
                        {name:'user_name',index:'user_name',width:100,sortable: false, width:150},
                        {name:'update_date',index:'update_date',width:100,formatter:formmatter_date,sortable: false, width:150},
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
            selectBox:function(){  // select2 실행 메소드
                 $("#scm_part_select1").select2();

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
                    data:{keyword:"PART_TYPE"},
                    async: true,
                    dataType: "json",
                    success: function (data) {
                        _this.sys_common = data;
                    },
                    error: function () {

                    }
                });

            },
            common_group_get:function(){ // 코드그룹 가져오는 메소드
                 var _this =this;
                 axios
                     .post("sysCommon/common/group/get")
                     .then(function(response){
                        _this.common_group_list = response.data;
                        _this.common_group_code = response.data[0].group_code;
                        _this.sys_common.code_type = response.data[0].group_code;
                        _this.common_group_name = response.data[0].group_name;


                 });
            },
            part_group_change:function(code,name){ // select 박스 바뀔때
                var _this = this;
                 _this.sys_part_group_code = code;

            },
            bPart_get_btn:function (page) { // 조회 버튼
                var _this = this;
                _this.sys_part_group_code_post =_this.sys_part_group_code;
                _this.part_code_post =_this.part_code;

                $('#jqGrid').setGridParam({ url: 'scmPart/bPart/get',postData: { keyword: _this.sys_part_group_code_post,keyword2:_this.part_code_post} ,datatype: "json", page: page}).trigger("reloadGrid");

            },
            bPart_get_btn2:function (page) { // 조회 버튼
                var _this = this;

                $('#jqGrid').setGridParam({ url: 'scmPart/bPart/get',postData: { keyword: _this.sys_part_group_code_post,keyword2:_this.part_code_post} ,datatype: "json", page: page}).trigger("reloadGrid");

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
                                        _this.bPart_get_btn($("#jqGrid").getGridParam('page'));

                                    } else {

                                        _this.bPart_get_btn2($("#jqGrid").getGridParam('page'));
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
            _sys_bPart_cd_reset:function(){ //코드 객체 리셋
                 var _this = this;
                 _this.sys_bPart_cd = {
                     part_code:'',
                     part_name:'',
                     alc_code:'',
                     part_grp_code:'',
                     part_type:'',
                     cargo_code:'',
                     loc_code:'',
                     supp_code:'',
                     spec:'',
                     unit_code:'',
                     pack_qty:'',
                     max_qty:'',
                     min_qty:'',
                     user_code:'',
                     user_name:'',
                     create_date:'',
                     update_date:'',
                     keyword:''
                 };

            },
            common_update:function () { // 업데이트 모달창
                var _this = this;
                _this.add_update_check="U";

                $('#myModal').modal("show");
            },
            scmPart_add:function () {    // 추가를 누를때
                var _this = this;
                _this.add_update_check="I";
                _this._sys_bPart_cd_reset();
            },
            common_edit:function (data) {   // 수정 값을 객체에 저장
                var _this = this;
                _this._sys_bPart_cd_reset();
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
                            _this.bPart_get_btn2($("#jqGrid").getGridParam('page'));
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
            }

        }
    });
}
