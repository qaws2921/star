package com.tobe.mes.tobesystem.MES.SCM.STANDARD.SCMLoc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SCMLoc_CONTROLLER {
    @RequestMapping(value = "/scmLoc")
    public String scmLoc(){
        return "scm/standard/scmLoc";
    }
}
