package com.tobe.mes.tobesystem.MES.SCM.STANDARD.SCMSupp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SCMSupp_RESTCONTROLLER {
    @Autowired
    private SCMSupp_SERVICE scmSupp_service;
}
