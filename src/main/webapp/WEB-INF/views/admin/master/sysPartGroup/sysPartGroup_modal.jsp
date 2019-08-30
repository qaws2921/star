<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<script src="resource/js/mes/admin/master/sysPartGroup/sysPartGroup_modal.js"></script>
<!-- 모달 -->
<div class="modal hide" id="myModal" role="dialog">
    <div class="modal-dialog modal-lg">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header modal-top">
                <label class="font-size-18">품목 그룹코드 관리 <span class="b_sub"> | Tobe MES</span></label>
                <button type="button" class="close modal-x-button" data-dismiss="modal">×</button>
            </div>
            <div class="modal-body form-inline">
                <label class="table_header"><i class="fas fa-arrow-alt-circle-right"></i>&nbsp;그룹코드</label>
                <table class="type03">
                    <tr class="public-tr">
                        <th scope="row" class="public">코드명</th>
                        <td>
                            <input  v-if="add_update_check==='I'" v-model="sys_part_group.part_grp_code" id="test1" class="input-modal">
                            <input  v-if="add_update_check==='U'" v-model="sys_part_group.part_grp_code" readonly id="test1" class="input-modal">
                        </td>
                        <th scope="row" class="public">그룹명</th>
                        <td>
                            <input v-model="sys_part_group.part_grp_name" id="test2" class="input-modal">

                        </td>
                        <th scope="row" class="public">설명</th>
                        <td>
                            <input v-model="sys_part_group.remark" id="test3" class="input-modal">
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