package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMStockRet;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class SCMStockRet_CONTROLLER {
    @RequestMapping(value = "/scmStockRet")
    public String scmStockRet(HttpServletRequest req){
        if (req.getSession().getAttribute("session_check") != null){
            return "scm/materials/scmStockRet";
        }else {
            return "index";
        }

    }
}
