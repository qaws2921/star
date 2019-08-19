package com.tobe.mes.tobesystem.MES.SCM.PARTNERS.SCMDCBox;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SCMDCBox_CONTROLLER {
    @RequestMapping("scmDCBox")
    public String scmDCBox(){
        return "scm/partners/scmDCBox";
    }

}
