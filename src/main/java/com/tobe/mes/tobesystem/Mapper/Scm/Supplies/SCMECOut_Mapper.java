package com.tobe.mes.tobesystem.Mapper.Scm.Supplies;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_EC.SCM_EC;
import com.tobe.mes.tobesystem.Bean.Page;

import java.util.List;

public interface SCMECOut_Mapper {
    List<SCM_EC> scmECOut_sp_scm_ec_out_get(Page p);

    int scmECOut_sp_scm_ec_out_getT_count(Page p);
}
