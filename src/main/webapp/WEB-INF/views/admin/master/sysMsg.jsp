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
                        <!-- 모달 -->
                        <div class="modal hide" id="myModal" role="dialog">
                            <div class="modal-dialog modal-lg">

                                <!-- Modal content-->
                                <div class="modal-content">
                                    <div class="modal-header modal-top">
                                        <label class="font-size-18">메세지 관리 <span class="b_sub"> | Tobe MES</span></label>
                                        <button type="button" class="close modal-x-button" data-dismiss="modal">×</button>
                                    </div>
                                    <div class="modal-body form-inline">
                                        <label class="table_header"><i class="fas fa-arrow-alt-circle-right"></i>&nbsp;공통구분</label>
                                        <table class="type03">
                                            <tr class="public-tr">
                                                <th scope="row" class="public">그룹</th>
                                                <td>
                                                    <input  v-if="add_update_check==='I'" v-model="sys_msg.msg_code" class="input-modal">
                                                    <input  v-if="add_update_check==='U'" v-model="sys_msg.msg_code" readonly class="input-modal">
                                                </td>
                                            </tr>
                                        </table>
                                        <label class="table_header"><i class="fas fa-arrow-alt-circle-right"></i>&nbsp;메세지명</label>
                                        <table class="type03">
                                            <tr>
                                                <th scope="row" class="content">메세지명1</th>
                                                <td><input type="text" class="input-modal" v-model="sys_msg.msg_name1"></td>
                                                <th scope="row" class="content">메세지명2</th>
                                                <td><input type="text" class="input-modal" v-model="sys_msg.msg_name2"></td>
                                            </tr>
                                            <tr>
                                                <th scope="row" class="content">메세지명3</th>
                                                <td><input type="text" class="input-modal" v-model="sys_msg.msg_name3"></td>
                                                <th scope="row" class="content">메세지명4</th>
                                                <td><input type="text" class="input-modal" v-model="sys_msg.msg_name4"></td>
                                            </tr>
                                        </table>
                                    </div>

                                    <div class="modal-footer">
                                        <button v-if="add_update_check==='I'"  type="button" class="btn" @click="msg_au('I')">저장</button>
                                        <button v-if="add_update_check==='U'"  type="button" class="btn" @click="msg_au('U')">저장</button>
                                        <button type="button" class="btn" data-dismiss="modal">취소</button>
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
