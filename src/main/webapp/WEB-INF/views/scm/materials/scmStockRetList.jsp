<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include file="../../include/header.jsp"%>
<%@include file="../menu.jsp"%>
<script src="resource/js/mes/scm/material/scmStockRet//vue_scmStockRetList.js"></script>
<script src="resource/js/mes/scm/material/scmStockRet/jquery_scmStockRetList.js"></script>
<script>
    jQuery(document).ready(function() {
        jQuery("#myModal2").draggable();
    });
</script>
<main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
    <div v-cloak id="app">
        <table class="menu-class">
            <tbody>
            <tr>
                <td class="left-header">자재반출</td>
                <td class="right-header"><i class="fas fa-home"></i> > SCM > 자재 > 자재반출</td>
            </tr>
            </tbody>
        </table>
        <div class="content-border">
            <table class="contents">
                <tbody>
                <tr>
                    <td class="button-group">
                        <button class="btn" @click="main_get_btn(1)">조회</button>
                        <button class="btn" type="button" @click="excel_download">저장</button>
                    </td>
                </tr>
                </tbody>
            </table>
            <span class="content_header">
                <i class="fas fa-arrow-alt-circle-right"></i>&nbsp;구분설정
            </span>

            <div class="public-mg">
                <table class="table table-border-bl" >
                    <tr>
                        <td class="top-td-la" style="padding-top: 10px;">
                            조회일자
                        </td>
                        <td class="w-200px">
                            <input class="input-cal" id="date_input1" v-model="keyword.start_date">
                            <span style="width: 10%">-</span>
                            <input class="input-cal" id="date_input2" v-model="keyword.end_date">

                        </td>
                        <td class="top-td-la" style="padding-top: 10px;">
                            품목그룹
                        </td>
                        <td class="w-100px">
                            <select id="cargo_select" class="select-width-154">
                                <option value="">전체</option>
                                <option v-for="(scc,index) in sys_cargo_cd" :key="index" :value="scc.cargo_code">{{ scc.cargo_name}}</option>
                            </select>
                        </td>
                        <td class="top-td-la" style="padding-top: 10px;">
                            업체
                        </td>
                        <td class="w-150px">
                            <input type="text" class="input-modal" readonly @click="_supp_bus_check('M')"  data-toggle="modal" data-target="#myModal3" v-model="supp_name">
                        </td>


                    </tr>
                </table>
            </div>

            <div style="margin:20px;">
                <table id="jqGrid"></table>
                <div id="jqGridPager"></div>
                <span class="oi oi-person"  ></span>
            </div>


        </div>
    </div>
    <%@include file="../supp_modal.jsp"%>
</main>
</div>
</div>
</body>

<script type="text/javascript">

</script>

</html>
