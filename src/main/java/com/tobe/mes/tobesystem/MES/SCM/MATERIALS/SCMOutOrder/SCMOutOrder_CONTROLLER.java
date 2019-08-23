package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMOutOrder;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;



@Controller
public class SCMOutOrder_CONTROLLER {
    @RequestMapping(value = "/scmOutOrder")
    public String scmOutOrder(){
        return "scm/materials/scmOutOrder";
    }
}
