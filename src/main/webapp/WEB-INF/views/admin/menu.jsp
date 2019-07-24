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
                            권한 관리<i class="fas fa-angle-down down-icon"></i>
                        </a>
                        <ul class="file-tree auth">

                            <li>
                                <a class="sysAuth" href="sysAuth?check=auth">권한그룹관리</a>
                            </li>
                            <li>
                                <a class="sysAuthProgram" href="sysAuthProgram?check=auth">권한그룹별 프로그램관리</a>
                            </li>


                        </ul>
                    </li>
                    <li class="nav-item bor-bm">
                        <a class="nav-link ba-color-999 admin menuMainA" href="#">
                            사용자 관리<i class="fas fa-angle-down down-icon"></i>
                        </a>
                        <ul class="file-tree user">

                                    <li>
                                        <a class="sysUser" href="sysUser?check=user">사용자관리</a>
                                    </li>
                                    <li>
                                        <a class="sysUserSupp" href="sysUserSupp?check=user">사용자관리(협력사)</a>
                                    </li>

                        </ul>
                    </li>
                    <li class="nav-item bor-bm">
                        <a class="nav-link ba-color-999 admin menuMainA" href="#">
                            마스터 관리<i class="fas fa-angle-down down-icon"></i>
                        </a>
                        <ul class="file-tree master">



                                    <li>
                                        <a href="#">사업장관리</a>
                                    </li>
                                    <li>
                                        <a class="sysCommon" href="sysCommon?check=master">공통코드 관리</a>
                                    </li>
                                    <li>
                                        <a class="sysPartGroup" href="sysPartGroup?check=master">품목그룹관리</a>
                                    </li>
                                    </li>
                                    <li>
                                        <a class="sysMsg" href="sysMsg?check=master">메세지 관리</a>
                                    </li>
                                    </li>
                                    <li>
                                        <a class="sysBoard" href="sysBoard?check=master">게시판관리</a>
                                    </li>

                        </ul>
                    </li>



                </ul>

            </div>
        </nav>




