<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include file="../../include/header.jsp"%>
<%@include file="../menu.jsp"%>
<script src="resource/js/mes/scm/material/scmOut//vue_scmOut.js"></script>
<script src="resource/js/mes/scm/material/scmOut/jquery_scmOut.js"></script>
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
                <td class="left-header">출고관리</td>
                <td class="right-header"><i class="fas fa-home"></i> > SCM > 자재 > 출고관리</td>
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
                            받을창고
                        </td>
                        <td class="w-150px">
                            <select id="cargo_group_select"  v-model="keyword.keyword">
                                <option value="">선택안함</option>
                                <option v-for="(cg,index) in cargo_group" :key="index" :value="cg.cargo_code">{{ cg.cargo_name}}</option>
                            </select>
                        </td>

                    </tr>
                </table>
            </div>



            <div id="tabs">
                <ul>
                    <li><a href="#tabs-1">자재출고</a></li>
                    <li><a href="#tabs-2">요청출고</a></li>
                </ul>
                <div id="tabs-1">
                        <table id="jqGrid"></table>
                        <div id="jqGridPager"></div>
                        <span class="oi oi-person"  ></span>
                </div>
                <div id="tabs-2">
                    <table id="jqGrid2"></table>
                    <div id="jqGridPager2"></div>
                    <span class="oi oi-person"  ></span>
                </div>

            </div>

            <!-- Modal -->
            <div class="modal hide" id="myModal" role="dialog">
                <div class="modal-dialog" style="width: 1000px; max-width: 1000px;">

                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header modal-top">
                            <label class="font-size-18">출고관리 추가 <span class="b_sub"> | Tobe MES</span></label>
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
                                                            품목그룹
                                                        </td>
                                                        <td>
                                                            <select id="part_group_select"  v-model="keyword_modal.keyword2">
                                                                <option value="">전체</option>
                                                                <option v-for="(pgs,index) in sys_part_group" :key="index" :value="pgs.part_grp_code">{{ pgs.part_grp_name}}</option>
                                                            </select>
                                                        </td>

                                                    </tr>
                                                </table>

                                            </td>
                                            <td></td>
                                            <td style="width: 600px;">
                                                <table class="table table-border-bl" style="margin-bottom: 5px;" >
                                                    <tr>
                                                        <td class="top-td-la" style="padding-top: 10px;">
                                                            입고일자
                                                        </td>
                                                        <td>
                                                            <input id="date_input3" class="input-modal" v-model="scm_out.work_date">
                                                        </td>
                                                        <td class="top-td-la" style="padding-top: 10px;">
                                                            받을창고
                                                        </td>
                                                        <td>
                                                            <select id="cargo_group_modal_select"  v-model="scm_out.cargo_code_to">
                                                                <option value="">선택안함</option>
                                                                <option v-for="(cg,index) in cargo_group" :key="index" :value="cg.cargo_code">{{ cg.cargo_name}}</option>
                                                            </select>
                                                        </td>
                                                        <td class="top-td-la" style="padding-top: 10px;">
                                                            비고
                                                        </td>
                                                        <td>
                                                            <input  class="input-modal" v-model="scm_out.remark">
                                                        </td>

                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding-bottom: 20px;">
                                                <button class="btn" @click="modal_get_btn(1)">조회</button>

                                            </td>
                                            <td></td>
                                            <td style="padding-bottom: 20px;">
                                                <button v-if="add_update_check === 'I'" class="btn" @click="modal_add_btn">저장</button>


                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="w-400px">
                                                <span class="content_header" style="margin: 0px">
                                                    <i class="fas fa-arrow-alt-circle-right"></i>&nbsp;자재목록
                                                 </span>
                                                <table id="au_modal1"></table>
                                                <div id="au_modal_page1"></div>

                                            </td>
                                            <td>
                                                <div style="text-align: center; margin:auto; width: 30px">
                                                    <template v-if="add_update_check === 'I'">
                                                        <button class="btn" @click="btn_down" style="margin-bottom: 10px"><i class="fas fa-arrow-right"></i></button>
                                                         <button class="btn" @click="btn_up"><i class="fas fa-arrow-left"></i></button>
                                                    </template>
                                                    <template v-if="add_update_check === 'U'">
                                                        <button class="btn" style="margin-bottom: 10px"><i class="fas fa-arrow-right"></i></button>
                                                        <button class="btn"><i class="fas fa-arrow-left"></i></button>
                                                    </template>
                                                </div>
                                            </td>
                                            <td class="w-400px">
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
                            <label class="font-size-18">요청출고 <span class="b_sub"> | Tobe MES</span></label>
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
                                                            출고일자
                                                        </td>
                                                        <td>
                                                            <input id="date_input4" class="input-modal" v-model="sp_scm_out_order_get.work_date">
                                                        </td>
                                                        <td class="top-td-la" style="padding-top: 10px;">
                                                            받을창고
                                                        </td>
                                                        <td>
                                                            <input class="input-modal" v-model="sp_scm_out_order_get.cargo_name_to">
                                                        </td>
                                                        <td class="top-td-la" style="padding-top: 10px;">
                                                            비고
                                                        </td>
                                                        <td>
                                                            <input  class="input-modal" v-model="sp_scm_out_order_get.remark">
                                                        </td>

                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <button class="btn" @click="modal_add_btn2">저장</button>


                                            </td>
                                        </tr>
                                            <td style="width: 900px;">
                                                <span class="content_header" style="margin: 0px">
                                                    <i class="fas fa-arrow-alt-circle-right"></i>&nbsp;입고할 목록
                                                 </span>
                                                <table id="au_modal3"></table>

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
