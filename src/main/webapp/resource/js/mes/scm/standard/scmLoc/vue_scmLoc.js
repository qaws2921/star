window.onload = function () {
    // Vue.prototype.EventBus = new Vue();
    //
    // new Vue({
    //     el:"#app2",
    //     data:function () {
    //         return{
    //             test:"ss",
    //             test2:"ss2"
    //         }
    //     },
    //     mounted: function(){
    //
    //     },
    //     created:function() {
    //
    //     },
    //     methods:{
    //         _test3:function () {
    //             this.EventBus.$emit('message', this.test,'안녕하세요');
    //         }
    //     }
    // })


    new Vue({
        el:"#app",
        data: function () {
            return{

                test:'',
                cargo_cd_get:[],
                cargo_code:'',
                cargo_name:'',
                cargo_name_post:'',
                cargo_code_post:'',


                sys_loc_cd:{
                    cargo_code:'',
                    loc_code:'',
                    loc_name:'',
                    remark:'',
                    use_yn:'Y',
                    user_code:'',
                    user_name:'',
                    create_date:'',
                    update_date:'',
                    keyword:''
                },

                add_update_check:'I'    // 저장인지 수정인지 체크
            }
        },
        mounted: function(){

            var _this = this;

            _this.common_cargo_cd_get();

            _this.jqGrid(); // jqGrid 실행
            _this.selectBox(); // select2 실행
            jquery_scmLoc(_this); // vue 에서 실행 못하는 jquery
        },
        // created:function() {
        //     this.EventBus.$on('message', this._test2);
        // },
        methods:{
            // _test2:function(test2,test3){
            //     alert(test2);
            //     alert(test3);
            // },



             jqGrid:function(){ // jqGrid 메소드
                 var _this = this;
            var grid = $("#jqGrid");
                grid.jqGrid({
                    datatype: "json",
                    mtype: 'POST',
                    colNames:['구분','창고명','위치코드','위치명','비고','활성','등록자','등록일'],
                    colModel:[
                        {name:'cargo_code',index:'cargo_code',sortable: false,width:200},
                        {name:'cargo_name',index:'cargo_name' ,sortable: false,width:200},
                        {name:'loc_code',index:'loc_code',key: true,sortable: false,width:200},
                        {name:'loc_name',index:'loc_name',sortable: false,width:200},
                        {name:'remark',index:'remark',sortable: false,width:200},
                        {name:'use_yn',index:'use_yn',sortable: false,width:200},
                        {name:'user_name',index:'user_name',sortable: false,width:200},
                        {name:'update_date',index:'update_date',formatter:formmatter_date,sortable: false,width:200},
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
                        _this.loc_cd_edit(data); // 데이터 가공
                        _this.scmLoc_update(); // 수정창 띄어주기

                    }

                }).navGrid("#jqGridPager", { search: false, add: false, edit: false, del: false});


             },
            selectBox:function(){  // select2 실행 메소드
                 $("#cargo_cd_select").select2();
            },
            common_cargo_cd_get:function(){
                var _this = this;
                $.ajax({
                    url: "common/cargo/cd/get",
                    type: 'POST',
                    async: true,
                    dataType: "json",
                    success: function (data) {
                        _this.cargo_cd_get = data;
                        _this.cargo_code = data[0].cargo_code;
                        _this.cargo_name = data[0].cargo_name;

                    },
                    error: function () {

                    }
                });

            },

            cargo_cd_select_change:function(code,name){ // select 박스 바뀔때
                var _this = this;
                 _this.cargo_code = code;
                 _this.cargo_name = name;

            },
            scmLoc_get_btn:function (page) { // 조회 버튼
                var _this = this;
                _this.cargo_code_post =_this.cargo_code;
                _this.cargo_name_post =_this.cargo_name;

                $('#jqGrid').setGridParam({ url: 'scmLoc/get',postData: { keyword: _this.cargo_code_post} ,datatype: "json", page: page}).trigger("reloadGrid");

            },
            scmLoc_get_btn2:function (page) { // 조회 버튼
                var _this = this;

                $('#jqGrid').setGridParam({ url: 'scmLoc/get',postData: { keyword: _this.cargo_code_post} ,datatype: "json", page: page}).trigger("reloadGrid");

            },
            scmLoc_au:function (au) { // 저장 수정 ajax
                var _this = this
                var txt ='저장 히겠습니까?';
                if (au === 'U'){
                    var txt ='수정 히겠습니까?';

                }
                if(confirm(txt)){
                    if (_this.effectiveness()) {
                        _this.sys_loc_cd.keyword = au;
                        $.ajax({
                            url: "scmLoc/au",
                            data: _this.sys_loc_cd,
                            type: 'POST',
                            async: true,
                            dataType: "json",
                            success: function (data) {
                                if (data.result === 'NG'){
                                    alert(data.message);
                                } else {
                                    $('#myModal').modal("hide");
                                    if (au === 'I') {
                                        _this.scmLoc_get_btn($("#jqGrid").getGridParam('page'));

                                    } else {

                                        _this.scmLoc_get_btn2($("#jqGrid").getGridParam('page'));
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
            _sys_loc_cd_reset:function(){ //코드 객체 리셋
                 var _this = this;

                 _this.sys_loc_cd={
                    cargo_code:'',
                        loc_code:'',
                        loc_name:'',
                        remark:'',
                        use_yn:'Y',
                        user_code:'',
                        user_name:'',
                        create_date:'',
                        update_date:'',
                        keyword:''
                };


            },
            scmLoc_update:function () { // 업데이트 모달창
                var _this = this;
                _this.add_update_check="U";

                $('#myModal').modal("show");
            },
            scmLoc_add:function () {    // 추가를 누를때
                var _this = this;
                _this.add_update_check="I";
                _this._sys_loc_cd_reset();
                _this.sys_loc_cd.cargo_code = _this.cargo_code;
            },
            loc_cd_edit:function (data) {   // 수정 값을 객체에 저장
                var _this = this;
                _this._sys_loc_cd_reset();
                _this.sys_loc_cd.cargo_code = data.cargo_code;
                _this.sys_loc_cd.loc_code = data.loc_code;
                _this.sys_loc_cd.use_yn = data.use_yn;
                _this.sys_loc_cd.loc_name = data.loc_name;
                _this.sys_loc_cd.remark =data.remark;

            },
            scmLoc_delete:function () { //삭제를 누를시
                var _this = this;
                 var ids = jQuery("#jqGrid").getGridParam('selarrrow'); //체크된 row id들을 배열로 반환
                var loc_code = ids.join(",");
                if (loc_code === ''){
                    alert("삭제하는 데이터를 선택해주세요");
                } else {
                    if (confirm("삭제하겠습니까?")){
                        _this.scmLoc_delete_ajax(_this.cargo_code_post,loc_code);

                    }

                }
                // _this.common_group_code_post


            },
            scmLoc_delete_ajax:function (cargo_code,loc_code) {  // 삭제 ajax
                wrapWindowByMask();
                 var _this = this;
                 $.ajax({
                    url:"scmLoc/delete",
                    data:{cargo_code:cargo_code , loc_code:loc_code},
                    type : 'DELETE',
                    async: true,
                    dataType : "json",
                    success : function(data){
                        if (data.result === 'NG'){
                            closeWindowByMask();
                            alert(data.message);
                        } else {
                            closeWindowByMask();
                            _this.scmLoc_get_btn2($("#jqGrid").getGridParam('page'));
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
                if (_this.sys_loc_cd.cargo_code === ''){
                    alert("창고를 입력해주세요");
                    return false;
                }else if (_this.sys_loc_cd.loc_code === ''){
                    alert("위치코드를 입력해주세요");
                    return false;

                }else if (_this.sys_loc_cd.loc_name === ''){
                    alert("위치명을 입력해주세요");
                    return false;

                }else if (_this.sys_loc_cd.remark === ''){
                    alert("비고를 입력해주세요");
                    return false;

                } else {
                    return true;
                }

            }

        }
    });
}
