package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMStockList;

import com.tobe.mes.tobesystem.Bean.ExcelManager;
import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_STOCK_BPART_GET.SP_SCM_STOCK_BPART_GET;
import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_STOCK_BPART_GET.SP_SCM_STOCK_BPART_GETS;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Mapper.Scm.Materlals.SCMStockList_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

@Service
public class SCMStockList_SERVICE {

    @Autowired
    private SCMStockList_Mapper scmStockList_mapper;

    public SP_SCM_STOCK_BPART_GETS scmStockList_SP_SCM_STOCK_BPART_GET(Double page, Double rows, Page p) {
        if (page == null && rows == null) {
            return new SP_SCM_STOCK_BPART_GETS(null,0,0,0);
        }else {
            p.setPage_num((int)(page*1));
            p.setTotal_num(((int)(rows*1)));
            p.setKeyword(p.getKeyword().replace("-",""));
            List<SP_SCM_STOCK_BPART_GET> list = scmStockList_mapper.scmStockList_SP_SCM_STOCK_BPART_GET(p);
            int list_count = scmStockList_mapper.scmStockList_SP_SCM_STOCK_BPART_GET_count(p);

            int total =(int) Math.ceil(list_count/(rows*1));


            return new SP_SCM_STOCK_BPART_GETS(list,total,(int)(page*1),list_count);
        }
    }

    public byte[] scmStockList_download(HttpServletResponse response,Page p) {
        p.setKeyword(p.getKeyword().replace("-",""));
        List<SP_SCM_STOCK_BPART_GET> List = scmStockList_mapper.scmStockList_download(p);
        ArrayList<String> header = new ArrayList<>();
        header.add("품목그룹");
        header.add("품목코드");
        header.add("품목명");
        header.add("규격");
        header.add("단위");
        header.add("공급업체");
        header.add("적정재고(최소)");
        header.add("적정재고(최대)");
        header.add("재고량");

        List<List<Object>> content = new ArrayList<>();
        List<Object> obj = null;
        for(SP_SCM_STOCK_BPART_GET vo : List){
            obj = new ArrayList<>();
            obj.add(vo.getPart_grp_name());
            obj.add(vo.getPart_code());
            obj.add(vo.getPart_name());
            obj.add(vo.getSpec());
            obj.add(vo.getUnit_name());
            obj.add(vo.getSupp_name());
            obj.add(vo.getMin_qty());
            obj.add(vo.getMax_qty());
            obj.add(vo.getStock_qty());
            content.add(obj);
        }
        String filename = "재고현황";
        ExcelManager excelManager = new ExcelManager();
        byte[] bytes = excelManager.writeWorkbook(response,header,content,filename);

        return bytes;
    }
}
