<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include file="../../../include/header.jsp"%>
<%@include file="../../menu.jsp"%>
<script src="resource/js/mes/admin/master/sysCommon/vue_sysCommon.js"></script>
<script src="resource/js/mes/admin/master/sysCommon/jquery_sysCommon.js"></script>

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div v-cloak id="app">
                    <table class="menu-class">
                        <tbody>
                        <tr>
                            <td class="left-header">공통코드관리</td>
                            <td class="right-header"><i class="fas fa-home"></i> > 관리자 > 공통코드관리</td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="content-border">
                        <table class="contents">
                            <tbody>
                            <tr>
                                <td class="button-group">
                                    <button class="btn" @click="main_get(1)">조회</button>
                                    <button class="btn" type="button" data-toggle="modal" data-target="#myModal" @click="main_add_btn">추가</button>
                                    <button class="btn" @click="main_delete">삭제</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <span class="content_header">
                            <i class="fas fa-arrow-alt-circle-right"></i>&nbsp;그룹선택
                        </span>
                        <div class="public-mg">
                        <table class="table table-border-bl" >
                            <tr>
                                <td class="top-td-la" style="padding-top: 12px;">
                                    코드그룹
                                </td>
                                <td>
                                    <select class="col-xl-2 input-modal" id="common_group_select">
                                        <option v-for="(cg,index) in common_group_list" :key="index" :value="cg.code_value">
                                            {{ cg.code_name1 }}
                                        </option>
                                    </select>
                                </td>
                            </tr>
                        </table>
                    </div>
                <div class="mg-20">
                    <table id="jqGrid"></table>
                    <div id="jqGridPager"></div>
                    <span class="oi oi-person"  ></span>
                </div>
                        <%@include file="sysCommon_modal.jsp"%>
                    </div>
                </div>

            </main>
        </div>
    </div>
</body>

<script type="text/javascript">
    $(document).ready(function () {

    });
</script>

</html>
