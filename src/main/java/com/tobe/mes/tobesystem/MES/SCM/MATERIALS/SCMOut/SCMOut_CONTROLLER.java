package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMOut;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SCMOut_CONTROLLER {
    @RequestMapping(value = "/scmOut")
    public String scmOut(){
        return "scm/materials/scmOut";
    }
}
