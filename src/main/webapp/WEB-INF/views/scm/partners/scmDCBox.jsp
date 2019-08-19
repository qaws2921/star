<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include file="../../include/header.jsp"%>
<%@include file="../menu.jsp"%>
<script src="resource/js/mes/scm/partners/scmDCBox/vue_scmDCBox.js"></script>
<script src="resource/js/mes/scm/partners/scmDCBox/jquery_scmDCBox.js"></script>
<script>
    jQuery(document).ready(function() {
        jQuery("#myModal3").draggable();
    });
</script>
<main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
    <div v-cloak id="app">
        <table class="menu-class">
            <tbody>
            <tr>
                <td class="left-header">부품식별표 인쇄</td>
                <td class="right-header"><i class="fas fa-home"></i> > SCM > 협력업체 > 부품식별표 인쇄</td>
            </tr>
            </tbody>
        </table>
        <div class="content-border">
            <table class="contents">
                <tbody>
                <tr>
                    <td class="button-group">
                        <button class="btn" @click="common_get_btn(1)">조회</button>
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
                            납품일자
                        </td>
                        <td>
                            <input class="input-modal" id="date" v-model="date">
                        </td>
                        <td class="top-td-la" style="padding-top: 10px;">
                            업체
                        </td>
                        <td>
                            <input type="text" readonly class="input-modal" data-toggle="modal" data-target="#myModal3" v-model="supp_name">
                        </td>
                        <td class="top-td-la" style="padding-top: 10px;">
                            품목그룹
                        </td>
                        <td>
                            <select id="part_group_select" class="select2-input"  v-model="sys_bPart_cd.part_grp_code">
                                <option value="">선택안함</option>
                                <option v-for="(pgs,index) in sys_part_group" :key="index" :value="pgs.part_grp_code">{{ pgs.part_grp_name}}</option>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="mg-20">
                <div class="col-xl-12">
                    <div class="row">
                        <div style="width: 450px">
                            <table id="jqGrid1"></table>
                            <div id="jqGridPager1"></div>
                            <span class="oi oi-person"></span>
                        </div>
                        <div style="text-align: center; margin:auto; width: 50px">
                            <button class="btn" style="margin-bottom: 10px"><i class="fas fa-arrow-right"></i></button>
                            <button class="btn"><i class="fas fa-arrow-left"></i></button>
                        </div>
                        <div style="width: 1000px">
                            <div>
                                <table id="jqGrid2"></table>
                                <div id="jqGridPager2"></div>
                                <span class="oi oi-person"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Modal -->
        </div>
    </div>
    <%@include file="../supp_modal.jsp"%>
</main>
</div>
</div>
</body>
</html>
