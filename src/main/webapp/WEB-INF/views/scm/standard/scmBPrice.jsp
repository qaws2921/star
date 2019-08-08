<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include file="../../include/header.jsp"%>
<%@include file="../menu.jsp"%>
<script src="resource/js/mes/scm/standard/scmBPrice//vue_scmBPrice.js"></script>
<script src="resource/js/mes/scm/standard/scmBPrice/jquery_scmBPrice.js"></script>
<script>
    jQuery(document).ready(function() {
        jQuery("#myModal").draggable();
    });
</script>
<main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
    <div v-cloak id="app">
        <table class="menu-class">
            <tbody>
            <tr>
                <td class="left-header">매입단가 관리</td>
                <td class="right-header"><i class="fas fa-home"></i> > SCM > 기준정보 > 매입단가 관리</td>
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
<%--                        <a href="/scmBPriceExcelUp?active=scm&check=standard&befor=scmBPrice">--%>
<%--                            <button class="btn" >엑셀업</button>--%>
<%--                        </a>--%>
                        <button class="btn" data-toggle="modal" data-target="#myModal2">엑셀업</button>
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
                        <td style="width: 314px">
                            <input class="input-cal" id="date_input1">
                            <span style="width: 10%">-</span>
                            <input class="input-cal" id="date_input2">

                        </td>
                        <td class="top-td-la" style="padding-top: 10px;">
                            단가구분
                        </td>
                        <td>
                            <select class="select-modal" style="width: 300px;">
                                <option>표준단가</option>
                                <option>적용단가</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="top-td-la" style="padding-top: 10px;">
                            업체
                        </td>
                        <td>
                            <input type="text" name="name" class="search-input" value="" placeholder="업체 검색...">
                            <a class="seach-button"><i class='fas fa-search'></i></a>
                        </td>
                        <td class="top-td-la" style="padding-top: 10px;"> 품번</td>
                        <td>
                            <input type="text" name="name" class="search-input" value="" placeholder="품번 검색...">
                            <a class="seach-button"><i class='fas fa-search'></i></a>
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
                            <label class="font-size-18">매입단가 <span class="b_sub"> | Tobe MES</span></label>
                            <button type="button" class="close modal-x-button" data-dismiss="modal">×</button>
                        </div>
                        <div class="modal-body form-inline">

                            <label class="table_header"><i class="fas fa-arrow-alt-circle-right"></i>&nbsp;코드명칭</label>
                            <table class="type03">
                                <tr>
                                    <th scope="row" class="content">단가구분</th>
                                    <td><input type="text" class="input-modal" v-model="sys_common.code_name1"></td>
                                    <th scope="row" class="content">사용유무</th>
                                    <td>
                                        <select class="select-modal">
                                            <option value="Y">Y</option>
                                            <option value="N">N</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" class="content">업체코드</th>
                                    <td><input type="text" class="input-modal" v-model="sys_common.code_name1"></td>
                                    <th scope="row" class="content">품번</th>
                                    <td><input type="text" class="input-modal" v-model="sys_common.code_name2"></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="content">시작일</th>
                                    <td><input type="text" class="input-modal" v-model="sys_common.code_name1"></td>
                                    <th scope="row" class="content">종료일</th>
                                    <td><input type="text" class="input-modal" v-model="sys_common.code_name2"></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="content">화폐</th>
                                    <td><input type="text" class="input-modal" v-model="sys_common.code_name1"></td>
                                    <th scope="row" class="content">단가</th>
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


            <!-- Modal -->
            <div class="modal hide" id="myModal2" role="dialog">
                <div class="modal-dialog" style="width: 1000px; max-width: 1000px;">

                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header modal-top">
                            <label class="font-size-18">매입단가 <span class="b_sub"> | Tobe MES</span></label>
                            <button type="button" class="close modal-x-button" data-dismiss="modal">×</button>
                        </div>
                        <div class="modal-body form-inline">

                            <div class="content-border" style="width: 900px; margin: auto">
                                <table class="contents">
                                    <tbody>
                                    <tr>
                                        <td class="button-group">
                                            <button class="btn" @click="common_get_btn(1)">가져오기</button>
                                            <button class="btn" type="button" data-toggle="modal" data-target="#myModal" @click="common_add">적용하기</button>
                                            <a href="scmBPrice?active=scm&check=standard">

                                                <button class="btn">목록으로</button>
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
                                                단가구분
                                            </td>
                                            <td style="width: 500px">
                                                <select class="select-modal width-20">
                                                    <option>표준단가</option>
                                                    <option>적용단가</option>
                                                </select>

                                            </td>

                                        </tr>
                                        <tr>
                                            <td class="top-td-la" style="padding-top: 10px;">
                                                찾아보기
                                            </td>
                                            <td>
                                                <input type="file" name="name" class="search-input" value="" placeholder="파일을 넣어주세요">

                                            </td>

                                        </tr>
                                    </table>
                                </div>




                                <div style="margin:20px;">
                                    <table id="jqGrid2"></table>

                                    <span class="oi oi-person"  ></span>
                                </div>
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
