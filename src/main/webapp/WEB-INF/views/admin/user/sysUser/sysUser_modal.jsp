<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<script src="resource/js/mes/admin/user/sysUser/sysUser_modal.js"></script>
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
                            <input v-if="add_update_check==='I'" v-model="sys_user_cd.user_code"class="input-modal">
                            <input v-if="add_update_check==='U'" v-model="sys_user_cd.user_code" readonly class="input-modal">
                        </td>
                        <th scope="row" class="public">사용유무</th>
                        <td>
                            <select v-model="sys_user_cd.use_yn" class="select-modal">
                                <option value="Y">Y</option>
                                <option value="N">N</option>
                            </select>
                        </td>
                    </tr>
                </table>
                <label class="table_header"><i class="fas fa-arrow-alt-circle-right"></i>&nbsp;상세구분</label>
                <table class="type03">
                    <tr>
                        <th scope="row" class="content">사용자명</th>
                        <td><input type="text" class="input-modal" v-model="sys_user_cd.user_name"></td>
                        <th scope="row" class="content">부서명</th>
                        <td>
                            <select id="suc_dept_select" v-model="sys_user_cd.dept_code" class="select-modal">
                                <option value="">선택안함</option>
                                <option v-for="(suc_dept,index) in common_dept_get" :value="suc_dept.code_value">{{ suc_dept.code_name1 }}</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" class="content">직책</th>
                        <td>
                            <select id="suc_duty_select" v-model="sys_user_cd.duty_code" class="select-modal">
                                <option value="">선택안함</option>
                                <option v-for="(suc_duty,index) in common_duty_get" :value="suc_duty.code_value">{{ suc_duty.code_name1 }}</option>
                            </select>
                        </td>
                        <th scope="row" class="content">권한</th>
                        <td>
                            <select id="suc_auth_select" v-model="sys_user_cd.auth_code"class="select-modal">
                                <option value="">선택안함</option>
                                <option v-for="(suc_auth,index) in auth_cd_get" :value="suc_auth.auth_code">{{ suc_auth.auth_name }}</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" class="content">전화번호</th>
                        <td>
                            <input v-model="sys_user_cd.tel_no" class="input-modal">
                        </td>
                        <th scope="row" class="content">이메일</th>
                        <td>
                            <input v-model="sys_user_cd.email" class="input-modal">
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