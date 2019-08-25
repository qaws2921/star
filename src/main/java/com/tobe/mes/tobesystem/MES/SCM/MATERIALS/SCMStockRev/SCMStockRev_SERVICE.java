package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMStockRev;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_STOCK_REV.SCM_STOCK_REV;
import com.tobe.mes.tobesystem.Bean.MESBean.SCM_STOCK_REV.SCM_STOCK_REVS;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;
import com.tobe.mes.tobesystem.Mapper.Scm.Materlals.SCMStockRev_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SCMStockRev_SERVICE {
    @Autowired
    private SCMStockRev_Mapper scmStockRev_mapper;

    public SCM_STOCK_REVS scmStockRev_SP_SCM_STOCK_REV_GET(Double page, Double rows, Page p) {
        if (page == null && rows == null) {
            return new SCM_STOCK_REVS(null,0,0,0);
        }else {

            p.setPage_num((int)(page*1));
            p.setTotal_num(((int)(rows*1)));
            String start_date = p.getStart_date().replace("-","");
            String end_date = p.getEnd_date().replace("-","");

            p.setStart_date(start_date);
            p.setEnd_date(end_date);


            List<SCM_STOCK_REV> list = scmStockRev_mapper.scmStockRev_SP_SCM_STOCK_REV_GET(p);
            int count = scmStockRev_mapper.scmStockRev_SP_SCM_STOCK_REV_GET_count(p);

            int total =(int) Math.ceil(count/(rows*1));



            return new SCM_STOCK_REVS(list,total,(int)(page*1),count);
        }

    }

    public Result scmStockRev_SP_SCM_STOCK_REV_ADD(SCM_STOCK_REV ssr) {
        String work_date = ssr.getWork_date().replace("-","");
        ssr.setWork_date(work_date);


        char a = (char)5;
        char b = (char)4;
        String list[] = ssr.getPart_code().split(",");
        String list2[] = ssr.getStock_qty_prev().split(",");
        String list3[] = ssr.getStock_qty().split(",");

        String code_list="";
        for (int i = 0; i < list.length ; i++) {
            if (i == 0){
                code_list += list[i]+a+list2[i]+a+list3[i];
            }else {
                code_list += b+list[i]+a+list2[i]+a+list3[i];
            }
        }
        ssr.setPart_code(code_list);

        return scmStockRev_mapper.scmStockRev_SP_SCM_STOCK_REV_ADD(ssr);
    }
}
