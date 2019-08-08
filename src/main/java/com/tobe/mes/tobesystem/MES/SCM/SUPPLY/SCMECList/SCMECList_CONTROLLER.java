package com.tobe.mes.tobesystem.MES.SCM.SUPPLY.SCMECList;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SCMECList_CONTROLLER {
    @RequestMapping(value = "/scmECList")
    public String scmECList(){
        return "scm/supply/scmECList";
    }
}
