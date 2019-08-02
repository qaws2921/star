package com.tobe.mes.tobesystem.MES.SCM.STANDARD.SCMBPrice;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_BPRICE_CD.SYS_BPRICE_CD;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.ByteArrayOutputStream;
import java.util.ArrayList;
import java.util.List;

@RestController
public class SCMBPrice_RESTCONTROLLER {
    @Autowired
    private SCMBPrice_SERVICE scmbPrice_service;

    @RequestMapping(value = "/scmBPrice/excel/download",method = RequestMethod.POST)
    public byte[] scmBPrice_excel_download(HttpServletResponse response ) throws  Exception{
        return scmbPrice_service.scmBPrice_excel_download(response);
    }




//    private Sheet s;
//
//    private XSSFWorkbook wb;
//    private IndexedColors mHeaderColor =  IndexedColors.YELLOW;
//
//    @RequestMapping(value = "/scmBPrice/excel/download2",method = RequestMethod.POST)
//    public byte[] writeWorkbook(HttpServletResponse response){
//        wb = new XSSFWorkbook();
//
//        String fileName="test";
//        List<SYS_BPRICE_CD> sys_bprice_cdList = scmbPrice_service.scmBPrice_excel_download2();
//        byte[] bytes = new byte[0];
//        try {
//            s = wb.createSheet("sheet1");
//
//            int i=0;
//            int n=-1;
//            ArrayList<String> header = new ArrayList<>();
//            header.add("업체코드");
//            header.add("단가구분");
//            header.add("시작일");
//            header.add("종료일");
//            header.add("단가");
//            header.add("사용유무");
//
//            for (i=0;i<header.size();i++){
//                setCellValue(0,i,header.get(i),header.size());
//            }
//
////            while ( n++ < 10 ) {
//
//                for(i=1;i<sys_bprice_cdList.size()+1;i++){
//                    setCellValue(i,0,sys_bprice_cdList.get(i-1).getSupp_code(),0);
//                    setCellValue(i,1,sys_bprice_cdList.get(i-1).getCode_type(),0);
//                    setCellValue(i,2,sys_bprice_cdList.get(i-1).getStart_date(),0);
//                    setCellValue(i,3,sys_bprice_cdList.get(i-1).getStop_date(),0);
//                    setCellValue(i,4, String.valueOf(sys_bprice_cdList.get(i-1).getUnit_price()),0);
//                    setCellValue(i,5,sys_bprice_cdList.get(i-1).getUse_yn(),0);
//
//
//                }
//
//
//
//                // 메모리 flush
//
////                ((SXSSFSheet)s).flushRows();  // retain 100 last rows and flush all others
//
////            }
//
//            // 파일생성
//            response.setHeader("Set-Cookie", "fileDownload=true; path=/");
//            response.setHeader("Content-Disposition", "attachment; filename=codetest.xlsx");
//            response.setContentLength(bytes.length);
//            response.setContentType("application/vnd.ms-excel");
//
//            ByteArrayOutputStream out = new ByteArrayOutputStream();
//            wb.write(out);
//            bytes = out.toByteArray();
//            out.close();
//
//
//           return bytes;
//
//        }catch(Exception e){
//            e.printStackTrace();
//            System.err.println(e.getMessage());
//            return null;
//        }
//
//    }
//
//
//    public Row getRow(int i,int size){
//        Row r = s.getRow(i);
//        if (i == 0){
//            for(int j=0;j<size;j++) {
//                s.setColumnWidth(j, 5000);
//            }
//        }
//        if(r==null) {
//            r = s.createRow(i);
//        }
//        return r;
//    }
//
//    public Cell getCell(int row, int cell,int size){
//
//        Row r = getRow(row,size);
//        Cell c = r.getCell(cell);
//        if(c==null)
//            c = r.createCell(cell);
//        return c;
//    }
//
//    public void setCellValue(int row, int cell, String cellvalue, int size){
//        Cell c = getCell(row,cell,size);
//        if (row == 0){
//
//        CellStyle cellStyle = wb.createCellStyle();
//        cellStyle.setBorderBottom(CellStyle.BORDER_THIN);
//        cellStyle.setBottomBorderColor(IndexedColors.BLACK.getIndex());
//
//        cellStyle.setBorderLeft(CellStyle.BORDER_THIN);
//        cellStyle.setLeftBorderColor(IndexedColors.BLACK.getIndex());
//
//        cellStyle.setBorderRight(CellStyle.BORDER_THIN);
//        cellStyle.setRightBorderColor(IndexedColors.BLACK.getIndex());
//
//        cellStyle.setBorderTop(CellStyle.BORDER_THIN);
//        cellStyle.setTopBorderColor(IndexedColors.BLACK.getIndex());
//
//        cellStyle.setFillPattern(CellStyle.SOLID_FOREGROUND);
//        cellStyle.setFillForegroundColor(mHeaderColor.getIndex());
//
//        cellStyle.setAlignment(CellStyle.ALIGN_CENTER);
//
//        c.setCellStyle(cellStyle);
//        }
//        c.setCellValue(cellvalue);
//    }


}


