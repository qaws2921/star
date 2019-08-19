package com.tobe.mes.tobesystem.MES.SCM.PARTNERS.SCMDCBox;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_DC_BOX.SCM_DC_BOX;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SCMDCBox_RESTCONTROLLER {
    @Autowired
    private SCMDCBox_SERVICE scmdcBox_service;

    @RequestMapping("scm/SP_SCM_DC_GET")
    public List<SCM_DC_BOX> SP_SCM_DC_GET(){
        return scmdcBox_service.SP_SCM_DC_GET();
    }

}
