package com.tobe.mes.tobesystem.Mapper.Scm.Standard;


import com.tobe.mes.tobesystem.Bean.MESBean.SYS_CARGO_CD.SYS_CARGO_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_COMMON_CD.SYS_COMMON_CD;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;

import java.util.List;

public interface SCMCargo_Mapper {
    List<SYS_COMMON_CD> common_cargo_type_get();
    List<SYS_CARGO_CD> cargo_cd_get(Page p);
    int cargo_cd_get_count(Page p);
    Result cargo_cd_au(SYS_CARGO_CD scc);
    Result cargo_cd_delete(String code);
}
