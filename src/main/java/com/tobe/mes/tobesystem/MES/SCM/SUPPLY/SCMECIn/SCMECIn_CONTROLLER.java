package com.tobe.mes.tobesystem.MES.SCM.SUPPLY.SCMECIn;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SCMECIn_CONTROLLER {
    @RequestMapping(value = "/scmECIn")
    public String scmECIn(){
        return "scm/supply/scmECIn";
    }
}
