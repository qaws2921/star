<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include file="../../include/header.jsp"%>
<%@include file="../menu.jsp"%>
<script src="resource/js/mes/scm/standard/scmLoc//vue_scmLoc.js"></script>
<script src="resource/js/mes/scm/standard/scmLoc/jquery_scmLoc.js"></script>

<main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
    <div v-cloak id="app">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1">
            <h1 class="font-size-18">로케이션관리</h1>
            <span class="pa-b-20 font-size-9">홈 > SCM > 기준정보 > 로케이션관리</span>
        </div>
        <div class="content-border">
            <div class="mg-left-20" style="float: right;margin-right: 30px;">
                <button class="btn btn-primary btn_999" @click="common_get_btn(1)">조회</button>
                <button class="btn btn-success btn_999" type="button" data-toggle="modal" data-target="#myModal" @click="common_add">추가</button>
                <button class="btn btn-danger btn_999" @click="common_delete">삭제</button>
            </div>
            <div class="mg-left-20">
                <table class="table table-border-bl" >
                    <tr>
                        <td class="top-td-la" style="padding-top: 12px;">
                            코드그룹
                        </td>
                        <td>
                            <select class="col-xl-2" id="common_group_select">
                                <option v-for="(cg,index) in common_group_list" :key="index" :value="cg.group_code">
                                    {{ cg.group_name }}
                                </option>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>
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
                            <label class="font-size-18">공통 코드관리 <b class="b_gubun">|</b> <span class="b_sub">Tobe MES</span></label>
                            <button type="button" class="close modal-x-button" data-dismiss="modal">×</button>
                        </div>
                        <div class="modal-body form-inline">
                            <label class="table_header">공통구분</label>
                            <table class="type03">
                                <tr>
                                    <th scope="row" class="public">그룹</th>
                                    <th scope="row" >{{ sys_common.code_type }}</th>
                                    <th scope="row" class="public">코드</th>
                                    <td>
                                        <input type="text" v-if="add_update_check==='I'" v-model="sys_common.code_value" class="form-control">
                                        <input type="text" v-if="add_update_check==='U'" v-model="sys_common.code_value" readonly class="form-control">
                                    </td>
                                    <th scope="row" class="public">사용유무</th>
                                    <td>
                                        <select v-model="sys_common.use_yn" style="width: 100px;" class="form-control">
                                            <option value="Y">Y</option>
                                            <option value="N">N</option>
                                        </select>
                                    </td>
                                </tr>
                            </table>
                            <label class="table_header">코드명칭</label>
                            <table class="type03">
                                <tr>
                                    <th scope="row">명칭1</th>
                                    <td><input type="text" class="form-control" v-model="sys_common.code_name1"></td>
                                    <th scope="row">명칭2</th>
                                    <td><input type="text" class="form-control" v-model="sys_common.code_name2"></td>
                                </tr>
                                <tr>
                                    <th scope="row">명칭3</th>
                                    <td><input type="text" class="form-control" v-model="sys_common.code_name3"></td>
                                    <th scope="row">명칭4</th>
                                    <td><input type="text" class="form-control" v-model="sys_common.code_name4"></td>
                                </tr>
                                <tr>
                                    <th scope="row">명칭5</th>
                                    <td><input type="text" class="form-control" v-model="sys_common.code_name5"></td>
                                    <th scope="row">명칭6</th>
                                    <td><input type="text" class="form-control" v-model="sys_common.code_name6"></td>
                                </tr>
                                <tr>
                                    <th scope="row">명칭7</th>
                                    <td><input type="text" class="form-control" v-model="sys_common.code_name7"></td>
                                    <th scope="row">명칭8</th>
                                    <td><input type="text" class="form-control" v-model="sys_common.code_name8"></td>
                                </tr>
                            </table>
                        </div>

                        <div class="modal-footer">
                            <button v-if="add_update_check==='I'"  type="button" class="btn btn-primary modal-footer-btn" @click="common_au('I')">저장</button>
                            <button v-if="add_update_check==='U'"  type="button" class="btn btn-primary modal-footer-btn" @click="common_au('U')">저장</button>
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
