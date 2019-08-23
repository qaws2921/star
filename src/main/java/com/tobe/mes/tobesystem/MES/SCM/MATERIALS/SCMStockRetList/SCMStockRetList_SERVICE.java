package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMStockRetList;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_STOCK_RET.SCM_STOCK_RET;
import com.tobe.mes.tobesystem.Bean.MESBean.SCM_STOCK_RET.SCM_STOCK_RETS;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Mapper.Scm.Materlals.SCMStockRetList_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SCMStockRetList_SERVICE {
    @Autowired
    private SCMStockRetList_Mapper scmStockRet_mapper;

    public SCM_STOCK_RETS scmStockRet_SP_SCM_STOCK_RET_GET(Double page, Double rows, Page p) {
        if (page == null && rows == null) {
            return new SCM_STOCK_RETS(null,0,0,0);
        }else {
            p.setPage_num((int)(page*1));
            p.setTotal_num(((int)(rows*1)));
            p.setStart_date(p.getStart_date().replace("-",""));
            p.setEnd_date(p.getEnd_date().replace("-",""));
            List<SCM_STOCK_RET> list = scmStockRet_mapper.scmStockRet_SP_SCM_STOCK_RET_GET(p);
            int list_count = scmStockRet_mapper.scmStockRet_SP_SCM_STOCK_RET_GET_count(p);

            int total =(int) Math.ceil(list_count/(rows*1));


            return new SCM_STOCK_RETS(list,total,(int)(page*1),list_count);

        }
    }
}
