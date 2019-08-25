package com.tobe.mes.tobesystem.Mapper.Scm.Materlals;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_OUT.SCM_OUT;
import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_OUT_ORDER_GET.SP_SCM_OUT_ORDER_GET;
import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_OUT_ORDER_SUB_GET.SP_SCM_OUT_ORDER_SUB_GET;
import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_OUT_SUB_GET.SP_SCM_OUT_SUB_GET;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;

import java.util.List;

public interface SCMOut_Mapper {
    List<SCM_OUT> scmOut_SP_SCM_OUT_GET(Page p);

    int scmOut_SP_SCM_OUT_GET_count(Page p);

    Result scmOut_SP_SCM_OUT_ADD(SCM_OUT so);

    List<SP_SCM_OUT_SUB_GET> scmOut_SP_SCM_OUT_SUB_GET(SCM_OUT so);

    List<SP_SCM_OUT_ORDER_SUB_GET> scmOut_SP_SCM_OUT_ORDER_SUB_GET(SP_SCM_OUT_ORDER_GET ssoog);

    Result scmOut_SP_SCM_OUT_DEL(String code_list);
}
