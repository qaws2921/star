package com.tobe.mes.tobesystem.Mapper.Scm.Materlals;

import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_STOCK_BPART_GET.SP_SCM_STOCK_BPART_GET;
import com.tobe.mes.tobesystem.Bean.Page;

import java.util.List;

public interface SCMStockList_Mapper {

    List<SP_SCM_STOCK_BPART_GET> scmStockList_SP_SCM_STOCK_BPART_GET(Page p);

    int scmStockList_SP_SCM_STOCK_BPART_GET_count(Page p);

    List<SP_SCM_STOCK_BPART_GET> scmStockList_download(Page p);
}
