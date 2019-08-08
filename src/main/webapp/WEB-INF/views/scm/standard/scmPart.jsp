<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include file="../../include/header.jsp"%>
<%@include file="../menu.jsp"%>
<script src="resource/js/mes/scm/standard/scmPart//vue_scmPart.js"></script>
<script src="resource/js/mes/scm/standard/scmPart/jquery_scmPart.js"></script>

<main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
    <div v-cloak id="app">
        <table class="menu-class">
            <tbody>
            <tr>
                <td class="left-header">품목코드 관리</td>
                <td class="right-header"><i class="fas fa-home"></i> > SCM > 기준정보 > 품목코드 관리</td>
            </tr>
            </tbody>
        </table>
        <div class="content-border">
            <table class="contents">
                <tbody>
                <tr>
                    <td class="button-group">
                        <button class="btn" @click="common_get_btn(1)">조회</button>
                        <button class="btn" type="button" data-toggle="modal" data-target="#myModal" @click="common_add">추가</button>
                        <button class="btn" @click="common_delete">삭제</button>
                        <button class="btn" id="scmBPrice_excel_download" >엑셀다운</button>
                        <a href="/scmBPartExcelUp?active=scm&check=standard&befor=scmBPrice">
                            <button class="btn" >엑셀업</button>
                        </a>
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
                        <td>
                            <select class="select-modal width-20">
                                <option>전체</option>
                            </select>

                        </td>
                        <td class="top-td-la" style="padding-top: 10px;">
                            단가구분
                        </td>
                        <td>
                            <select class="select-modal width-20">
                                <option>전체</option>
                            </select>
                        </td>
                        <td class="top-td-la" style="padding-top: 10px;">
                            단가구분
                        </td>
                        <td>
                            <select class="select-modal width-20">
                                <option>전체</option>
                            </select>
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
                            <label class="font-size-18">품목코드 <span class="b_sub"> | Tobe MES</span></label>
                            <button type="button" class="close modal-x-button" data-dismiss="modal">×</button>
                        </div>
                        <div class="modal-body form-inline">

                            <label class="table_header"><i class="fas fa-arrow-alt-circle-right"></i>&nbsp;코드명칭</label>
                            <table class="type03">
                                <tr>
                                    <th scope="row" class="content">품목그룹</th>
                                    <td>
                                        <select class="select-modal">
                                            <option value="Y">Y</option>
                                            <option value="N">N</option>
                                        </select>
                                    </td>
                                    <th scope="row" class="content">품목구분</th>
                                    <td><input type="text" class="input-modal" v-model="sys_common.code_name2"></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="content">품목코드</th>
                                    <td><input type="text" class="input-modal" v-model="sys_common.code_name1"></td>
                                    <th scope="row" class="content">품목명</th>
                                    <td><input type="text" class="input-modal" v-model="sys_common.code_name2"></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="content">보관창고</th>
                                    <td><input type="text" class="input-modal" v-model="sys_common.code_name1"></td>
                                    <th scope="row" class="content">보관로케이션</th>
                                    <td><input type="text" class="input-modal" v-model="sys_common.code_name2"></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="content">업체코드</th>
                                    <td><input type="text" class="input-modal" v-model="sys_common.code_name1"></td>
                                    <th scope="row" class="content">업체명</th>
                                    <td><input type="text" class="input-modal" v-model="sys_common.code_name2"></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="content">규격</th>
                                    <td><input type="text" class="input-modal" v-model="sys_common.code_name1"></td>
                                    <th scope="row" class="content">단위</th>
                                    <td><input type="text" class="input-modal" v-model="sys_common.code_name2"></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="content">재고 최대</th>
                                    <td><input type="text" class="input-modal" v-model="sys_common.code_name1"></td>
                                    <th scope="row" class="content">재고 최소</th>
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
