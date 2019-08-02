package com.tobe.mes.tobesystem.MES.SCM.SUPPLY.SCMECIn;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SCMECIn_RESTCONTROLLER {
    @Autowired
    private SCMECIn_SERVICE scmecIn_service;
}

