<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include file="../../include/header.jsp"%>
<%@include file="../menu.jsp"%>
<script src="resource/js/mes/admin/master/sysMsg/vue_sysMsg.js"></script>
<script src="resource/js/mes/admin/master/sysMsg/jquery_sysMsg.js"></script>

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div v-cloak id="app">
                    <table class="menu-class">
                        <tbody>
                        <tr>
                            <td class="left-header">메세지 관리</td>
                            <td class="right-header"><i class="fas fa-home"></i> > 관리자 > 메세지관리</td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="content-border">
                        <table class="contents">
                            <tbody>
                            <tr>
                                <td class="button-group">
                                    <button class="btn" @click="msg_get_btn(1)">조회</button>
                                    <button class="btn" type="button" data-toggle="modal" data-target="#myModal" @click="msg_add">추가</button>
                                    <button class="btn" @click="msg_delete">삭제</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                <div class="mg-20">
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
