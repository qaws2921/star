<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="Description" CONTENT="SI / MES / MMS / SCM / TPM / WMS 개발 전문 기업 투비시스템">
    <meta name="keywords" CONTENT="SI,MES,MMS,SCM,TPM,WMS,투비시스템">
    <meta name="Classification" CONTENT="(주)투비시스템">
    <meta name="robots" content="index,follow" />
    <link rel="canonical" href="http://www.tobesystem.co.kr">
    <meta property="og:type" content="website">
    <link rel="shortcut icon" href="resource/img/icon.png">
    <title>투비 MES</title>

    <%--  JqGrido  --%>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="resource/Guriddo_jqGrid_JS_5.4.0/js/jquery.jqGrid.min.js"></script>
    <script src="resource/Guriddo_jqGrid_JS_5.4.0/js/i18n/grid.locale-kr.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/font/octicons.css">
    <link rel="stylesheet" type="text/css" media="screen" href="resource/Guriddo_jqGrid_JS_5.4.0/css/ui.jqgrid-bootstrap4.css" />
    <%--  JqGrido  --%>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="resource/css/custom.css">
    <link href="resource/css/dashboard.css" rel="stylesheet">
    <script src="https://kit.fontawesome.com/0d910fc03d.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.7/css/select2.min.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.7/js/select2.min.js"></script>
    <script type="text/javascript" src="resource/js/jem/axios.js"></script>
    <script type="text/javascript" src="resource/js/jem/axios.min.js"></script>
    <script type="text/javascript" src="resource/js/jem/es6-promise.auto.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="resource/js/mes/header/header.js"></script>
    <script src="resource/js/tree/file-explore.js"></script>
    <link href="resource/js/tree/file-explore.css" rel="stylesheet"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <style type="text/css">
        [v-cloak] {
            display: none;
        }
    </style>
</head>
<body>
<div id="body"></div>
<script>
    $.jgrid.defaults.responsive = true;
    $.jgrid.defaults.styleUI = 'Bootstrap4';
    $.jgrid.defaults.iconSet = "Octicons";
    $(document).ready(function() {

        $(".file-tree").filetree();

    });

</script>
<div class="container-fluid">
    <div class="row">
        <div class="col-md-6 top">Tobe MES System</div>
        <div class="col-md-6 top right">HelpDesk</div>
    </div>
    <div class="row banner">
        <div class="col-md-3">
            <a href="/"><img src="resource/img/logo-sm.png" alt="(주)투비시스템" class="ci-img"/></a>
        </div>
        <div class="col-md-9 right">
            <p class="gb-banner-info">
                <a class="gb-a" href="#"><i class="fas fa-user"></i> 김재일님</a>
                <span class="gb-banner">|</span>
                <a class="gb-a" href="#">로그아웃</a>
            </p>
        </div>
    </div>
    <div class="row sub_header">
        <nav class="navbar navbar-expand-lg">
            <button class="navbar-toggler navs" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-align-justify"></i> 1공장
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">메뉴</a>
                            <a class="dropdown-item" href="#">메뉴</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">메뉴</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-align-justify"></i> 2공장
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">메뉴</a>
                            <a class="dropdown-item" href="#">메뉴</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">메뉴</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-align-justify"></i> 3공장
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">메뉴</a>
                            <a class="dropdown-item" href="#">메뉴</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">메뉴</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-align-justify"></i> 4공장
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">메뉴</a>
                            <a class="dropdown-item" href="#">메뉴</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">메뉴</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</div>
</a>
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

                        <li class="nav-item">
                            <a class="nav-link ba-color-999 admin" href="#">
                                관리자 페이지<i class="fas fa-angle-down down-icon"></i>
                            </a>
                        <ul class="file-tree">
                            <li>
                                <a href="#">권한관리</a>

                                <ul>
                                <li>
                                    <a href="sysAuth?check=admin">권한그룹관리</a>
                                </li>
                                    <li>
                                    <a href="sysAuthProgram?check=admin">권한그룹별 프로그램관리</a>
                                </li>
                                </ul>

                            </li>
                            <li>
                                <a href="#">사용자관리</a>

                                <ul>
                                <li>
                                    <a href="#">사용자관리</a>
                                </li>
                                    <li>
                                    <a href="#">사용자관리(협력사)</a>
                                </li>
                                </ul>

                            </li>
                            <li>
                                <a href="#">마스터관리</a>

                                <ul>
                                    <li>
                                        <a href="#">사업장관리</a>
                                    </li>
                                    <li>
                                        <a href="sysCommon?check=admin">공통코드 관리</a>
                                    </li>
                                        <li>
                                        <a href="sysPartGroup?check=admin">품목그룹관리</a>
                                    </li>
                                    </li>
                                    <li>
                                        <a href="sysMsg?check=admin">메세지 관리</a>
                                    </li>
                                    </li>
                                    <li>
                                        <a href="sysBoard?check=admin">게시판관리</a>
                                    </li>
                                </ul>

                            </li>

                        </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ba-color-999 " href="#">
                                게시판<i class="fas fa-angle-down down-icon"></i>
                            </a>
                            <ul class="file-tree">
                                <li>
                                    <a href="#">게시판</a>

                                    <ul>
                                        <li>
                                            <a href="#">게시판1</a>
                                        </li>
                                        <li>
                                            <a href="#">게시판2</a>
                                        </li>
                                    </ul>

                                </li>


                            </ul>
                        </li>

                    </ul>

                    <ul class="nav flex-column mb-2">
                        <li class="nav-item">
                            <a class="nav-link ba-color-999" href="#">
                                메뉴
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ba-color-999" href="#">
                                메뉴
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ba-color-999" href="#">
                                메뉴
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ba-color-999" href="#">
                                메뉴
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>


