package com.tobe.mes.tobesystem.Mapper.Scm.Standard;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_BPART_CD.SYS_BPART_CD;
import com.tobe.mes.tobesystem.Bean.Page;

import java.util.List;

public interface SCMPart_Mapper {
    List<SYS_BPART_CD> bPart_get(Page p);

    int bPart_get_count(Page p);
}
