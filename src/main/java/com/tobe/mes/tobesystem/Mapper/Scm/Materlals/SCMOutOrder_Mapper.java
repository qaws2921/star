package com.tobe.mes.tobesystem.Mapper.Scm.Materlals;

import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_OUT_ORDER_GET.SP_SCM_OUT_ORDER_GET;
import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_OUT_ORDER_SUB_GET.SP_SCM_OUT_ORDER_SUB_GET;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;

import java.util.List;

public interface SCMOutOrder_Mapper {
    List<SP_SCM_OUT_ORDER_GET> scmOutOrder_SP_SCM_OUT_ORDER_GET(Page p);

    int scmOutOrder_SP_SCM_OUT_ORDER_GET_count(Page p);

    Result scmOutOrder_SP_SCM_OUT_ORDER_ADD(SP_SCM_OUT_ORDER_GET ssoog);

    List<SP_SCM_OUT_ORDER_SUB_GET> scmOutOrder_SP_SCM_OUT_ORDER_SUB_GET(SP_SCM_OUT_ORDER_SUB_GET ssoosg);

    Result scmOutOrder_SP_SCM_OUT_ORDER_DEL(SP_SCM_OUT_ORDER_GET ssoog);
}
