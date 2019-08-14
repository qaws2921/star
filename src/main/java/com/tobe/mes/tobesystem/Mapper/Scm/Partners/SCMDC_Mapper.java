package com.tobe.mes.tobesystem.Mapper.Scm.Partners;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_DC.SCM_DC;
import com.tobe.mes.tobesystem.Bean.MESBean.SCM_DC_BOX.SCM_DC_BOX;
import com.tobe.mes.tobesystem.Bean.Page;

import java.util.List;

public interface SCMDC_Mapper {
    List<SCM_DC> scmDC_get(Page p);

    int scmDC_get_count(Page p);

    List<SCM_DC_BOX> scmDC_SP_SCM_DC_BOX_READY_GET_get(Page p);

    int scmDC_SP_SCM_DC_BOX_READY_GET_get_count(Page p);
}
