<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include file="../include/header.jsp"%>
<script src="resource/js/mes/admin/sysMsg/vue_sysMsg.js"></script>
<script src="resource/js/mes/admin/sysMsg/jquery_sysMsg.js"></script>

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div v-cloak id="app">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1">
                    <h1 class="font-size-18">메세지관리</h1>
                    <span class="pa-b-20">홈 > MES > 메세지관리</span>
                </div>
                    <div class="content-border">

                    <div class="mg-left-20">
                        <button class="btn btn-primary btn_pd" @click="msg_get_btn">조회</button>
                        <button class="btn btn-success btn_pd" type="button" data-toggle="modal" data-target="#myModal" @click="msg_add">추가</button>
                        <button class="btn btn-danger btn_pd" @click="msg_delete">삭제</button>
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
                                    <label class="font-size-18">메세지관리</label>
                                    <button type="button" class="close" data-dismiss="modal">×</button>

                                </div>
                                <div class="modal-body form-inline">

                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test1" class="label-ba">메세지코드</label>
                                        <input  v-if="add_update_check==='I'" v-model="sys_msg.msg_code" id="test1" class="form-control in-s-50">
                                        <input  v-if="add_update_check==='U'" v-model="sys_msg.msg_code" readonly id="test1" class="form-control in-s-50">
                                    </div>
                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test2" class="label-ba">메세지명1</label>
                                        <input v-model="sys_msg.msg_name1" id="test2" class="form-control in-s-50">
                                    </div>
                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test2" class="label-ba">메세지명2</label>
                                        <input v-model="sys_msg.msg_name2" id="test3" class="form-control in-s-50">
                                    </div>
                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test2" class="label-ba">메세지명3</label>
                                        <input v-model="sys_msg.msg_name3" id="test4" class="form-control in-s-50">
                                    </div>
                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test2" class="label-ba">메세지명4</label>
                                        <input v-model="sys_msg.msg_name4" id="test5" class="form-control in-s-50">
                                    </div>

                                    </div>

                                <div class="modal-footer">
                                    <button v-if="add_update_check==='I'"  type="button" class="btn btn-primary" @click="msg_au('I')">저장</button>
                                    <button v-if="add_update_check==='U'"  type="button" class="btn btn-primary" @click="msg_au('U')">저장</button>
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
