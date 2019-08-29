package com.tobe.mes.tobesystem.Mapper.Scm.Supplies;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_EC.SCM_EC;
import com.tobe.mes.tobesystem.Bean.MESBean.SCM_EC_SUB.SCM_EC_SUB;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;

import java.util.List;

public interface SCMECOut_Mapper {
    List<SCM_EC> scmECOut_sp_scm_ec_out_get(Page p);

    int scmECOut_sp_scm_ec_out_getT_count(Page p);

    Result scmECOut_sp_scm_ec_out_add(SCM_EC se);

    List<SCM_EC_SUB> scmECOut_sp_scm_ec_out_sub_get(SCM_EC se);

    Result scmECOut_sp_scm_ec_out_del(SCM_EC se);
}
