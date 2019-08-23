<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include file="../../include/header.jsp"%>
<%@include file="../menu.jsp"%>
<script src="resource/js/mes/scm/material/scmInFromDC//vue_scmInFromDC.js"></script>
<script src="resource/js/mes/scm/material/scmInFromDC/jquery_scmInFromDC.js"></script>
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
                <td class="left-header">입고처리</td>
                <td class="right-header"><i class="fas fa-home"></i> > SCM > 자재 > 입고처리</td>
            </tr>
            </tbody>
        </table>
        <div class="content-border">
            <table class="contents">
                <tbody>
                <tr>
                    <td class="button-group">
                        <button class="btn" @click="main_gat_btn(1)">조회</button>
                        <button class="btn" @click="main_in_push">입고처리</button>
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
                            전표번호
                        </td>
                        <td style="width: 314px">
                            <input class="input-cal" v-model="keyword.keyword">

                        </td>
                        <td class="top-td-la" style="padding-top: 10px;">
                            업체
                        </td>
                        <td>
                            <input type="text" class="input-modal w-25" v-model="supp_name" readonly>
                        </td>

                    </tr>
                    <tr>
                        <td class="top-td-la" style="padding-top: 10px;">
                            입고일자
                        </td>
                        <td style="width: 314px">
                            <input class="input-cal" id="date_input1" v-model="keyword_post.keyword3">

                        </td>
                        <td class="top-td-la" style="padding-top: 10px;">
                            비고
                        </td>
                        <td>
                            <input type="text" class="input-modal w-25"  v-model="keyword_post.keyword4">
                        </td>

                    </tr>
                </table>
            </div>

            <div style="margin:20px;">
                <table id="jqGrid"></table>

                <span class="oi oi-person"  ></span>
            </div>


        </div>
    </div>
</main>
</div>
</div>
</body>

<script type="text/javascript">

</script>

</html>
