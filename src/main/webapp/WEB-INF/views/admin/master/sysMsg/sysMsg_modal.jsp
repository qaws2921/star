<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<script src="resource/js/mes/admin/master/sysMsg/sysMsg_modal.js"></script>
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
                <button v-if="add_update_check==='I'"  type="button" class="btn" @click="modal_add_update('I')">저장</button>
                <button v-if="add_update_check==='U'"  type="button" class="btn" @click="modal_add_update('U')">저장</button>
                <button type="button" class="btn" data-dismiss="modal">취소</button>
            </div>
        </div>
    </div>
</div>