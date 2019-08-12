package com.tobe.mes.tobesystem.MES.SCM.PARTNERS.SCMPlanWorkPart;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SCMPlanWorkPart_CONTROLLER {
    @RequestMapping(value = "/scmPlanWorkPart")
    public String scmPlanWorkPart(){
        return "scm/partners/scmPlanWorkPart";
    }
}
