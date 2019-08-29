package com.tobe.mes.tobesystem.Mapper.Scm.Supplies;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_EC.SCM_EC;
import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_EC_IN_READY_GET.SP_SCM_EC_IN_READY_GET;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;

import java.util.List;

public interface SCMECIn_Mapper {
    List<SCM_EC> scmECIn_sp_scm_ec_in_get(Page p);

    int scmECIn_sp_scm_ec_in_get_count(Page p);

    Result scmECIn_sp_scm_ec_in_add(SCM_EC se);

    List<SP_SCM_EC_IN_READY_GET> scmECIn_sp_scm_ec_in_ready_get(SCM_EC se);
}
