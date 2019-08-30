<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<script src="resource/js/mes/admin/master/sysBoard/sysBoard_modal.js"></script>
<!-- 모달 -->
<div class="modal hide" id="myModal" role="dialog">
    <div class="modal-dialog modal-lg">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header modal-top">
                <label class="font-size-18">게시판 관리 <span class="b_sub"> | Tobe MES</span></label>
                <button type="button" class="close modal-x-button" data-dismiss="modal">×</button>
            </div>
            <div class="modal-body form-inline">
                <label class="table_header"><i class="fas fa-arrow-alt-circle-right"></i>&nbsp;공통구분</label>
                <table class="type03">
                    <tr class="public-tr">
                        <th scope="row" class="public">코드</th>
                        <td>
                            <input  v-if="add_update_check==='I'" v-model="sys_board_cd.board_code" class="input-modal">
                            <input  v-if="add_update_check==='U'" v-model="sys_board_cd.board_code" readonly class="input-modal">
                        </td>
                    </tr>
                </table>
                <label class="table_header"><i class="fas fa-arrow-alt-circle-right"></i>&nbsp;상세구분</label>
                <table class="type03">
                    <tr>
                        <th scope="row" class="content">영문명</th>
                        <td><input type="text" class="input-modal" v-model="sys_board_cd.board_en"></td>
                        <th scope="row" class="content">한글명</th>
                        <td><input type="text" class="input-modal" v-model="sys_board_cd.board_kr"></td>
                    </tr>
                    <tr>
                        <th scope="row" class="content">권한</th>
                        <td>
                            <select v-model="sys_board_cd.board_auth" class="select-modal">
                                <option value="C">당사</option>
                                <option value="A">전체</option>
                            </select>
                        </td>
                        <th scope="row" class="content">사용유무</th>
                        <td>
                            <select v-model="sys_board_cd.use_yn" class="select-modal">
                                <option value="Y">Y</option>
                                <option value="N">N</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" class="content">최대 파일 수</th>
                        <td>
                            <input onKeyup="this.value=this.value.replace(/[^0-9]/g,'');" v-model="sys_board_cd.files"class="input-modal">
                        </td>
                        <th scope="row" class="content">최대파일크기(MB)</th>
                        <td>
                            <input onKeyup="this.value=this.value.replace(/[^0-9]/g,'');" v-model="sys_board_cd.file_size"class="input-modal">
                        </td>
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
<!-- Modal -->