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

</head>
<body>
<script>
    $.jgrid.defaults.responsive = true;
    $.jgrid.defaults.styleUI = 'Bootstrap4';
    $.jgrid.defaults.iconSet = "Octicons";
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
                            <i class="fas fa-align-justify"></i> 관리자
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
                            <i class="fas fa-align-justify"></i> 게시판
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
                            <i class="fas fa-align-justify"></i> MES
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
                            <i class="fas fa-align-justify"></i> SCM
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
                        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                            <span><i class="fas fa-align-justify"></i> SCM</span>
                            <a class="d-flex align-items-center text-muted" href="#">
                            </a>
                        </h6>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                메뉴<i class="fas fa-angle-down down-icon"></i>
                            </a>
                            <li class="sub_menu">
                                <a class="sub_menu_a" href="#"><i class="fas fa-folder-open" style="color: #ffa920;"></i> 서브메뉴</a>
                            </li>
                            <li class="dsub_menu">
                                <img src="http://cfile26.uf.tistory.com/image/216841455694580A1ADE12"> <a class="dsub_menu_a" href="#">하위메뉴</a>
                            </li>
                            <li class="sub_menu">
                                <a class="sub_menu_a" href="#"><i class="fas fa-folder-open" style="color: #ffa920;"></i> 서브메뉴</a>
                            </li>
                            <li class="dsub_menu">
                                <img src="http://cfile26.uf.tistory.com/image/216841455694580A1ADE12"> <a class="dsub_menu_a" href="#">하위메뉴</a>
                            </li>
                            <li class="sub_menu">
                                <a class="sub_menu_a" href="#"><i class="fas fa-folder-open" style="color: #ffa920;"></i> 서브메뉴</a>
                            </li>
                            <li class="dsub_menu">
                                <img src="http://cfile26.uf.tistory.com/image/216841455694580A1ADE12"> <a class="dsub_menu_a" href="#">하위메뉴</a>
                            </li>
                        </li>
                    </ul>

                    <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span><i class="fas fa-align-justify"></i> MES</span>
                        <a class="d-flex align-items-center text-muted" href="#">
                            <span data-feather="plus-circle"></span>
                        </a>
                    </h6>
                    <ul class="nav flex-column mb-2">
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                메뉴
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                메뉴
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                메뉴
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                메뉴
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3">
                    <h1 class="h2">&nbsp;</h1>
                    <span>홈 > MES</span>
                </div>
                <div style="margin-left:20px;margin-top:20px">
                    <table id="jqGrid"></table>
                    <div id="jqGridPager"></div>
                    <span class="oi oi-person"  ></span>
                </div>
                <script type="text/javascript">
                    $(document).ready(function () {
                        $("#jqGrid").jqGrid({
                            url: 'http://trirand.com/blog/phpjqgrid/examples/jsonp/getjsonp.php?callback=?&qwery=longorders',
                            mtype: "GET",
                            datatype: "jsonp",
                            colModel: [
                                { label: 'OrderID', name: 'OrderID', key: true},
                                { label: 'Customer ID', name: 'CustomerID'},
                                { label: 'Order Date', name: 'OrderDate'},
                                { label: 'Freight', name: 'Freight'},
                                { label:'Ship Name', name: 'ShipName'}
                            ],
                            viewrecords: true,
                            width: 1500,
                            height: 500,
                            rowNum: 101,
                            pager: "#jqGridPager"
                        });
                    });
                </script>
                </div>
            </main>
        </div>
    </div>
</body>
</html>