package com.tobe.mes.tobesystem.MES.SCM.STANDARD.SCMCargo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class SCMCargo_CONTROLLER {
    @RequestMapping(value = "/scmCargo")
    public String scmCargo(HttpServletRequest req){
        if (req.getSession().getAttribute("session_check") != null){
            return "scm/standard/scmCargo";
        }else {
            return "index";
        }


    }
}
