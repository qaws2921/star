package com.tobe.mes.tobesystem.MES.SCM.PARTNERS.SCMDCBox;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SCMDCBox_RESTCONTROLLER {
    @Autowired
    private SCMDCBox_SERVICE scmdcBox_service;

//    @RequestMapping("/scmDCBox_SYS_BPART_GET")
//    public List<> SP_SYS_BPART_GET(){
//        return scmdcBox_service.SP_SYS_BPART_GET();
//    }
}
