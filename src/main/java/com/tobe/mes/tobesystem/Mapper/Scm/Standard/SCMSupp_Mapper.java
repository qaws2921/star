package com.tobe.mes.tobesystem.Mapper.Scm.Standard;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_SUPP_CD.SYS_SUPP_CD;
import com.tobe.mes.tobesystem.Bean.Page;

import java.util.List;

public interface SCMSupp_Mapper {
    List<SYS_SUPP_CD> supp_cd_get(Page p);

    int supp_cd_get_count(Page p);
}
