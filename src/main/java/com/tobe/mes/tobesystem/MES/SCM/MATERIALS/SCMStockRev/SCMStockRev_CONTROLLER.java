package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMStockRev;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class SCMStockRev_CONTROLLER {
    @RequestMapping(value = "/scmStockRev")
    public String scmStockRev(HttpServletRequest req){
        if (req.getSession().getAttribute("session_check") != null){
            return "scm/materials/scmStockRev";
        }else {
            return "index";
        }

    }
}
