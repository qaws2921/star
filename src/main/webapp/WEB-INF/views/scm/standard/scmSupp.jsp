<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include file="../../include/header.jsp"%>
<%@include file="../menu.jsp"%>
<script src="resource/js/mes/scm/standard/scmSupp//vue_scmSupp.js"></script>
<script src="resource/js/mes/scm/standard/scmSupp/jquery_scmSupp.js"></script>


<main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
    <div v-cloak id="app">
        <table class="menu-class">
            <tbody>
            <tr>
                <td class="left-header">업체관리</td>
                <td class="right-header"><i class="fas fa-home"></i> > SCM > 기준정보 > 업체관리</td>
            </tr>
            </tbody>
        </table>
        <div class="content-border">
            <table class="contents">
                <tbody>
                <tr>
                    <td class="button-group">
                        <button class="btn" @click="supp_cd_get(1)">조회</button>
                        <button class="btn" type="button" data-toggle="modal" data-target="#myModal" @click="supp_cd_add">추가</button>
                        <button class="btn" @click="supp_cd_delete">삭제</button>
                    </td>
                </tr>
                </tbody>
            </table>
            <span class="content_header">
                            <i class="fas fa-arrow-alt-circle-right"></i>&nbsp;그룹선택
                        </span>
            <div class="public-mg">
                <table class="table table-border-bl" >
                    <tr>
                        <td class="top-td-la" style="padding-top: 12px;">
                            구분
                        </td>
                        <td>
                            <select class="col-xl-2 input-modal" id="corp_type_select">
                               <option value="0">전체</option>
                               <option value="1">고객사</option>
                               <option value="2">협력사</option>
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
                            <label class="font-size-18">업체관리 <span class="b_sub"> | Tobe MES</span></label>
                            <button type="button" class="close modal-x-button" data-dismiss="modal">×</button>
                        </div>
                        <div class="modal-body form-inline">

                            <label class="table_header"><i class="fas fa-arrow-alt-circle-right"></i>&nbsp;코드명칭</label>
                            <table class="type03">
                                <tr>
                                    <th scope="row" class="content">업체코드</th>
                                    <td>
                                        <input v-if="add_update_check === 'I'" type="text" class="input-modal" v-model="sys_supp_cd.supp_code">
                                        <input v-if="add_update_check === 'U'" readonly type="text" class="input-modal" v-model="sys_supp_cd.supp_code">
                                    </td>
                                    <th scope="row" class="content">업체명</th>
                                    <td><input type="text" class="input-modal" v-model="sys_supp_cd.supp_name"></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="content">대표자</th>
                                    <td><input type="text" class="input-modal" v-model="sys_supp_cd.ceo"></td>
                                    <th scope="row" class="content">업체명(영문)</th>
                                    <td><input type="text" class="input-modal" v-model="sys_supp_cd.supp_name_en"></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="content">사업자번호</th>
                                    <td><input type="text" class="input-modal" v-model="sys_supp_cd.supp_no"></td>
                                    <th scope="row" class="content">전화번호</th>
                                    <td><input type="text" class="input-modal" v-model="sys_supp_cd.tel_no"></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="content">업태</th>
                                    <td><input type="text" class="input-modal" v-model="sys_supp_cd.buss_type"></td>
                                    <th scope="row" class="content">팩스번호</th>
                                    <td><input type="text" class="input-modal" v-model="sys_supp_cd.fax_no"></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="content">종목</th>
                                    <td><input type="text" class="input-modal" v-model="sys_supp_cd.category"></td>
                                    <th scope="row" class="content">결재방법</th>
                                    <td><input type="text" class="input-modal" v-model="sys_supp_cd.give_type"></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="content">주소</th>
                                    <td colspan="3"><input type="text" class="input-modal" v-model="sys_supp_cd.address"></td>

                                </tr>
                                <tr>
                                    <th scope="row" class="content">당담자</th>
                                    <td><input type="text" class="input-modal" v-model="sys_supp_cd.emp_name"></td>
                                    <th scope="row" class="content">고객사구분</th>
                                    <td>
                                        <select v-model="sys_supp_cd.corp_type1">
                                            <option value="Y">예</option>
                                            <option value="N">아니오</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" class="content">당담자(전화)</th>
                                    <td><input type="text" class="input-modal" v-model="sys_supp_cd.emp_tel"></td>
                                    <th scope="row" class="content">협력사구분</th>
                                    <td>
                                        <select v-model="sys_supp_cd.corp_type2">
                                            <option value="Y">예</option>
                                            <option value="N">아니오</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" class="content">이메일</th>
                                    <td><input type="text" class="input-modal" v-model="sys_supp_cd.emp_email"></td>
                                    <th scope="row" class="content">활성화</th>
                                    <td>
                                        <select v-model="sys_supp_cd.use_yn">
                                            <option value="Y">예</option>
                                            <option value="N">아니오</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" class="content">비고</th>
                                    <td colspan="3"><input type="text" class="input-modal" placeholder="디비에 컬럼 없음"></td>

                                </tr>
                            </table>
                        </div>

                        <div class="modal-footer">
                            <button v-if="add_update_check==='I'"  type="button" class="btn" @click="supp_cd_au('I')">저장</button>
                            <button v-if="add_update_check==='U'"  type="button" class="btn" @click="supp_cd_au('U')">저장</button>
                            <button type="button" class="btn" data-dismiss="modal">취소</button>
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
