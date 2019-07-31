package com.tobe.mes.tobesystem.MES.SCM.STANDARD.SCMSupp;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
public class SCMSupp_CONTROLLER {
    @RequestMapping(value = "/scmSupp")
    public String scmSupp(){
        return "scm/standard/scmSupp";
    }
}
