package com.tobe.mes.tobesystem.Mapper.Scm.Materlals;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_STOCK_REV.SCM_STOCK_REV;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;

import java.util.List;

public interface SCMStockRev_Mapper {
    List<SCM_STOCK_REV> scmStockRev_SP_SCM_STOCK_REV_GET(Page p);

    int scmStockRev_SP_SCM_STOCK_REV_GET_count(Page p);

    Result scmStockRev_SP_SCM_STOCK_REV_ADD(SCM_STOCK_REV ssr);
}
