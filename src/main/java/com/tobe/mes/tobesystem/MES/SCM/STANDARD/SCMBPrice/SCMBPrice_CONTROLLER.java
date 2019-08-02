package com.tobe.mes.tobesystem.MES.SCM.STANDARD.SCMBPrice;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SCMBPrice_CONTROLLER {
    @RequestMapping(value = "/scmBPrice")
    public String scmBPrice(){
        return "scm/standard/scmBPrice";
    }

    @RequestMapping(value = "/scmBPriceExcelUp")
    public String scmBPriceExcelUp(){
        return "scm/standard/scmBPriceExcelUp";
    }
}
