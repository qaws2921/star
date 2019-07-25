package com.tobe.mes.tobesystem.MES.SCM.STANDARD.SCMCargo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SCMCargo_CONTROLLER {
    @RequestMapping(value = "/scmCargo")
    public String sysUser(){
        return "scm/standard/scmCargo";
    }
}
