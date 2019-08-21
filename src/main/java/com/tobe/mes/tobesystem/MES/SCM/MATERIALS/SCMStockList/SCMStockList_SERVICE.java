package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMStockList;

import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_STOCK_BPART_GET.SP_SCM_STOCK_BPART_GET;
import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_STOCK_BPART_GET.SP_SCM_STOCK_BPART_GETS;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Mapper.Scm.Materlals.SCMStockList_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
