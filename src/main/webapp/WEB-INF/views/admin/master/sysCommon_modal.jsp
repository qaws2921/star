<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<script src="resource/js/mes/admin/master/sysCommon/sysCommon_modal.js"></script>
<!-- 모달 -->
<div class="modal hide" id="myModal" role="dialog">
    <div class="modal-dialog modal-lg">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header modal-top">
                <label class="font-size-18">공통 코드관리 <span class="b_sub"> | Tobe MES</span></label>
                <button type="button" class="close modal-x-button" data-dismiss="modal">×</button>
            </div>
            <div class="modal-body form-inline">
                <label class="table_header"><i class="fas fa-arrow-alt-circle-right"></i>&nbsp;공통구분</label>
                <table class="type03">
                    <tr class="public-tr">
                        <th scope="row" class="public">그룹</th>
                        <th scope="row" class="content">{{ sys_common.code_type }}</th>
                        <th scope="row" class="public">코드</th>
                        <td>
                            <input type="text" v-if="add_update_check==='I'" v-model="sys_common.code_value" class="input-modal">
                            <input type="text" v-if="add_update_check==='U'" v-model="sys_common.code_value" class="input-modal">
                        </td>
                        <th scope="row" class="public">사용유무</th>
                        <td>
                            <select v-model="sys_common.use_yn" class="select-modal">
                                <option value="Y">Y</option>
                                <option value="N">N</option>
                            </select>
                        </td>
                    </tr>
                </table>
                <label class="table_header"><i class="fas fa-arrow-alt-circle-right"></i>&nbsp;코드명칭</label>
                <table class="type03">
                    <tr>
                        <th scope="row" class="content">명칭1</th>
                        <td><input type="text" class="input-modal" v-model="sys_common.code_name1"></td>
                        <th scope="row" class="content">명칭2</th>
                        <td><input type="text" class="input-modal" v-model="sys_common.code_name2"></td>
                    </tr>
                    <tr>
                        <th scope="row" class="content">명칭3</th>
                        <td><input type="text" class="input-modal" v-model="sys_common.code_name3"></td>
                        <th scope="row" class="content">명칭4</th>
                        <td><input type="text" class="input-modal" v-model="sys_common.code_name4"></td>
                    </tr>
                    <tr>
                        <th scope="row" class="content">명칭5</th>
                        <td><input type="text" class="input-modal" v-model="sys_common.code_name5"></td>
                        <th scope="row" class="content">명칭6</th>
                        <td><input type="text" class="input-modal" v-model="sys_common.code_name6"></td>
                    </tr>
                    <tr>
                        <th scope="row" class="content">명칭7</th>
                        <td><input type="text" class="input-modal" v-model="sys_common.code_name7"></td>
                        <th scope="row" class="content">명칭8</th>
                        <td><input type="text" class="input-modal" v-model="sys_common.code_name8"></td>
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

