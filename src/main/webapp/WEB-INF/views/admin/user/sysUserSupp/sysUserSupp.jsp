<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include file="../../../include/header.jsp"%>
<%@include file="../../menu.jsp"%>
<script src="resource/js/mes/admin/user/sysUserSupp/vue_sysUserSupp.js"></script>
<script src="resource/js/mes/admin/user/sysUserSupp/jquery_sysUserSupp.js"></script>

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div v-cloak id="app">
                    <table class="menu-class">
                        <tbody>
                        <tr>
                            <td class="left-header">협력사 관리</td>
                            <td class="right-header"><i class="fas fa-home"></i> > 관리자 > 협력사관리</td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="content-border">
                        <table class="contents">
                            <tbody>
                            <tr>
                                <td class="button-group">
                                    <button class="btn" @click="main_get_btn(1)">조회</button>
                                    <button class="btn" type="button" data-toggle="modal" data-target="#myModal" @click="main_add_btn">추가</button>
                                    <button class="btn" @click="main_delete_btn">삭제</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                <div class="mg-20">
                    <table id="jqGrid"></table>
                    <div id="jqGridPager"></div>
                    <span class="oi oi-person"  ></span>
                </div>
                        <%@include file="sysUserSupp_modal.jsp"%>
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
