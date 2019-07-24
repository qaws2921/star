<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include file="../../include/header.jsp"%>
<%@include file="../menu.jsp"%>
<script src="resource/js/mes/admin/auth/sysAuth/vue_sysAuth.js"></script>
<script src="resource/js/mes/admin/auth/sysAuth/jquery_sysAuth.js"></script>

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div v-cloak id="app">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1">
                    <h1 class="font-size-18">권한그룹관리</h1>
                    <span class="pa-b-20 font-size-9">홈 > 관리자 > 권한관리 > 권한그룹관리</span>
                </div>
                    <div class="content-border">

                    <div class="mg-left-20">
                        <button class="btn btn-primary btn_pd" @click="auth_cd_get_btn(1)">조회</button>
                        <button class="btn btn-success btn_pd" type="button" data-toggle="modal" data-target="#myModal" @click="auth_cd_add">추가</button>
                        <button class="btn btn-danger btn_pd" @click="auth_cd_delete">삭제</button>
                    </div>
                <div style="margin-left:20px;margin-top:20px">
                    <table id="jqGrid"></table>
                    <div id="jqGridPager"></div>
                    <span class="oi oi-person"  ></span>
                </div>
                    <!-- Modal -->
                    <div class="modal fade" id="myModal" role="dialog">
                        <div class="modal-dialog">

                            <!-- Modal content-->
                            <div class="modal-content">
                                <div class="modal-header">
                                    <label class="font-size-18">권한그룹관리</label>
                                    <button type="button" class="close" data-dismiss="modal">×</button>

                                </div>
                                <div class="modal-body form-inline">

                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test1" class="label-ba">권한그룹코드</label>
                                        <input  v-if="add_update_check==='I'" v-model="sys_auth_cd.auth_code" id="test1" class="form-control in-s-50">
                                        <input  v-if="add_update_check==='U'" v-model="sys_auth_cd.auth_code" readonly id="test1" class="form-control in-s-50">
                                    </div>
                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test2" class="label-ba">권한그룹명</label>
                                        <input v-model="sys_auth_cd.auth_name" id="test2" class="form-control in-s-50">
                                    </div>


                                    </div>

                                <div class="modal-footer">
                                    <button v-if="add_update_check==='I'"  type="button" class="btn btn-primary" @click="auth_cd_au('I')">저장</button>
                                    <button v-if="add_update_check==='U'"  type="button" class="btn btn-primary" @click="auth_cd_au('U')">저장</button>
                                    <button type="button" class="btn btn-primary" data-dismiss="modal">취소</button>
                                </div>
                                </div>
                            </div>

                        </div>
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
