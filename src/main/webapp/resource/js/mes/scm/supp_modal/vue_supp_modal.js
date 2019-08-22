
Vue.prototype.EventBus = new Vue();

   new Vue({
       el:"#app2",
        data:function () {
            return{
                test:'ss',
                keyword:'',
                sys_supp_cd:[]
            }
        },
        mounted:function () {
           var _this = this;
            jquery_supp_modal(_this);
            _this.selectBox();
            _this.sys_supp_cd_get();
            _this.jqGrid();
        },
        methods:{
            _test:function () {
                this.EventBus.$emit('message', this.test,'안녕하세요');
            },
            selectBox:function(){  // select2 실행 메소드
                $("#supp_select").select2();

            },
            sys_supp_cd_get:function(){
                var _this = this;
                $.ajax({
                    url: "common/supp/get",
                    type: 'POST',
                    async: true,
                    data:{keyword:_this.keyword},
                    dataType: "json",
                    success: function (data) {
                        _this.sys_supp_cd = data;
                    },
                    error: function () {

                    }
                });

            },
            jqGrid:function(){ // jqGrid 메소드
                var grid = $("#jqGrid3");
                grid.jqGrid({
                    datatype: "json",
                    mtype: 'POST',
                    colNames:['','업체코드','업체명','사업자번호','대표','주소'],
                    colModel:[

                        {name:'radio',index:'radio',align:"center",width:30 ,sortable: false, formatter: function (cellValue, option) {
                                return '<input type="radio" name="radio_' + option.gid + '" />';
                            }},
                        {name:'supp_code',index:'supp_code',width:100,key: true ,sortable: false},
                        {name:'supp_name',index:'supp_name',width:100,sortable: false},
                        {name:'supp_no',index:'supp_no',width:100,sortable: false},
                        {name:'ceo',index:'ceo',width:100,sortable: false},
                        {name:'address',index:'address',width:100,sortable: false},
                    ],
                     // autowidth: true,
                    width:600,
                    shrinkToFit:false,
                    height:200,

                    jsonReader: {cell:""},
                    rowNum: 100,
                    rowList: [100, 200, 300, 400],
                    viewrecords: true,
                    beforeSelectRow: function (rowid, e) {

                        var radio = $(e.target).closest('tr').find('input[type="radio"]');
                        $('input[name="radio_jqGrid3"]').removeAttr("checked");
                        radio.attr('checked', 'checked');
                        return true; // allow row selection
                    },



                    ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창


                    }

                }).navGrid("#jqGridPager", { search: false, add: false, edit: false, del: false});
            },
            supp_get_btn:function () { // 조회 버튼
                var _this = this;

                $('#jqGrid3').setGridParam({ url: 'common/supp/get',postData: { keyword: _this.keyword} ,datatype: "json"}).trigger("reloadGrid");

            },
            supp_select_change:function (code) {
                var _this= this;
                _this.keyword = code;
            },
            supp_bus:function (code,name) {
                this.EventBus.$emit('supp', code,name);
            },
            supp_x:function () {
                this.EventBus.$emit('supp', '','');

            }

        }
    });

