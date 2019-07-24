<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include file="../../include/header.jsp"%>
<%@include file="../menu.jsp"%>
<script src="resource/js/mes/admin/user/sysUserSupp/vue_sysUserSupp.js"></script>
<script src="resource/js/mes/admin/user/sysUserSupp/jquery_sysUserSupp.js"></script>

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div v-cloak id="app">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1">
                    <h1 class="font-size-18">사용자관리(협력사)</h1>
                    <span class="pa-b-20 font-size-9">홈 > 관리자 > 사용자관리 > 사용자관리(협력사)</span>
                </div>
                    <div class="content-border">

                    <div class="mg-left-20">
                        <button class="btn btn-primary btn_pd" @click="user_supp_get_btn(1)">조회</button>
                        <button class="btn btn-success btn_pd" type="button" data-toggle="modal" data-target="#myModal" @click="user_supp_cd_add">추가</button>
                        <button class="btn btn-danger btn_pd" @click="user_supp_cd_delete">삭제</button>
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
                                    <label class="font-size-18">사용자관리(협력사)</label>
                                    <button type="button" class="close" data-dismiss="modal">×</button>

                                </div>
                                <div class="modal-body form-inline">

                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test1" class="label-ba">사용자코드</label>
                                        <input v-if="add_update_check==='I'" v-model="sys_user_supp_cd.user_code" id="test1" class="form-control in-s-50">
                                        <input v-if="add_update_check==='U'" v-model="sys_user_supp_cd.user_code" readonly id="test1" class="form-control in-s-50">
                                    </div>
                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test2" class="label-ba">사용자명</label>
                                        <input v-model="sys_user_supp_cd.user_name" id="test2" class="form-control in-s-50">
                                    </div>

                                    <div class="mg-5 mg-auto form-group">
                                        <label for="suc_auth_select" class="label-ba">권한</label>
                                        <select v-model="sys_user_supp_cd.auth_code" style="width: 193px;" id="suc_auth_select" class="form-control se-s-193">
                                            <option value="">선택안함</option>
                                            <option v-for="(suc_auth,index) in auth_cd_get" :value="suc_auth.auth_code">{{ suc_auth.auth_name }}</option>
                                        </select>
                                    </div>
                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test3" class="label-ba">전화번호</label>
                                        <input v-model="sys_user_supp_cd.tel_no" id="test3" class="form-control in-s-50">
                                    </div>
                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test6" class="label-ba">이메일</label>
                                        <input v-model="sys_user_supp_cd.email" id="test6" class="form-control in-s-50">
                                    </div>


                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test7" class="label-ba">사용유무</label>
                                        <select v-model="sys_user_supp_cd.use_yn" style="width: 193px;" id="test7" class="form-control se-s-193">
                                            <option value="Y">Y</option>
                                            <option value="N">N</option>
                                        </select>
                                    </div>

                                    </div>

                                <div class="modal-footer">
                                    <button v-if="add_update_check==='I'"  type="button" class="btn btn-primary" @click="user_supp_cd_au('I')">저장</button>
                                    <button v-if="add_update_check==='U'"  type="button" class="btn btn-primary" @click="user_supp_cd_au('U')">저장</button>
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
