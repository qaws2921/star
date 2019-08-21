<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>TobeMES - 부품식별표 발행 (대)</title>
    <link href="resource/css/barcode.css" rel="stylesheet">
    <link rel="shortcut icon" href="resource/img/icon.png">
</head>
<body class="x2">

<%--    <c:forEach items="${print_data}" var="data" varStatus="status">    --%>
<c:set var="page" value="${fn:length(print_data)}" />
        <c:forEach var="i" begin="1" end="${page+((page%1>=0.5)?(1-(page%1))%1:-(page%1))-1}" step="1">
            <div class="x2-page">


            <c:forEach items="${print_data}" var="data" varStatus="status">
                <c:if test="${status.index == (i%2 == 1 ? i-1 : i)  || status.index == (i%2 == 1 ? i : i+1)}">
                    <c:if test="${status.index ==0}">
                        <div class="x2-btn-group">
                            <a style="float: right" href="javascript:window.print()"><button id="print-button">인쇄하기</button></a>
                        </div>
                    </c:if>
                    <c:if test="${status.index % 2==1}">
                        <hr class="line-garo">
                    </c:if>
                        <table class="x2">
                            <tbody>
                            <tr>
                                <td colspan="2">
                                    부품식별표
                                </td>
                                <td colspan="2">
                                    <img src="resource/img/logo/tobemes.png" alt="(주)투비시스템" class="img"/>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    차종
                                </th>
                                <td class="b">
                                    ${data.part_code}
                                </td>
                                <th>
                                    업체명
                                </th>
                                <td>
                                    ${data.part_name}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    품번
                                </th>
                                <td class="b">
                                        ${data.box_no}
                                </td>
                                <th>
                                    ALC
                                </th>
                                <td>
                                        ${data.dc_no}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    품명
                                </th>
                                <td colspan="3">
                                    ${data.part_name}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    수량
                                </th>
                                <td class="b">
                                    ${data.order_qty}
                                </td>
                                <th>
                                    납품일자
                                </th>
                                <td>
                                    ${data.work_date}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    LOT
                                </th>
                                <td>
                                    ${data.lot_no}
                                </td>
                                <th>
                                    검수일자
                                </th>
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="4" class="barcode">
                                    *${data.part_code}${data.lot_no}${data.work_date}*
                                </td>
                            </tr>
                            </tbody>
                        </table>
                </c:if>
            </c:forEach>

</div>
    </c:forEach>
</body>
</html>
