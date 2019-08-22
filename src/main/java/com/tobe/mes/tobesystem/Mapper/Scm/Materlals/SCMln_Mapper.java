package com.tobe.mes.tobesystem.Mapper.Scm.Materlals;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_IN.SCM_IN;
import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_IN_SUB_GET.SP_SCM_IN_SUB_GET;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;

import java.util.List;


public interface SCMln_Mapper {
    List<SCM_IN> scmln_SP_SCM_IN_GET(Page p);

    int scmln_SP_SCM_IN_GET_count(Page p);

    List<SP_SCM_IN_SUB_GET> scmln_SP_SCM_IN_SUB_GET(SCM_IN si);

    Result scmln_SP_SCM_IN_ADD(SCM_IN si);

    Result scmln_SP_SCM_IN_DEL(SCM_IN si);
}
