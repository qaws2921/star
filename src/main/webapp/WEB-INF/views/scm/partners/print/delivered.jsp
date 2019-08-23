<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>TobeMES - 납입카드 발행</title>
    <link href="../resource/css/delivered.css" rel="stylesheet">
    <link rel="shortcut icon" href="../resource/img/icon.png">
</head>
<body>
<c:forEach items="${list}" var="data" varStatus="starus">


<div class="page">
    <c:forEach var="i" begin="1" end="2" step="1">
    <c:if test="${starus.index == 0}">
        <div class="btn-group">
            <a style="float: right" href="javascript:window.print()"><button id="print-button">인쇄하기</button></a>
        </div>
    </c:if>

        <c:if test="${i == 2}">
            <hr class="line-garo">
        </c:if>
    <h2>납 입 카 드</h2>
        <c:if test="${i == 1}">
            <span>(공급자 받는용)</span>
        </c:if>
        <c:if test="${i == 2}">
            <span>(받는용)</span>
        </c:if>

    <div class="top-warp">
        <span class="barcode float-l">*${scm_dc.dc_no}*</span>
        <fmt:parseDate value="${scm_dc.work_date}" var="noticePostDate" pattern="yyyyMMdd"/>
        <span class="float-r pd-t-15">납품일자 :  <fmt:formatDate value="${noticePostDate}" pattern="yyyy년 MM월 dd일"/></span>
    </div>
    <table>
        <tbody>
        <tr>
            <th>
                업체코드
            </th>
            <td class="b">
                ${scm_dc.supp_code}
            </td>
            <th>
                업체명
            </th>
            <td>
                ${scm_dc.supp_name}
            </td>
            <th>
                전표번호
            </th>
            <td class="b">

            </td>
        </tr>
        </tbody>
    </table>
    <table>
        <thead>
        <tr>
            <th>
                No
            </th>
            <th>
                차종
            </th>
            <th>
                품번
            </th>
            <th>
                품명
            </th>
            <th>
                단위
            </th>
            <th>
                검사등급
            </th>
            <th>
                납품량
            </th>
            <th>
                실입고
            </th>
            <th>
                LOT No
            </th>
        </tr>
        </thead>

        <c:forEach items="${data}" var="data2" varStatus="starus2">

        <tbody>
            <td>
                ${starus2.index +1 }
            </td>
            <td>

            </td>
            <td>
                ${data2.part_code}
            </td>
            <td>
                 ${data2.part_name}
            </td>
            <td>

            </td>
            <td>

            </td>
            <td class="txt-right">
               ${data2.pack_qty}
            </td>
            <td class="txt-right">

            </td>
            <td>
               ${data2.lot_no}
            </td>
        </tbody>
        </c:forEach>
        <c:forEach var="j" begin="1" end="${10-data.size()}" step="1">
            <tbody>
            <td>

            </td>
            <td>

            </td>
            <td>

            </td>
            <td>

            </td>
            <td>

            </td>
            <td>

            </td>
            <td class="txt-right">

            </td>
            <td class="txt-right">

            </td>
            <td>

            </td>
            </tbody>

        </c:forEach>

    </table>
    <table>
        <tbody>
        <tr>
            <th class="border-bt w-80" rowspan="2">
                경비
            </th>
            <th>
                확인
            </th>
            <th class="border-bt w-80" rowspan="2">
                검사
            </th>
            <th>
                확인
            </th>
            <th class="border-bt w-80" rowspan="2">
                자재
            </th>
            <th>
                확인
            </th>
            <th class="border-bt w-80" rowspan="4">
                결재
            </th>
            <th>
                담당
            </th>
            <th>
                검토
            </th>
            <th>
                승인
            </th>
        </tr>
        <td class="border-bt h-80">
        </td>
        <td class="border-bt h-80">
        </td>
        <td class="border-bt h-80">
        </td>
        <td class="border-bt h-80">
        </td>
        <td class="border-bt h-80">
        </td>
        <td class="border-bt h-80">
        </td>
        </tbody>
    </table>
    </c:forEach>

</div>
</c:forEach>
</body>
</html>
