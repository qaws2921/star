package com.tobe.mes.tobesystem.MES.SCM.SUPPLY.SCMEC;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SCMEC_RESTCONTROLLER {
    @Autowired
    private SCMEC_SERVICE scmec_service;
}
