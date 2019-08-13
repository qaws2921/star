window.onload = function () {
    new Vue({
        el:"#app",
        data: function () {
            return{
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
            _this.jqGrid(); // jqGrid 실행
            _this.common_group_get(); // 코드그룹 가져오기
            jquery_scmDC(_this); // vue 에서 실행 못하는 jquery
            _this.jqGrid1(); // jqGrid 실행
            _this.jqGrid2(); // jqGrid 실행

        },
        methods:{
             jqGrid:function(){ // jqGrid 메소드
                 var _this = this;
            var grid = $("#jqGrid");
                grid.jqGrid({
                    datatype: "json",
                    mtype: 'POST',
                    colNames:['납품증번호','업체코드','업체명','납품일','입고구분','등록자'],
                    colModel:[
                        {name:'code_type',index:'code_type',width:50,sortable: false, width:250},
                        {name:'code_value',index:'code_value',width:100,key: true ,sortable: false, width:250},
                        {name:'code_name1',index:'code_name1',width:100,sortable: false, width:250},
                        {name:'code_name2',index:'code_name2',width:100,sortable: false, width:250},
                        {name:'code_name8',index:'code_name8',width:100,sortable: false, width:250},
                        {name:'code_name8',index:'code_name8',width:100,sortable: false, width:222},
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
                 $("#common_group_select").select2();
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
            common_group_change:function(code,name){ // select 박스 바뀔때
                var _this = this;
                 _this.common_group_code = code;
                 _this.sys_common.code_type=code;

                 _this.common_group_name = name;

            },
            common_get_btn:function (page) { // 조회 버튼
                var _this = this;
                _this.common_group_code_post =_this.common_group_code;

                $('#jqGrid').setGridParam({ url: 'sysCommon/common/get',postData: { code_type: _this.common_group_code_post} ,datatype: "json", page: page}).trigger("reloadGrid");

            },
            common_get_btn2:function (page) { // 조회 버튼
                var _this = this;

                $('#jqGrid').setGridParam({ url: 'sysCommon/common/get',postData: { code_type: _this.common_group_code_post} ,datatype: "json", page: page}).trigger("reloadGrid");

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
                                        _this.common_get_btn($("#jqGrid").getGridParam('page'));

                                    } else {

                                        _this.common_get_btn2($("#jqGrid").getGridParam('page'));
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
                            _this.common_get_btn2($("#jqGrid").getGridParam('page'));
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
