<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include file="../../include/header.jsp"%>
<%@include file="../menu.jsp"%>
<script src="resource/js/mes/scm/supplies/scmECIn//vue_scmECIn.js"></script>
<script src="resource/js/mes/scm/supplies/scmECIn/jquery_scmECIn.js"></script>
<script>
    jQuery(document).ready(function() {
        jQuery("#myModal2").draggable();
    });
</script>
<main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
    <div v-cloak id="app">
        <table class="menu-class">
            <tbody>
            <tr>
                <td class="left-header">입고처리</td>
                <td class="right-header"><i class="fas fa-home"></i> > SCM > 사급품 > 입고처리</td>
            </tr>
            </tbody>
        </table>
        <div class="content-border">
            <table class="contents">
                <tbody>
                <tr>
                    <td class="button-group">
                        <button class="btn" @click="main_gat_btn(1)">조회</button>
                        <button class="btn" type="button" data-toggle="modal" data-target="#myModal" @click="add_btn">추가</button>
                        <button class="btn" @click="main_delete">삭제</button>
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
                            <input class="input-cal" id="date_input1" v-model="keyword.start_date">
                            <span style="width: 10%">-</span>
                            <input class="input-cal" id="date_input2" v-model="keyword.end_date">

                        </td>
                        <td class="top-td-la" style="padding-top: 10px;">
                            업체
                        </td>
                        <td>
                            <input type="text" class="input-modal w-25" readonly @click="_supp_bus_check('M')"  data-toggle="modal" data-target="#myModal3" v-model="supp_name">
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
                <div class="modal-dialog" style="width: 1000px; max-width: 1000px;">

                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header modal-top">
                            <label class="font-size-18">자재입고 추가 <span class="b_sub"> | Tobe MES</span></label>
                            <button type="button" class="close modal-x-button" data-dismiss="modal">×</button>
                        </div>
                        <div class="modal-body form-inline">

                            <div>

                                <span class="content_header">
                                    <i class="fas fa-arrow-alt-circle-right"></i>&nbsp;구분설정
                                </span>
                                <div class="public-mg">
                                    <table>
                                        <tr>
                                            <td>
                                                <table class="table table-border-bl" style="margin-bottom: 5px;" >
                                                    <tr>

                                                        <td class="top-td-la" style="padding-top: 10px;">
                                                            출고증번호
                                                        </td>
                                                        <td>
                                                            <input class="input-modal" v-model="scm_ec.ec_no">
                                                        </td>
                                                        <td class="top-td-la" style="padding-top: 10px;">
                                                            공급업체
                                                        </td>
                                                        <td>
                                                            <input class="input-modal" @click="_supp_bus_check('S')"  data-toggle="modal" data-target="#myModal3" v-model="supp_name_modal">
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>

                                            <td style="padding-bottom: 20px;">
                                                <button class="btn" @click="modal_get_btn(1)">조회</button>
                                                <button v-if="add_update_check === 'I'" class="btn" @click="modal_add_btn">저장</button>


                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 900px;">
                                                <span class="content_header" style="margin: 0px">
                                                    <i class="fas fa-arrow-alt-circle-right"></i>&nbsp;입고할 목록
                                                 </span>
                                                <table id="au_modal2"></table>

                                            </td>
                                        </tr>

                                    </table>


                                </div>
                            </div>
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
                            <label class="font-size-18">자재입고 추가 <span class="b_sub"> | Tobe MES</span></label>
                            <button type="button" class="close modal-x-button" data-dismiss="modal">×</button>
                        </div>
                        <div class="modal-body form-inline">

                            <div>

                                <span class="content_header">
                                    <i class="fas fa-arrow-alt-circle-right"></i>&nbsp;구분설정
                                </span>
                                <div class="public-mg">
                                    <table>
                                        <tr>
                                            <td>
                                                <table class="table table-border-bl" style="margin-bottom: 5px;" >
                                                    <tr>

                                                        <td class="top-td-la" style="padding-top: 10px;">
                                                            납품일자
                                                        </td>
                                                        <td>

                                                        </td>
                                                        <td class="top-td-la" style="padding-top: 10px;">
                                                            전표번호
                                                        </td>
                                                        <td>

                                                        </td>
                                                        <td class="top-td-la" style="padding-top: 10px;">
                                                            입고일시
                                                        </td>
                                                        <td>

                                                        </td>
                                                        <td class="top-td-la" style="padding-top: 10px;">
                                                            공급업체
                                                        </td>
                                                        <td>

                                                        </td>
                                                        <td class="top-td-la" style="padding-top: 10px;">
                                                            공급받은업체
                                                        </td>
                                                        <td>

                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>

                                            <td style="padding-bottom: 20px;">
                                                <button class="btn" @click="modal_get_btn(1)">닫기</button>


                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 900px;">
                                                <span class="content_header" style="margin: 0px">
                                                    <i class="fas fa-arrow-alt-circle-right"></i>&nbsp;입고할 목록
                                                 </span>
                                                <table id="au_modal1"></table>

                                            </td>
                                        </tr>

                                    </table>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <%@include file="../supp_modal.jsp"%>
</main>
</div>
</div>
</body>

<script type="text/javascript">

</script>

</html>
