package com.tobe.mes.tobesystem.Mapper.Scm.Standard;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_SUPP_CD.SYS_SUPP_CD;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;

import java.util.List;

public interface SCMSupp_Mapper {
    List<SYS_SUPP_CD> supp_cd_get(Page p);

    int supp_cd_get_count(Page p);

    Result supp_cd_au(SYS_SUPP_CD ssc);

    Result supp_cd_delete(String code);
}
