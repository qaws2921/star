package com.tobe.mes.tobesystem.MES.SCM.PARTNERS.QMSPartInNgSupp;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class QMSPartInNgSupp_CONTROLLER {
    @RequestMapping(value = "/qmsPartInNgSupp")
    public String qmsPartInNgSupp(){
        return "scm/partners/qmsPartInNgSupp";
    }
}
