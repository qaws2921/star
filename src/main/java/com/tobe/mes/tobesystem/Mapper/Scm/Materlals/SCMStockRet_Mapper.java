package com.tobe.mes.tobesystem.Mapper.Scm.Materlals;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_STOCK_RET.SCM_STOCK_RET;
import com.tobe.mes.tobesystem.Bean.Page;

import java.util.List;

public interface SCMStockRet_Mapper {
    List<SCM_STOCK_RET> scmStockRet_sp_scm_stock_rev_get(Page p);

    int scmStockRet_sp_scm_stock_rev_get_count(Page p);
}
