package com.tobe.mes.tobesystem.Mapper.Scm.Materlals;

import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_IN_READY_GET.SP_SCM_IN_READY_GET;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;

import java.util.List;

public interface SCMInFromDC_Mapper {
    List<SP_SCM_IN_READY_GET> scmInFromDC_SP_SCM_IN_READY_GET(Page p);

    Result scmInFromDC_SP_SCM_IN_ADD(SP_SCM_IN_READY_GET ssirg);
}
