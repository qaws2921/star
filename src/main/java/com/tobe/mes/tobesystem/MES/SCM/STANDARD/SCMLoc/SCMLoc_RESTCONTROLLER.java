package com.tobe.mes.tobesystem.MES.SCM.STANDARD.SCMLoc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SCMLoc_RESTCONTROLLER {
    @Autowired
    private SCMLoc_SERVICE scmLoc_service;
}
