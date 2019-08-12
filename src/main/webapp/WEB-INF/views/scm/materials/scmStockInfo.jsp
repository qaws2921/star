<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include file="../../include/header.jsp"%>
<%@include file="../menu.jsp"%>
<script src="resource/js/mes/scm/material/scmStrockInfo//vue_scmStrockInfo.js"></script>
<script src="resource/js/mes/scm/material/scmStrockInfo/jquery_scmStrockInfo.js"></script>

<main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
    <div v-cloak id="app">
        <table class="menu-class">
            <tbody>
            <tr>
                <td class="left-header">재고현황</td>
                <td class="right-header"><i class="fas fa-home"></i> > SCM > 자재 > 재고현황</td>
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
                            조회일자
                        </td>
                        <td>
                            <input class="input-cal w-100" id="date_input1">

                        </td>
                        <td class="top-td-la" style="padding-top: 10px;">
                            차종
                        </td>
                        <td>
                            <select class="select-modal">
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
                        <td class="top-td-la" style="padding-top: 10px;">
                            업체
                        </td>
                        <td>
                            <input type="text" name="name" class="search-input" value="" placeholder="업체 검색...">
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
            <<div class="modal hide" id="myModal" role="dialog">
            <div class="modal-dialog" style="width: 1000px; max-width: 1000px;">

                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header modal-top">
                        <label class="font-size-18">매입단가 <span class="b_sub"> | Tobe MES</span></label>
                        <button type="button" class="close modal-x-button" data-dismiss="modal">×</button>
                    </div>
                    <div class="modal-body form-inline">

                        <div style="width: 1000px; margin:0px">
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
    </div>

</main>
</div>
</div>
</body>
</html>
<script>
    jQuery(document).ready(function() {
        jQuery("#myModal").draggable();
    });
</script>