package com.tobe.mes.tobesystem.MES.SCM.PARTNERS.SCMClosePart;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SCMClosePart_CONTROLLER {
    @RequestMapping(value = "/scmClosePart")
    public String scmClosePart(){
        return "scm/partners/scmClosePart";
    }
}
