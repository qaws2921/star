package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMStockRetList;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SCMStockRetList_CONTROLLER {
    @RequestMapping(value = "/scmStockRet")
    public String scmStockRet(){
        return "scm/materials/scmStockRetList";
    }

}
