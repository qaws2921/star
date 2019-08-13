<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include file="../../include/header.jsp"%>
<%@include file="../menu.jsp"%>
<script src="resource/js/mes/scm/standard/scmLoc//vue_scmLoc.js"></script>
<script src="resource/js/mes/scm/standard/scmLoc/jquery_scmLoc.js"></script>

<main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
    <div v-cloak id="app">
        <table class="menu-class">
            <tbody>
            <tr>
                <td class="left-header">로케이션 관리</td>
                <td class="right-header"><i class="fas fa-home"></i> > 기준정보 > 로케이션관리</td>
            </tr>
            </tbody>
        </table>
        <div class="content-border">
            <table class="contents">
                <tbody>
                <tr>
                    <td class="button-group">
                        <button class="btn" @click="scmLoc_get_btn(1)">조회</button>
                        <button class="btn" type="button" data-toggle="modal" data-target="#myModal" @click="scmLoc_add">추가</button>
                        <button class="btn" @click="scmLoc_delete">삭제</button>
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="mg-20">
                <table class="table table-border-bl" >
                    <tr>
                        <td class="top-td-la" style="padding-top: 12px;">
                            창고
                        </td>
                        <td>
                            <select class="col-xl-2" id="cargo_cd_select">
                                <option v-for="(ccg,index) in cargo_cd_get" :key="index" :value="ccg.cargo_code">{{ ccg.cargo_name }}</option>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="mg-20">
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
                            <label class="font-size-18">로케이션 관리 <span class="b_sub"> | Tobe MES</span></label>
                            <button type="button" class="close modal-x-button" data-dismiss="modal">×</button>
                        </div>
                        <div class="modal-body form-inline">
                            <label class="table_header"><i class="fas fa-arrow-alt-circle-right"></i>&nbsp;공통구분</label>
                            <table class="type03">
                                <tr class="public-tr">
                                    <th scope="row" class="public">창고</th>
                                    <th v-if="add_update_check==='I'" scope="row" class="content">{{ cargo_name }}</th>
                                    <th v-if="add_update_check==='U'" scope="row" class="content">{{ cargo_name_post }}</th>
                                    <th scope="row" class="public">위치코드</th>
                                    <td>
                                        <input type="text" v-if="add_update_check==='I'" v-model="sys_loc_cd.loc_code" class="input-modal">
                                        <input type="text" v-if="add_update_check==='U'" readonly v-model="sys_loc_cd.loc_code" class="input-modal">
                                    </td>
                                    <th scope="row" class="public">사용유무</th>
                                    <td>
                                        <select v-model="sys_loc_cd.use_yn" class="select-modal">
                                            <option value="Y">Y</option>
                                            <option value="N">N</option>
                                        </select>
                                    </td>
                                </tr>
                            </table>
                            <label class="table_header"><i class="fas fa-arrow-alt-circle-right"></i>&nbsp;코드명칭</label>
                            <table class="type03">
                                <tr>
                                    <th scope="row" class="content">위치명</th>
                                    <td><input type="text" class="input-modal" v-model="sys_loc_cd.loc_name"></td>
                                    <th scope="row" class="content">비고</th>
                                    <td><input type="text" class="input-modal" v-model="sys_loc_cd.remark"></td>
                                </tr>
                            </table>
                        </div>

                        <div class="modal-footer">
                            <button v-if="add_update_check==='I'"  type="button" class="btn btn-primary modal-footer-btn" @click="scmLoc_au('I')">저장</button>
                            <button v-if="add_update_check==='U'"  type="button" class="btn btn-primary modal-footer-btn" @click="scmLoc_au('U')">저장</button>
                            <button type="button" class="btn btn-primary modal-footer-btn" data-dismiss="modal">취소</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
<%--    <div id="app2">--%>
<%--        <div @click="_test3">{{ test }}</div>--%>
<%--    </div>--%>
</main>
</div>
</div>

</body>

<script type="text/javascript">
    $(document).ready(function () {

    });
</script>

</html>
