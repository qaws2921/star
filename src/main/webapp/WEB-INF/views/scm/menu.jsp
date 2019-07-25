<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<div class="container-fluid">
    <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">
                            <i class="fas fa-tachometer-alt"></i>
                            TOBE MES SYSTEM <span class="sr-only"></span>
                        </a>
                    </li>

                    <li class="nav-item bor-bm">
                        <a class="nav-link ba-color-999 menuMainA" href="#">
                            기준 정보<i class="fas fa-angle-down down-icon"></i>
                        </a>
                        <ul class="file-tree auth">

                            <li>
                                <a class="sysAuth" href="sysAuth?check=auth">매입단가관리</a>
                            </li>
                            <li>
                                <a class="sysAuthProgram" href="sysAuthProgram?check=auth">품목코드 관리</a>
                            </li>
                            <li>
                                <a class="sysAuthProgram" href="sysAuthProgram?check=auth">품목코드 관리</a>
                            </li>
                            <li>
                                <a class="scmCargo" href="scmCargo">창고 관리</a>
                            </li>
                            <li>
                                <a class="sysAuthProgram" href="sysAuthProgram?check=auth">업체코드 관리</a>
                            </li>


                        </ul>
                    </li>
                    <li class="nav-item bor-bm">
                        <a class="nav-link ba-color-999 admin menuMainA" href="#">
                            자재마감<i class="fas fa-angle-down down-icon"></i>
                        </a>
                        <ul class="file-tree user">

                                    <li>
                                        <a class="sysUser" href="sysUser?check=user">매입마감처리</a>
                                    </li>
                                    <li>
                                        <a class="sysUserSupp" href="sysUserSupp?check=user">매입마감내역</a>
                                    </li>
                                    <li>
                                        <a class="sysUserSupp" href="sysUserSupp?check=user">마감취소</a>
                                    </li>

                        </ul>
                    </li>
                    <li class="nav-item bor-bm">
                        <a class="nav-link ba-color-999 admin menuMainA" href="#">
                            자재<i class="fas fa-angle-down down-icon"></i>
                        </a>
                        <ul class="file-tree master">



                                    <li>
                                        <a href="#">재고현황</a>
                                    </li>
                                    <li>
                                        <a class="sysCommon" href="sysCommon?check=master">고객계획대비 소요량</a>
                                    </li>
                                    <li>
                                        <a class="sysPartGroup" href="sysPartGroup?check=master">생산계획대비 소요량</a>
                                    </li>
                                    </li>
                                    <li>
                                        <a class="sysMsg" href="sysMsg?check=master">수불현황</a>
                                    </li>
                                    </li>
                                    <li>
                                        <a class="sysBoard" href="sysBoard?check=master">입고처리</a>
                                    </li>

                                    <li>
                                        <a class="sysBoard" href="sysBoard?check=master">출고처리</a>
                                    </li>
                                    <li>
                                        <a class="sysBoard" href="sysBoard?check=master">재고조정</a>
                                    </li>
                                    <li>
                                        <a class="sysBoard" href="sysBoard?check=master">재고조정이력</a>
                                    </li>
                                    <li>
                                        <a class="sysBoard" href="sysBoard?check=master">자재이동</a>
                                    </li>
                                    <li>
                                        <a class="sysBoard" href="sysBoard?check=master">반출증관리</a>
                                    </li>

                        </ul>
                    </li>
                    <li class="nav-item bor-bm">
                        <a class="nav-link ba-color-999 admin menuMainA" href="#">
                            사급품<i class="fas fa-angle-down down-icon"></i>
                        </a>
                        <ul class="file-tree user">

                            <li>
                                <a class="sysUser" href="sysUser?check=user">출고증관리</a>
                            </li>
                            <li>
                                <a class="sysUserSupp" href="sysUserSupp?check=user">입고처리</a>
                            </li>
                            <li>
                                <a class="sysUserSupp" href="sysUserSupp?check=user">납품현황</a>
                            </li>

                        </ul>
                    </li>
                    <li class="nav-item bor-bm">
                        <a class="nav-link ba-color-999 admin menuMainA" href="#">
                            협력업체<i class="fas fa-angle-down down-icon"></i>
                        </a>
                        <ul class="file-tree user">

                            <li>
                                <a class="sysUser" href="sysUser?check=user">고객계획대비 소요량</a>
                            </li>
                            <li>
                                <a class="sysUserSupp" href="sysUserSupp?check=user">생산계획대비 소요량</a>
                            </li>
                            <li>
                                <a class="sysUserSupp" href="sysUserSupp?check=user">납품증관리</a>
                            </li>
                            <li>
                                <a class="sysUser" href="sysUser?check=user">부품식별표 인쇄</a>
                            </li>
                            <li>
                                <a class="sysUserSupp" href="sysUserSupp?check=user">납품현황</a>
                            </li>
                            <li>
                                <a class="sysUserSupp" href="sysUserSupp?check=user">마감현황</a>
                            </li>

                        </ul>
                    </li>


                </ul>

            </div>
        </nav>




