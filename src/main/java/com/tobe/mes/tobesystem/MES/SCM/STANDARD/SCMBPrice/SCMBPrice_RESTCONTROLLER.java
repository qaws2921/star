package com.tobe.mes.tobesystem.MES.SCM.STANDARD.SCMBPrice;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_BPRICE_CD.SYS_BPRICE_CD;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.streaming.SXSSFSheet;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;
import java.util.List;

@RestController
public class SCMBPrice_RESTCONTROLLER {
    @Autowired
    private SCMBPrice_SERVICE scmbPrice_service;

    @RequestMapping(value = "/scmBPrice/excel/download",method = RequestMethod.POST)
    public byte[] scmBPrice_excel_download(ModelMap model, HttpServletRequest request,
                                           HttpServletResponse response ) throws  Exception{
        return scmbPrice_service.scmBPrice_excel_download(model,request,response);
    }




    private Sheet s;

    private SXSSFWorkbook wb;


    @RequestMapping(value = "/scmBPrice/excel/download2",method = RequestMethod.POST)
    public byte[] writeWorkbook(HttpServletResponse response){
        wb = new SXSSFWorkbook();
        long start = System.currentTimeMillis();
        String fileName="test";
        List<SYS_BPRICE_CD> sys_bprice_cdList = scmbPrice_service.scmBPrice_excel_download2();
        byte[] bytes = new byte[0];
        try {
            s = wb.createSheet();

            int i=0;
            int n=-1;


            setCellValue(0,0,"업체코드");
            setCellValue(0,1,"단가구분");
            setCellValue(0,2,"시작일");
            setCellValue(0,3,"종료일");
            setCellValue(0,4, "단가");
            setCellValue(0,5,"사용유무");

            while ( n++ < 10 ) {

                for(i=1;i<sys_bprice_cdList.size()+1;i++){
                    setCellValue(i,0,sys_bprice_cdList.get(i-1).getSupp_code());
                    setCellValue(i,1,sys_bprice_cdList.get(i-1).getCode_type());
                    setCellValue(i,2,sys_bprice_cdList.get(i-1).getStart_date());
                    setCellValue(i,3,sys_bprice_cdList.get(i-1).getStop_date());
                    setCellValue(i,4, String.valueOf(sys_bprice_cdList.get(i-1).getUnit_price()));
                    setCellValue(i,5,sys_bprice_cdList.get(i-1).getUse_yn());
                }



                // 메모리 flush

                ((SXSSFSheet)s).flushRows(100000); // retain 100 last rows and flush all others

            }

            // 파일생성


            ByteArrayOutputStream out = new ByteArrayOutputStream();
            wb.write(out);
            bytes = out.toByteArray();

        }catch(Exception e){
            e.printStackTrace();
            System.err.println(e.getMessage());
        }
        long end = System.currentTimeMillis();
        System.out.println("writeWorkbook : "+(end-start));
        response.setHeader("Content-Disposition", "attachment; filename=codetest.xlsx");
        response.setContentLength(bytes.length);
        response.setContentType("application/vnd.ms-excel");
        return bytes;
    }


    public Row getRow(int i){
        Row r = s.getRow(i);
        if(r==null)
            r = s.createRow(i);
        return r;
    }

    public Cell getCell(int row, int cell){
        Row r = getRow(row);
        Cell c = r.getCell(cell);
        if(c==null)
            c = r.createCell(cell);
        return c;
    }

    public void setCellValue(int row, int cell, String cellvalue){
        Cell c = getCell(row,cell);
        c.setCellValue(cellvalue);
    }


}


