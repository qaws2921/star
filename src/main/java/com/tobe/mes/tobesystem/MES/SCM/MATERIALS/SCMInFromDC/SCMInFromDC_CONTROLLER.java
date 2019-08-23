package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMInFromDC;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SCMInFromDC_CONTROLLER {
    @RequestMapping(value = "/scmInFromDC")
    public String scmInFromDC(){
        return "scm/materials/scmInFromDC";
    }
}
