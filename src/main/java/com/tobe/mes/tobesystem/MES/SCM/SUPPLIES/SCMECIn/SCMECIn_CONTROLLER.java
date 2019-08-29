package com.tobe.mes.tobesystem.MES.SCM.SUPPLIES.SCMECIn;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class SCMECIn_CONTROLLER {
    @RequestMapping(value = "/scmECIn")
    public String scmECIn(HttpServletRequest req){

        if (req.getSession().getAttribute("session_check") != null){
            return "scm/supplies/scmECIn";
        }else {
            return "index";
        }

    }
}
