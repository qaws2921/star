package com.tobe.mes.tobesystem.MES.SCM.PARTNERS.SCMDC;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SCMDC_CONTROLLER {
    @RequestMapping(value = "/scmDC")
    public String scmDC(){
        return "scm/partners/scmDC";
    }
}
