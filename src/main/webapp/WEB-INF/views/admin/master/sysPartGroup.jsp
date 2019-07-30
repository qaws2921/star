<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include file="../../include/header.jsp"%>
<%@include file="../menu.jsp"%>
<script src="resource/js/mes/admin/master/sysPartGroup/vue_sysPartGroup.js"></script>
<script src="resource/js/mes/admin/master/sysPartGroup/jquery_sysPartGroup.js"></script>

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div v-cloak id="app">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1">
                    <h1 class="font-size-18">품목그룹관리</h1>
                    <span class="pa-b-20 font-size-9">홈 > 관리자 > 마스터관리 > 품목그룹관리</span>
                </div>
                    <div class="content-border">

                    <div class="mg-left-20" style="float: right;margin-right: 30px;">
                        <button class="btn btn-primary btn_999" @click="part_group_get_btn(1)">조회</button>
                        <button class="btn btn-success btn_999" type="button" data-toggle="modal" data-target="#myModal" @click="part_group_add">추가</button>
                        <button class="btn btn-danger btn_999" @click="part_group_delete">삭제</button>
                    </div>
                        <div>sssadasda</div>
                <div style="margin-left:20px;margin-top:20px">
                    <table id="jqGrid"></table>
                    <div id="jqGridPager"></div>
                    <span class="oi oi-person"  ></span>
                </div>
                    <!-- Modal -->
                    <div class="modal hide" id="myModal" role="dialog">
                        <div class="modal-dialog modal-lg">

                            <!-- Modal content-->
                            <div class="modal-content">
                                <div class="modal-header modal-top">
                                    <label class="font-size-18">품목그룹관리</label>
                                    <button type="button" class="close" data-dismiss="modal">×</button>

                                </div>
                                <div class="modal-body form-inline">
                                    <table class="type03">
                                        <tr>
                                            <th scope="row" class="public">품목그룹코드</th>
                                            <td>

                                                <input  v-if="add_update_check==='I'" v-model="sys_part_group.part_grp_code" id="test1" class="form-control">
                                                <input  v-if="add_update_check==='U'" v-model="sys_part_group.part_grp_code" readonly id="test1" class="form-control">
                                            </td>
                                            <th scope="row" class="public">품목그룹명</th>
                                            <td>
                                                <input v-model="sys_part_group.part_grp_name" id="test2" class="form-control">
                                            </td>

                                        </tr>
                                        <tr>
                                            <th scope="row" class="public">설명</th>
                                            <td colspan="3">
                                                <input style="width: 100%;" v-model="sys_part_group.remark" id="test3" class="form-control">
                                            </td>
                                        </tr>
                                    </table>


                                    </div>

                                <div class="modal-footer">
                                    <button v-if="add_update_check==='I'"  type="button" class="btn btn-primary modal-footer-btn" @click="part_group_au('I')">저장</button>
                                    <button v-if="add_update_check==='U'"  type="button" class="btn btn-primary modal-footer-btn" @click="part_group_au('U')">저장</button>
                                    <button type="button" class="btn btn-primary modal-footer-btn" data-dismiss="modal">취소</button>
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
