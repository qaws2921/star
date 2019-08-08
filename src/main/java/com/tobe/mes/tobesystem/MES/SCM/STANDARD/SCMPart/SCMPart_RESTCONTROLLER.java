package com.tobe.mes.tobesystem.MES.SCM.STANDARD.SCMPart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SCMPart_RESTCONTROLLER {
    @Autowired
    private SCMPart_SERVICE scmPart_service;
}
