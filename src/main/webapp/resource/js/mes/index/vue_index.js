window.onload = function () {
    new Vue({
        el:"#app",
        data: function () {
            return{
                common_group_list:[],
                common_group_code:'',
                common_group_code_post:''
            }
        },
        mounted: function(){
            var _this = this;
            _this.jqGrid();
            _this.common_group_get();
            _this.selectBox();
            jquery_index(_this);
        },
        methods:{
             jqGrid:function(){
                 var _this = this;
            //     $("#jqGrid").jqGrid({
            //         url: 'http://trirand.com/blog/phpjqgrid/examples/jsonp/getjsonp.php?callback=?&qwery=longorders',
            //         mtype: "GET",
            //         datatype: "jsonp",
            //         colModel: [
            //             { label: 'OrderID', name: 'OrderID', key: true},
            //             { label: 'Customer ID', name: 'CustomerID'},
            //             { label: 'Order Date', name: 'OrderDate'},
            //             { label: 'Freight', name: 'Freight'},
            //             { label:'Ship Name', name: 'ShipName'}
            //         ],
            //         viewrecords: true,
            //         width: 1500,
            //         height: 500,
            //         rowNum: 100,
            //
            //         rowList: [100, 500, 1000, 2000],
            //         multiselect:true,
            //         beforeSelectRow: function (rowid, e) {
            //             var $myGrid = $(this),
            //                 i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
            //                 cm = $myGrid.jqGrid('getGridParam', 'colModel');
            //             return (cm[i].name === 'cb');
            //         },
            //         pager: "#jqGridPager"
            //     });
            var grid = $("#jqGrid");
                grid.jqGrid({


                    datatype: "json",
                    mtype: 'POST',
                    colNames:['공용그룹','코드','명칭1','명칭2','명칭3','명칭4','사용유무','등록자','등록일'],
                    colModel:[
                        {name:'code_type',index:'code_type'},
                        {name:'code_value',index:'code_value',key: true },
                        {name:'code_name1',index:'code_name1'},
                        {name:'code_name2',index:'code_name2'},
                        {name:'code_name3',index:'code_name3'},
                        {name:'code_name4',index:'code_name4'},
                        {name:'use_yn',index:'use_yn'},
                        {name:'user_code',index:'user_code'},
                        {name:'create_date',index:'create_date'},


                    ],
                    width:1500,
                    height:500,
                    pager:'#jqGridPager',
                    jsonReader: {cell:""},
                    rowNum: 100,
                    rowList: [100, 200, 300, 400],
                    viewrecords: true,
                    multiselect:true,
                    beforeSelectRow: function (rowid, e) {
                        var $myGrid = $(this),
                            i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                            cm = $myGrid.jqGrid('getGridParam', 'colModel');
                        return (cm[i].name === 'cb');
                    },
                    ondblClickRow: function (rowid, iRow, iCol, e) {
                        $('#jqGrid').setGridParam({ url: 'common/get',postData: { code_type: _this.common_group_code_post}, datatype: "json", page: 1}).trigger("reloadGrid");
                    }

                }).navGrid("#jqGridPager", { search: false, add: false, edit: false, del: false});


             },
            selectBox:function(){
                 $("#common_group_select").select2();
            },
            common_group_get:function(){
                 var _this =this;
                 axios
                     .post("common/group/get")
                     .then(function(response){
                        _this.common_group_list = response.data;
                        _this.common_group_code = response.data[0].group_code;
                 });
            },
            common_group_change:function(value){
                var _this = this;
                 _this.common_group_code = value;
            },
            common_get_btn:function () {
                var _this = this;
                _this.common_group_code_post =_this.common_group_code;
                $('#jqGrid').setGridParam({ url: 'common/get',postData: { code_type: _this.common_group_code_post} ,datatype: "json", page: 1}).trigger("reloadGrid");

            }
        }
    });
}
