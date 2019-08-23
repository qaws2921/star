package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMStockList;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SCMStockList_CONTROLLER {


    @RequestMapping(value = "/scmStockList")
    public String scmStockList(){
        return "scm/materials/scmStockList";
    }
}
