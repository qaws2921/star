package com.tobe.mes.tobesystem.MES.SCM.PARTNERS.SCMDCBox;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_DC_BOX.SCM_DC_BOX;
import com.tobe.mes.tobesystem.Mapper.Scm.Partners.SCMDCBox_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SCMDCBox_SERVICE {
    @Autowired
    private SCMDCBox_Mapper scmdcBox_mapper;

    public List<SCM_DC_BOX> SP_SCM_DC_GET(){
        return scmdcBox_mapper.SP_SCM_DC_GET();
    }
}
