package com.tobe.mes.tobesystem.Mapper.Scm.Materlals;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_STOCK_RET.SCM_STOCK_RET;
import com.tobe.mes.tobesystem.Bean.Page;

import java.util.List;

public interface SCMStockRetList_Mapper {
    List<SCM_STOCK_RET> scmStockRet_SP_SCM_STOCK_RET_GET(Page p);

    int scmStockRet_SP_SCM_STOCK_RET_GET_count(Page p);

}
