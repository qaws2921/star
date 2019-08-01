package com.tobe.mes.tobesystem.MES.SCM.STANDARD.SCMBPrice;

import com.tobe.mes.tobesystem.Bean.CmExcelManager;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_BPRICE_CD.SYS_BPRICE_CD;
import com.tobe.mes.tobesystem.Mapper.Scm.Standard.SCMBPrice_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

@Service
public class SCMBPrice_SERVICE {
    @Autowired
    private SCMBPrice_Mapper scmbPrice_mapper;

    public byte[] scmBPrice_excel_download(ModelMap model, HttpServletRequest request,
                                           HttpServletResponse response) {
        System.out.println("시작");
        List<SYS_BPRICE_CD> listCode = scmbPrice_mapper.scmBPrice_excel_download();
        System.out.println("디비 가져옴");
        System.out.println(listCode.size());
        List<Object> header = new ArrayList<>();
        List<List<Object>> data = new ArrayList<List<Object>>();

        header.add("업체코드");
        header.add("단가구분");
        header.add("시작일");
        header.add("종료일");
        header.add("단가");
        header.add("사용유무");
        int test = 0;
        for(SYS_BPRICE_CD vo : listCode){
            List<Object> obj = new ArrayList<Object>();
            obj.add(vo.getSupp_code());
            obj.add(vo.getCode_type());
            obj.add(vo.getStart_date());
            obj.add(vo.getStop_date());
            obj.add(vo.getUnit_price());
            obj.add(vo.getUse_yn());

            data.add(obj);
//            System.out.println(test);

            test++;
        }
        System.out.println("여기옴");

        CmExcelManager excelManager = new CmExcelManager(header, data);
        System.out.println("여기옴2");
        excelManager.setSheetName("testcode");
        System.out.println("여기옴3");
        excelManager.setWidth(6000);
        System.out.println("여기옴4");

        byte[] bytes = excelManager.makeExcel();
        System.out.println("여기옴5");

        response.setHeader("Content-Disposition", "attachment; filename=codetest.xlsx");
        System.out.println("여기옴6");
        response.setContentLength(bytes.length);
        System.out.println("여기옴7");
        response.setContentType("application/vnd.ms-excel");
        System.out.println("여기옴8");
        System.out.println("---------------------------------");
        System.out.println("보내기");

        return bytes;
    }

    public List<SYS_BPRICE_CD> scmBPrice_excel_download2() {
        return scmbPrice_mapper.scmBPrice_excel_download();
    }
}
