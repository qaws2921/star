package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMln;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class SCMln_CONTROLLER {
    @RequestMapping(value = "/scmln")
    public String scmln(){
        return "scm/materials/scmln";
    }
}
