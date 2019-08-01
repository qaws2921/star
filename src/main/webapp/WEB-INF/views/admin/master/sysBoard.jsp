<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include file="../../include/header.jsp"%>
<%@include file="../menu.jsp"%>
<script src="resource/js/mes/admin/master/sysBoard/vue_sysBoard.js"></script>
<script src="resource/js/mes/admin/master/sysBoard/jquery_sysBoard.js"></script>

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div v-cloak id="app">
                    <table class="menu-class">
                        <tbody>
                        <tr>
                            <td class="left-header">게시판 관리</td>
                            <td class="right-header"><i class="fas fa-home"></i> > 관리자 > 게시판관리</td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="content-border">
                        <table class="contents">
                            <tbody>
                            <tr>
                                <td class="button-group">
                                    <button class="btn" @click="board_cd_get_btn(1)">조회</button>
                                    <button class="btn" type="button" data-toggle="modal" data-target="#myModal" @click="board_cd_add">추가</button>
                                    <button class="btn" @click="board_cd_delete">삭제</button>
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
                                        <button v-if="add_update_check==='I'"  type="button" class="btn" @click="board_cd_au('I')">저장</button>
                                        <button v-if="add_update_check==='U'"  type="button" class="btn" @click="board_cd_au('U')">저장</button>
                                        <button type="button" class="btn" data-dismiss="modal">취소</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <!-- Modal -->
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
