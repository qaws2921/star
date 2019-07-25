<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include file="../../include/header.jsp"%>
<%@include file="../menu.jsp"%>
<script src="resource/js/mes/scm/standard/scmCargo/vue_scmCargo.js"></script>
<script src="resource/js/mes/scm/standard/scmCargo/jquery_scmCargo.js"></script>

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div v-cloak id="app">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1">
                    <h1 class="font-size-18">창고 관리</h1>
                    <span class="pa-b-20 font-size-9">홈 > SCM > 기준정보 > 창고 관리</span>
                </div>
                    <div class="content-border">
                    <div class="mg-left-20">
                        <table class="table table-border-bl" >
                            <tr>
                                <td class="top-td-la" style="padding-top: 12px;">
                                    부서
                                </td>
                                <td>
                                    <select class="col-xl-2" id="common_cargo_type_select">
                                        <option v-for="(cctg,index) in common_cargo_type_get" :key="index" :value="cctg.code_value">{{ cctg.code_name1 }}</option>
                                    </select>
                                </td>
                            </tr>
                        </table>


                    </div>
                    <div class="mg-left-20">
                        <button class="btn btn-primary btn_pd" @click="cargo_type_get_btn(1)">조회</button>
                        <button class="btn btn-success btn_pd" type="button" data-toggle="modal" data-target="#myModal" @click="cargo_cd_add">추가</button>
                        <button class="btn btn-danger btn_pd" @click="cargo_cd_delete">삭제</button>
                    </div>
                <div style="margin-left:20px;margin-top:20px">
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
                                    <label class="font-size-18"></label>
                                    <button type="button" class="close" data-dismiss="modal">×</button>

                                </div>
                                <div class="modal-body form-inline">

                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test1" class="label-ba">구분</label>
                                        <input v-if="add_update_check === 'I'" v-model="common_cargo_type_name" id="test1" readonly class="form-control in-s-50">
                                        <input v-if="add_update_check === 'U'" v-model="common_cargo_type_name_other" id="test1" readonly class="form-control in-s-50">
                                    </div>
                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test2" class="label-ba">창고코드</label>
                                        <input v-if="add_update_check === 'I'" v-model="sys_cargo_cd.cargo_code" id="test2" class="form-control in-s-50">
                                        <input v-if="add_update_check === 'U'" v-model="sys_cargo_cd.cargo_code" id="test2" readonly class="form-control in-s-50">
                                    </div>
                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test3" class="label-ba">창고명</label>
                                        <input v-model="sys_cargo_cd.cargo_name" id="test3" class="form-control in-s-50">
                                    </div>

                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test7" class="label-ba">수량관리</label>
                                        <select v-model="sys_cargo_cd.qty_yn" style="width: 193px;" id="test7" class="form-control se-s-193">
                                            <option value="Y">Y</option>
                                            <option value="N">N</option>
                                        </select>
                                    </div>

                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test7" class="label-ba">사용유무</label>
                                        <select v-model="sys_cargo_cd.use_yn" style="width: 193px;" id="test7" class="form-control se-s-193">
                                            <option value="Y">Y</option>
                                            <option value="N">N</option>
                                        </select>
                                    </div>

                                    </div>

                                <div class="modal-footer">
                                    <button v-if="add_update_check==='I'"  type="button" class="btn btn-primary" @click="cargo_cd_au('I')">저장</button>
                                    <button v-if="add_update_check==='U'"  type="button" class="btn btn-primary" @click="cargo_cd_au('U')">저장</button>
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
