package com.tobe.mes.tobesystem.Mapper.Scm.Partners;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_DC_BOX.SCM_DC_BOX;

import java.util.List;

public interface SCMDCBox_Mapper {
    List<SCM_DC_BOX> SP_SCM_DC_GET();
    List<SCM_DC_BOX> SP_SCM_DC_BOX_ADD(SCM_DC_BOX scmDcBox);
}
