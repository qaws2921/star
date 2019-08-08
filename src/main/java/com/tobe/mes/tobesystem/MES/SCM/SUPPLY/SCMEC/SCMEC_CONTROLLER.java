package com.tobe.mes.tobesystem.MES.SCM.SUPPLY.SCMEC;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SCMEC_CONTROLLER {
    @RequestMapping(value = "/scmEC")
    public String scmEC(){
        return "scm/supply/scmEC";
    }
}
