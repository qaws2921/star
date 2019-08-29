<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<div class="container-fluid">
    <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
                <ul class="nav flex-column">
                    <li class="nav-item bor-bm">
                        <a class="nav-link ba-color-999 standard menuMainA" href="#">
                            기준 정보<i class="fas fa-angle-down down-icon"></i>
                        </a>
                        <ul class="file-tree">

                            <li>
                                <a class="scmBPrice" href="scmBPrice?active=scm&check=standard">매입단가관리</a>
                            </li>
                            <li>
                                <a class="scmPart" href="scmPart?active=scm&check=standard">품목코드 관리</a>
                            </li>
                            <li>
                                <a class="scmCargo" href="scmCargo?active=scm&check=standard">창고 관리</a>
                            </li>
                            <li>
                                <a class="scmLoc" href="scmLoc?active=scm&check=standard">로케이션관리</a>
                            </li>
                            <li>
                                <a class="scmSupp" href="scmSupp?active=scm&check=standard">업체코드 관리</a>
                            </li>


                        </ul>
                    </li>
                    <li class="nav-item bor-bm">
                        <a class="nav-link ba-color-999 admin menuMainA" href="#">
                            자재마감<i class="fas fa-angle-down down-icon"></i>
                        </a>
                        <ul class="file-tree user">

                                    <li>
                                        <a class="sysUser" href="sysUser?active=scm&check=user">매입마감처리</a>
                                    </li>
                                    <li>
                                        <a class="sysUserSupp" href="sysUserSupp?active=scm&check=user">매입마감내역</a>
                                    </li>
                                    <li>
                                        <a class="sysUserSupp" href="sysUserSupp?active=scm&check=user">마감취소</a>
                                    </li>

                        </ul>
                    </li>
                    <li class="nav-item bor-bm">
                        <a class="nav-link ba-color-999 materials menuMainA" href="#">
                            자재<i class="fas fa-angle-down down-icon"></i>
                        </a>
                        <ul class="file-tree master">



                                    <li>
                                        <a class="scmStockList" href="scmStockList?active=scm&check=materials">재고현황</a>
                                    </li>
                                    <li>
                                        <a class="sysCommon" href="sysCommon?active=scm&check=master">고객계획대비 소요량</a>
                                    </li>
                                    <li>
                                        <a class="sysPartGroup" href="sysPartGroup?active=scm&check=master">생산계획대비 소요량</a>
                                    </li>
                                    </li>
                                    <li>
                                        <a class="sysMsg" href="sysMsg?active=scm&check=master">수불현황</a>
                                    </li>
                                    </li>
                                    <li>
                                        <a class="scmInFromDC" href="scmInFromDC?active=scm&check=materials">입고처리</a>
                                    </li>
                                    <li>
                                        <a class="scmln" href="scmln?active=scm&check=materials">입고관리</a>
                                    </li>

                                    <li>
                                        <a class="scmOutOrder" href="scmOutOrder?active=scm&check=materials">출고요청</a>
                                    </li>
                                    <li>
                                        <a class="scmOut" href="scmOut?active=scm&check=materials">출고관리</a>
                                    </li>
                                    <li>
                                        <a class="scmStockRev" href="scmStockRev?active=scm&check=materials">재고조정</a>
                                    </li>
                                    <li>
                                        <a class="scmStockRet" href="scmStockRet?active=scm&check=materials">자재반출</a>
                                    </li>
                                    <li>
                                        <a class="sysBoard" href="sysBoard?active=scm&check=master">재고조정이력</a>
                                    </li>
                                    <li>
                                        <a class="sysBoard" href="sysBoard?active=scm&check=master">자재이동</a>
                                    </li>


                        </ul>
                    </li>
                    <li class="nav-item bor-bm">
                        <a class="nav-link ba-color-999 supplies menuMainA" href="#">
                            사급품<i class="fas fa-angle-down down-icon"></i>
                        </a>
                        <ul class="file-tree user">

                            <li>
                                <a class="scmECOut" href="scmECOut?active=scm&check=supplies">출고증관리</a>
                            </li>
                            <li>
                                <a class="scmECIn" href="scmECIn?active=scm&check=supplies">입고처리</a>
                            </li>
                            <li>
                                <a class="scmECList" href="scmECList?active=scm&check=supply">납품현황</a>
                            </li>

                        </ul>
                    </li>
                    <li class="nav-item bor-bm">
                        <a class="nav-link ba-color-999 partners menuMainA" href="#">
                            협력업체<i class="fas fa-angle-down down-icon"></i>
                        </a>
                        <ul class="file-tree user">

                            <li>
                                <a class="sysUser" href="#">고객계획대비 소요량</a>
                            </li>
                            <li>
                                <a class="scmPlanWorkPart" href="scmPlanWorkPart?active=scm&check=partners">생산계획대비 소요량</a>
                            </li>
                            <li>
                                <a class="scmDC" href="scmDC?active=scm&check=partners">납품증관리</a>
                            </li>
                            <li>
                                <a class="scmDCBox" href="scmDCBox?active=scm&check=partners">부품식별표 인쇄</a>
                            </li>
                            <li>
                                <a class="scmDCList" href="scmDCList?active=scm&check=partners">납품현황</a>
                            </li>
                            <li>
                                <a class="scmClosePart" href="scmClosePart?active=scm&check=partners">마감현황</a>
                            </li>
                            <li>
                                <a class="qmsPartInNgSupp" href="qmsPartInNgSupp?active=scm&check=partners">불량현황</a>
                            </li>

                        </ul>
                    </li>


                </ul>

            </div>
        </nav>




