package com.tobe.mes.tobesystem.Mapper.Scm.Partners;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_DC.SCM_DC;
import com.tobe.mes.tobesystem.Bean.MESBean.SCM_DC_BOX.SCM_DC_BOX;
import com.tobe.mes.tobesystem.Bean.MESBean.SCM_DC_BOX.SCM_DC_BOXS;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;

import java.util.List;

public interface SCMDC_Mapper {
    List<SCM_DC> scmDC_get(Page p);

    int scmDC_get_count(Page p);
    List<SCM_DC_BOX> scmDC_SP_SCM_DC_BOX_READY_GET_get(Page p);

    int scmDC_SP_SCM_DC_BOX_READY_GET_get_count(Page p);

    Result scmDC_SP_SCM_DC_ADD_au(Page p);

    List<SCM_DC_BOX> scmDC_SP_SCM_DC_BOX_GET_get(SCM_DC sd);

    Result scmDC_SP_SCM_DC_DEL(SCM_DC sd);

    Result scmDC_SP_SP_SCM_DC_BOX_DEL(SCM_DC_BOX sd);
}
