package com.tobe.mes.tobesystem.MES.SCM.PARTNERS.SCMDCList;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SCMDCList_CONTROLLER {
    @RequestMapping("/scmDCList")
    public String scmDCList(){
        return "scm/partners/scmDCList";
    }
}
