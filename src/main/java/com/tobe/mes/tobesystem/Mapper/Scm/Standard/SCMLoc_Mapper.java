package com.tobe.mes.tobesystem.Mapper.Scm.Standard;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_LOC_CD.SYS_LOC_CD;
import com.tobe.mes.tobesystem.Bean.Page;

import java.util.List;

public interface SCMLoc_Mapper {
    List<SYS_LOC_CD> scmLoc_get(Page p);

    int scmLoc_get_count(Page p);
}
