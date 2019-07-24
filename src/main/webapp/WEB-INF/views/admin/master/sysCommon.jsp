<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include file="../../include/header.jsp"%>
<%@include file="../menu.jsp"%>
<script src="resource/js/mes/admin/master/sysCommon/vue_sysCommon.js"></script>
<script src="resource/js/mes/admin/master/sysCommon/jquery_sysCommon.js"></script>

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div v-cloak id="app">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1">
                    <h1 class="font-size-18">공통코드관리</h1>
                    <span class="pa-b-20 font-size-9">홈 > 관리자 > 마스터관리 > 공통코드관리</span>
                </div>
                    <div class="content-border">
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
                    <div class="mg-left-20">
                        <button class="btn btn-primary btn_pd" @click="common_get_btn(1)">조회</button>
                        <button class="btn btn-success btn_pd" type="button" data-toggle="modal" data-target="#myModal" @click="common_add">추가</button>
                        <button class="btn btn-danger btn_pd" @click="common_delete">삭제</button>
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
                                    <label class="font-size-18">{{ common_group_name }}</label>
                                    <button type="button" class="close" data-dismiss="modal">×</button>

                                </div>
                                <div class="modal-body form-inline">

                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test1" class="label-ba">그룹코드</label>
                                        <input v-model="sys_common.code_type" readonly id="test1" class="form-control in-s-50">
                                    </div>
                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test2" class="label-ba">코드</label>
                                        <input  v-if="add_update_check==='I'" v-model="sys_common.code_value" id="test2" class="form-control in-s-50">
                                        <input  v-if="add_update_check==='U'" readonly v-model="sys_common.code_value" id="test2" class="form-control in-s-50">
                                    </div>
                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test3" class="label-ba">명칭1</label>
                                        <input v-model="sys_common.code_name1" id="test3" class="form-control in-s-50">
                                    </div>
                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test4" class="label-ba">명칭2</label>
                                        <input v-model="sys_common.code_name2" id="test4" class="form-control in-s-50">
                                    </div>
                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test5" class="label-ba">명칭3</label>
                                        <input v-model="sys_common.code_name3" id="test5" class="form-control in-s-50">
                                    </div>
                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test6" class="label-ba">명칭4</label>
                                        <input v-model="sys_common.code_name4" id="test6" class="form-control in-s-50">
                                    </div>
                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test6" class="label-ba">명칭5</label>
                                        <input v-model="sys_common.code_name5" id="test6" class="form-control in-s-50">
                                    </div>
                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test6" class="label-ba">명칭6</label>
                                        <input v-model="sys_common.code_name6" id="test6" class="form-control in-s-50">
                                    </div>
                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test6" class="label-ba">명칭7</label>
                                        <input v-model="sys_common.code_name7" id="test6" class="form-control in-s-50">
                                    </div>
                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test6" class="label-ba">명칭8</label>
                                        <input v-model="sys_common.code_name8" id="test6" class="form-control in-s-50">
                                    </div>


                                    <div class="mg-5 mg-auto form-group">
                                        <label for="test7" class="label-ba">사용유무</label>
                                        <select v-model="sys_common.use_yn" style="width: 193px;" id="test7" class="form-control se-s-193">
                                            <option value="Y">Y</option>
                                            <option value="N">N</option>
                                        </select>
                                    </div>

                                    </div>

                                <div class="modal-footer">
                                    <button v-if="add_update_check==='I'"  type="button" class="btn btn-primary" @click="common_au('I')">저장</button>
                                    <button v-if="add_update_check==='U'"  type="button" class="btn btn-primary" @click="common_au('U')">저장</button>
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
