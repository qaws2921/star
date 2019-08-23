package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMStockInfo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class SCMStockInfo_Controller {
    @RequestMapping(value = "/scmStockInfo")
    public String scmBPrice(){
        return "scm/materials/scmStockInfo";
    }
}
