<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<div class="container-fluid">
    <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
                <ul class="nav flex-column">
                    <li class="nav-item bor-bm">
                        <a class="nav-link ba-color-999 auth menuMainA" href="#">
                            권한 관리<i class="fas fa-angle-down down-icon"></i>
                        </a>
                        <ul class="file-tree">

                            <li>
                                <a class="sysAuth" href="sysAuth?active=admin&check=auth">권한그룹관리</a>
                            </li>
                            <li>
                                <a class="sysAuthProgram" href="sysAuthProgram?active=admin&check=auth">권한그룹별 프로그램관리</a>
                            </li>


                        </ul>
                    </li>
                    <li class="nav-item bor-bm">
                        <a class="nav-link ba-color-999 user menuMainA" href="#">
                            사용자 관리<i class="fas fa-angle-down down-icon"></i>
                        </a>
                        <ul class="file-tree">

                                    <li>
                                        <a class="sysUser" href="sysUser?active=admin&check=user">사용자관리</a>
                                    </li>
                                    <li>
                                        <a class="sysUserSupp" href="sysUserSupp?active=admin&check=user">사용자관리(협력사)</a>
                                    </li>

                        </ul>
                    </li>
                    <li class="nav-item bor-bm">
                        <a class="nav-link ba-color-999 master menuMainA" href="#">
                            마스터 관리<i class="fas fa-angle-down down-icon"></i>
                        </a>
                        <ul class="file-tree">



                                    <li>
                                        <a href="#">사업장관리</a>
                                    </li>
                                    <li>
                                        <a class="sysCommon" href="sysCommon?active=admin&check=master">공통코드 관리</a>
                                    </li>
                                    <li>
                                        <a class="sysPartGroup" href="sysPartGroup?active=admin&check=master">품목그룹관리</a>
                                    </li>
                                    </li>
                                    <li>
                                        <a class="sysMsg" href="sysMsg?active=admin&check=master">메세지 관리</a>
                                    </li>
                                    </li>
                                    <li>
                                        <a class="sysBoard" href="sysBoard?active=admin&check=master">게시판관리</a>
                                    </li>

                        </ul>
                    </li>



                </ul>

            </div>
        </nav>




