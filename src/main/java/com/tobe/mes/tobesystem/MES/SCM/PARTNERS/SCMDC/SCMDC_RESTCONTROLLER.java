package com.tobe.mes.tobesystem.MES.SCM.PARTNERS.SCMDC;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SCMDC_RESTCONTROLLER {
    @Autowired
    private SCMDC_SERVICE scmdc_service;
}
