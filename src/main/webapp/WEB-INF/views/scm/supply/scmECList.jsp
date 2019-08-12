<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include file="../../include/header.jsp"%>
<%@include file="../menu.jsp"%>
<script src="resource/js/mes/scm/supply/scmECList//vue_scmECList.js"></script>
<script src="resource/js/mes/scm/supply/scmECList/jquery_scmECList.js"></script>

<main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
    <div v-cloak id="app">
        <table class="menu-class">
            <tbody>
            <tr>
                <td class="left-header">납품현황</td>
                <td class="right-header"><i class="fas fa-home"></i> > SCM > 사급품 > 납품현황</td>
            </tr>
            </tbody>
        </table>
        <div class="content-border">
            <table class="contents">
                <tbody>
                <tr>
                    <td class="button-group">
                        <button class="btn" @click="common_get_btn(1)">조회</button>

                    </td>
                </tr>
                </tbody>
            </table>
            <span class="content_header">
                <i class="fas fa-arrow-alt-circle-right"></i>&nbsp;구분설정
            </span>

            <div class="public-mg">
                <table class="table table-border-bl" >
                    <tr>
                        <td class="top-td-la" style="padding-top: 10px;">
                            조회기간
                        </td>
                        <td style="width: 500px">
                            <input class="input-cal" id="date_input1">
                            <span style="width: 10%">-</span>
                            <input class="input-cal" id="date_input2">

                        </td>
                        <td class="top-td-la" style="padding-top: 10px;">
                            공급업체
                        </td>
                        <td>
                            <button class="btn">검색</button>
                        </td>
                        <td class="top-td-la" style="padding-top: 10px;">
                            공급받업체
                        </td>
                        <td>
                            <button class="btn">검색</button>
                        </td>
                    </tr>

                </table>
            </div>




            <div style="margin:20px;">
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
                            <label class="font-size-18">공통 코드관리 <span class="b_sub"> | Tobe MES</span></label>
                            <button type="button" class="close modal-x-button" data-dismiss="modal">×</button>
                        </div>
                        <div class="modal-body form-inline">
                            <label class="table_header"><i class="fas fa-arrow-alt-circle-right"></i>&nbsp;공통구분</label>
                            <table class="type03">
                                <tr class="public-tr">
                                    <th scope="row" class="public">창고</th>
                                    <th scope="row" class="content">{{ sys_common.code_type }}</th>
                                    <th scope="row" class="public">위치코드</th>
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
                                    <th scope="row" class="content">위치명</th>
                                    <td><input type="text" class="input-modal" v-model="sys_common.code_name1"></td>
                                    <th scope="row" class="content">비고</th>
                                    <td><input type="text" class="input-modal" v-model="sys_common.code_name2"></td>
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
