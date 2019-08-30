<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<script src="resource/js/mes/admin/auth/sysAuth/sysAuth_modal.js"></script>
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
                <button v-if="add_update_check==='I'"  type="button" class="btn" @click="modal_add_update_btn('I')">저장</button>
                <button v-if="add_update_check==='U'"  type="button" class="btn" @click="modal_add_update_btn('U')">저장</button>
                <button type="button" class="btn" data-dismiss="modal">취소</button>
            </div>
        </div>
    </div>
</div>
<!-- Modal -->
