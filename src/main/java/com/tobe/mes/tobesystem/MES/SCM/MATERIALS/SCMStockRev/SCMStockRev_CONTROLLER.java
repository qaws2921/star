package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMStockRev;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SCMStockRev_CONTROLLER {
    @RequestMapping(value = "/scmStockRev")
    public String scmStockRev(){
        return "scm/materials/scmStockRev";
    }
}
