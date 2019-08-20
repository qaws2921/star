package com.tobe.mes.tobesystem.Mapper.Scm.Materlals;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_IN.SCM_IN;
import com.tobe.mes.tobesystem.Bean.Page;

import java.util.List;

public interface SCMln_Mapper {
    List<SCM_IN> scmln_SP_SCM_IN_GET(Page p);

    int scmln_SP_SCM_IN_GET_count(Page p);
}
