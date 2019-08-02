package com.tobe.mes.tobesystem.Bean;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import javax.servlet.http.HttpServletResponse;
import java.io.ByteArrayOutputStream;
import java.util.ArrayList;
import java.util.List;

public class ExcelManager {


    public byte[] writeWorkbook(HttpServletResponse response,ArrayList<String> header,List<List<Object>> content,String filename ) {
        XSSFWorkbook wb = new XSSFWorkbook();
        Sheet s = null;



        byte[] bytes = new byte[0];
        try {
            s = wb.createSheet("sheet1");

            int i = 0;
            int n = -1;

            for (i = 0; i < header.size(); i++) {
                setCellValue(0, i, header.get(i), header.size(), wb, s);
            }

//            while ( n++ < 10 ) {

            for (i = 1; i < content.size() + 1; i++) {


                for (int j = 0; j < content.get(i - 1).size(); j++) {

                    setCellValue(i, j, String.valueOf(content.get(i - 1).get(j)), 0, wb, s);

                }

            }
                // 메모리 flush

//                ((SXSSFSheet)s).flushRows();  // retain 100 last rows and flush all others

//            }new String(fileNm.getBytes("utf-8"),"8859_1")
//

                // 파일생성
                response.setHeader("Set-Cookie", "fileDownload=true; path=/");
                response.setHeader("Content-Disposition", "attachment; filename="+new String(filename.getBytes("utf-8"),"8859_1")+".xlsx");
                response.setContentLength(bytes.length);
                response.setContentType("application/vnd.ms-excel");

                ByteArrayOutputStream out = new ByteArrayOutputStream();
                wb.write(out);
                bytes = out.toByteArray();
                out.close();


                return bytes;

            }catch(Exception e){
                e.printStackTrace();
                System.err.println(e.getMessage());
                return null;
            }

        }




    public Row getRow(int i, int size,Sheet s){
        Row r = s.getRow(i);
        if (i == 0){
            for(int j=0;j<size;j++) {
                s.setColumnWidth(j, 5000);
            }
        }
        if(r==null) {
            r = s.createRow(i);
        }
        return r;
    }

    public Cell getCell(int row, int cell, int size,Sheet s){

        Row r = getRow(row,size,s);
        Cell c = r.getCell(cell);
        if(c==null)
            c = r.createCell(cell);
        return c;
    }

    public void setCellValue(int row, int cell, String cellvalue, int size,XSSFWorkbook wb,Sheet s){
        Cell c = getCell(row,cell,size,s);
        IndexedColors mHeaderColor =  IndexedColors.YELLOW;
        if (row == 0){

            CellStyle cellStyle = wb.createCellStyle();
            cellStyle.setBorderBottom(CellStyle.BORDER_THIN);
            cellStyle.setBottomBorderColor(IndexedColors.BLACK.getIndex());

            cellStyle.setBorderLeft(CellStyle.BORDER_THIN);
            cellStyle.setLeftBorderColor(IndexedColors.BLACK.getIndex());

            cellStyle.setBorderRight(CellStyle.BORDER_THIN);
            cellStyle.setRightBorderColor(IndexedColors.BLACK.getIndex());

            cellStyle.setBorderTop(CellStyle.BORDER_THIN);
            cellStyle.setTopBorderColor(IndexedColors.BLACK.getIndex());

            cellStyle.setFillPattern(CellStyle.SOLID_FOREGROUND);
            cellStyle.setFillForegroundColor(mHeaderColor.getIndex());

            cellStyle.setAlignment(CellStyle.ALIGN_CENTER);

            c.setCellStyle(cellStyle);
        }
        c.setCellValue(cellvalue);
    }

}
