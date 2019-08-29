package com.tobe.mes.tobesystem.MES.SCM.SUPPLY.SCMECIn2;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SCMECIn2_CONTROLLER {
    @RequestMapping(value = "/scmECIn2")
    public String scmECIn(){
        return "scm/supply/scmECIn";
    }
}
