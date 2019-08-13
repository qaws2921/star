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
                        <button class="btn" @click="bPart_get_btn(1)">조회</button>
                        <button class="btn" type="button" data-toggle="modal" data-target="#myModal" @click="scmPart_add">추가</button>
                        <button class="btn" @click="scmPart_delete">삭제</button>
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
                            품목그룹
                        </td>
                        <td class="td-width-200">
                            <select id="scm_part_select1" class="select-width-154">
                                <option value="">전체</option>
                                <option v-for="(spg , index) in sys_part_group" :key="index" :value="spg.part_grp_code">
                                    {{ spg.part_grp_name }}
                                </option>
                            </select>

                        </td>

                        <td class="top-td-la" style="padding-top: 10px;">
                            품목코드
                        </td>
                        <td>
                            <input v-model="part_code">
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
                                    <th scope="row" class="content">품목코드</th>
                                    <td>
                                        <input v-if="add_update_check==='I'" type="text" class="input-modal" v-model="sys_bPart_cd.part_code">
                                        <input v-if="add_update_check==='U'" readonly type="text" class="input-modal" v-model="sys_bPart_cd.part_code">
                                    </td>
                                    <th scope="row" class="content">품목명</th>
                                    <td><input type="text" class="input-modal" v-model="sys_bPart_cd.part_name"></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="content">품목그룹</th>
                                    <td>
                                        <select id="part_group_select" class="select-width-154"  v-model="sys_bPart_cd.part_grp_code">
                                            <option value="">선택안함</option>
                                            <option v-for="(pgs,index) in sys_part_group" :key="index" :value="pgs.part_grp_code">{{ pgs.part_grp_name}}</option>
                                        </select>
                                    </td>
                                    <th scope="row" class="content">품목구분</th>
                                    <td>
                                        <select id="common_select" class="select-width-154" v-model="sys_bPart_cd.part_type">
                                            <option value="">선택안함</option>
                                            <option v-for="(sc,index) in sys_common" :key="index" :value="sc.code_value">{{ sc.code_name1}}</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" class="content">보관창고</th>
                                    <td>
                                        <select id="cargo_select" class="select-width-154" v-model="sys_bPart_cd.cargo_code">
                                            <option value="">선택안함</option>
                                            <option v-for="(scc,index) in sys_cargo_cd" :key="index" :value="scc.cargo_code">{{ scc.cargo_name}}</option>
                                        </select>
                                    </td>
                                    <th scope="row" class="content">보관로케이션</th>
                                    <td>
                                        <select id="loc_select" class="select-width-154" v-model="sys_bPart_cd.loc_code">
                                            <option value="">선택안함</option>
                                            <option v-for="(slc,index) in sys_loc_cd" :key="index" :value="slc.loc_code">{{ slc.loc_name}}</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" class="content">업체코드</th>
                                    <td>
                                        <input type="text" readonly class="input-modal" data-toggle="modal" data-target="#myModal3" v-model="sys_bPart_cd.supp_code">
                                    </td>
                                    <th scope="row" class="content">업체명</th>
                                    <td><input type="text" readonly class="input-modal" v-model="sys_bPart_cd.supp_name"></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="content">규격</th>
                                    <td><input type="text" class="input-modal" v-model="sys_bPart_cd.spec"></td>
                                    <th scope="row" class="content">단위</th>
                                    <td>
                                        <select id="common_unit_select" class="select-width-154" v-model="sys_bPart_cd.unit_code">
                                            <option value="">선택안함</option>
                                            <option v-for="(scu,index) in sys_common_unit" :key="index" :value="scu.code_value">{{ scu.code_name1}}</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" class="content">재고 최대</th>
                                    <td><input type="text" class="input-modal" v-model="sys_bPart_cd.max_qty"></td>
                                    <th scope="row" class="content">재고 최소</th>
                                    <td><input type="text" class="input-modal" v-model="sys_bPart_cd.min_qty"></td>
                                </tr>
                            </table>
                        </div>

                        <div class="modal-footer">
                            <button v-if="add_update_check==='I'"  type="button" class="btn btn-primary modal-footer-btn" @click="scmPart_au('I')">저장</button>
                            <button v-if="add_update_check==='U'"  type="button" class="btn btn-primary modal-footer-btn" @click="scmPart_au('U')">저장</button>
                            <button type="button" class="btn btn-primary modal-footer-btn" data-dismiss="modal">취소</button>
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
    $(document).ready(function () {

    });
</script>

</html>
