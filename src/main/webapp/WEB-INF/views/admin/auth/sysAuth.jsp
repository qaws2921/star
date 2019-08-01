<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include file="../../include/header.jsp"%>
<%@include file="../menu.jsp"%>
<script src="resource/js/mes/admin/auth/sysAuth/vue_sysAuth.js"></script>
<script src="resource/js/mes/admin/auth/sysAuth/jquery_sysAuth.js"></script>

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div v-cloak id="app">
                    <table class="menu-class">
                        <tbody>
                        <tr>
                            <td class="left-header">권한그룹 관리</td>
                            <td class="right-header"><i class="fas fa-home"></i> > 관리자 > 권한그룹관리</td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="content-border">
                        <table class="contents">
                            <tbody>
                            <tr>
                                <td class="button-group">
                                    <button class="btn" @click="auth_cd_get_btn(1)">조회</button>
                                    <button class="btn" type="button" data-toggle="modal" data-target="#myModal" @click="auth_cd_add">추가</button>
                                    <button class="btn" @click="auth_cd_delete">삭제</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                <div class="mg-20">
                    <table id="jqGrid"></table>
                    <div id="jqGridPager"></div>
                    <span class="oi oi-person"  ></span>
                </div>
                        <!-- 모달 -->
                        <div class="modal hide" id="myModal" role="dialog">
                            <div class="modal-dialog modal-lg">

                                <!-- Modal content-->
                                <div class="modal-content">
                                    <div class="modal-header modal-top">
                                        <label class="font-size-18">사용자 관리 <span class="b_sub"> | Tobe MES</span></label>
                                        <button type="button" class="close modal-x-button" data-dismiss="modal">×</button>
                                    </div>
                                    <div class="modal-body form-inline">
                                        <label class="table_header"><i class="fas fa-arrow-alt-circle-right"></i>&nbsp;공통구분</label>
                                        <table class="type03">
                                            <tr class="public-tr">
                                                <th scope="row" class="public">코드</th>
                                                <td>
                                                    <input v-if="add_update_check==='I'" v-model="sys_auth_cd.auth_code"class="input-modal">
                                                    <input v-if="add_update_check==='U'" v-model="sys_auth_cd.auth_code" readonly class="input-modal">
                                                </td>
                                                <th scope="row" class="public">그룹명</th>
                                                <td>
                                                    <input v-model="sys_auth_cd.auth_name" class="input-modal">
                                                </td>
                                            </tr>
                                        </table>
                                    </div>

                                    <div class="modal-footer">
                                        <button v-if="add_update_check==='I'"  type="button" class="btn" @click="auth_cd_au('I')">저장</button>
                                        <button v-if="add_update_check==='U'"  type="button" class="btn" @click="auth_cd_au('U')">저장</button>
                                        <button type="button" class="btn" data-dismiss="modal">취소</button>
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
