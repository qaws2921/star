<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include file="../../../include/header.jsp"%>
<%@include file="../../menu.jsp"%>
<script src="resource/js/mes/admin/auth/sysAuthProgram/vue_sysAuthProgram.js"></script>
<script src="resource/js/mes/admin/auth/sysAuthProgram/jquery_sysAuthProgram.js"></script>

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div v-cloak id="app">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1">
                    <h1 class="font-size-18">권한그룹별 프로그램관리</h1>
                    <span class="pa-b-20 font-size-9">홈 > 관리자 > 권한관리 > 권한그룹별 프로그램관리</span>
                </div>
                    <div class="content-border">
                        <span class="content_header">
                                        <i class="fas fa-arrow-alt-circle-right"></i>&nbsp;그룹선택
                                    </span>
                        <div class="public-mg">
                            <table class="table table-border-bl" >
                                <tr>
                                    <td class="top-td-la" style="padding-top: 12px;">
                                        업무조회
                                    </td>
                                    <td>
                                        <select class="col-xl-2 input-modal"  id="menu_group_select">
                                            <option v-for="(mg,index) in menu_group_list" :key="index" :value="mg.menu_code">
                                                {{ mg.menu_name }}
                                            </option>
                                        </select>
                                        <button class="btn" @click="main_add_btn">저장</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    <div style="margin-left: 5px;margin-right: 5px;">
                        <div class="col-xl-12">
                            <div class="row">
                                <div class="col-md-4">
                                  <table id="jqGrid2"></table>
                                </div>
                                <div class="col-md-8">
                                    <div>
                                        <table id="jqGrid"></table>
                                        <div id="jqGridPager"></div>
                                        <span class="oi oi-person"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Modal -->

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
