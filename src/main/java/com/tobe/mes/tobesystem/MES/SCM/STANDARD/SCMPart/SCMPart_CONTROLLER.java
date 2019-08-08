package com.tobe.mes.tobesystem.MES.SCM.STANDARD.SCMPart;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SCMPart_CONTROLLER {
    @RequestMapping(value = "/scmPart")
    public String scmPart(){
        return "scm/standard/scmPart";
    }

    @RequestMapping(value = "/scmBPartExcelUp")
    public String scmBPartExcelUp(){
        return "scm/standard/scmBPartExcelUp";
    }
}
