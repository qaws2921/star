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
                    <!-- Modal -->
                    <div class="modal fade" id="myModal" role="dialog">
                        <div class="modal-dialog">

                            <!-- Modal content-->
                            <div class="modal-content">
                                <div class="modal-header">
                                    <label class="font-size-18">게시판관리</label>
                                    <button type="button" class="close" data-dismiss="modal">×</button>

                                </div>
                                <div class="modal-body form-inline">

                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test1" class="label-ba">게시판코드</label>
                                        <input  v-if="add_update_check==='I'" v-model="sys_board_cd.board_code" id="test1" class="form-control in-s-50">
                                        <input  v-if="add_update_check==='U'" v-model="sys_board_cd.board_code" readonly id="test1" class="form-control in-s-50">
                                    </div>
                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test2" class="label-ba">영문명</label>
                                        <input v-model="sys_board_cd.board_en" id="test2" class="form-control in-s-50">
                                    </div>
                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test2" class="label-ba">한글</label>
                                        <input v-model="sys_board_cd.board_kr" id="test3" class="form-control in-s-50">
                                    </div>
                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test2" class="label-ba">권한</label>
                                        <select v-model="sys_board_cd.board_auth" style="width: 193px;" id="test7" class="form-control se-s-193">
                                            <option value="C">당사</option>
                                            <option value="A">전체</option>
                                        </select>
                                    </div>
                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test2" class="label-ba">최대파일수</label>
                                        <input onKeyup="this.value=this.value.replace(/[^0-9]/g,'');" v-model="sys_board_cd.files" id="test5" class="form-control in-s-50">
                                    </div>
                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test2" class="label-ba">최대파일크기(MB)</label>
                                        <input onKeyup="this.value=this.value.replace(/[^0-9]/g,'');" v-model="sys_board_cd.file_size" id="test5" class="form-control in-s-50">
                                    </div>
                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test2" class="label-ba">사용유무</label>
                                        <select v-model="sys_board_cd.use_yn" style="width: 193px;" id="test7" class="form-control se-s-193">
                                            <option value="Y">Y</option>
                                            <option value="N">N</option>
                                        </select>
                                    </div>

                                    </div>

                                <div class="modal-footer">
                                    <button v-if="add_update_check==='I'"  type="button" class="btn btn-primary" @click="board_cd_au('I')">저장</button>
                                    <button v-if="add_update_check==='U'"  type="button" class="btn btn-primary" @click="board_cd_au('U')">저장</button>
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
