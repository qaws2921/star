<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div id="app2">
            <!-- Modal -->
            <div class="modal hide" id="myModal3" role="dialog">
                <div class="modal-dialog modal-lg">

                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header modal-top">
                            <label class="font-size-18">업체코드 <span class="b_sub"> | Tobe MES</span></label>
                            <button type="button" class="close modal-x-button" data-dismiss="modal">×</button>
                        </div>
                        <div class="modal-body">

                                <table class="contents">
                                    <tbody>
                                    <tr>
                                        <td class="button-group">
                                            <button class="btn" @click="supp_get_btn">조회</button>
                                            <button class="btn" id="supp_check">선택</button>
                                            <button class="btn" data-dismiss="modal">취소</button>

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
                                                업체코드/업체명
                                            </td>
                                            <td>
                                                <select id="supp_select" class="select-width-154">
                                                    <option value="">전체</option>
                                                    <option v-for="(ssc,index) in sys_supp_cd" :key="index" :value="ssc.supp_code">{{ ssc.supp_code }}/{{ssc.supp_name}}</option>
                                                </select>

                                            </td>

                                        </tr>

                                    </table>
                                </div>




                                <div class="mg-20">
                                    <table id="jqGrid3"></table>

                                    <span class="oi oi-person"  ></span>
                                </div>


                    </div>
                </div>

            </div>

        </div>

</div>
<script src="resource/js/mes/scm/supp_modal/jquery_supp_modal.js"></script>
<script src="resource/js/mes/scm/supp_modal/vue_supp_modal.js"></script>
