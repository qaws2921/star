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
    <title>(주)투비시스템 - MES</title>

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
</script>
<table class="top-sub-header">
    <tbody>
        <tr>
            <td class="top-left">TobeSystem MES</td>
            <td class="top-right">HelpDesk</td>
        </tr>
    </tbody>
</table>
<table class="top-header">
    <tbody>
        <tr>
            <td class="header-img"><img src="resource/img/logo/tobemes.png" alt="(주)투비시스템" class="ci-img"/></td>
            <td class="header-info">
                <i class="fas fa-user"></i>
                김종효님
                <span class="gb-banner">|</span>
                <a class="gb-a" href="#">로그아웃</a>
            </td>
        </tr>
    </tbody>
</table>
<table class="system-menu">
    <tbody>
        <tr>
            <td>
                <a href="sysCommon" class="s-menu s-menu-active">ADMIN</a>
                <a href="#" class="s-menu">MES</a>
                <a href="#" class="s-menu">SCM</a>
                <a href="#" class="s-menu">BOM</a>
            </td>
        </tr>
    </tbody>
</table>


