package com.tobe.mes.tobesystem.MES.SCM.SUPPLIES.SCMECOut;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class SCMECOut_CONTROLLER {
    @RequestMapping(value = "/scmECOut")
    public String scmECOut(HttpServletRequest req){

        if (req.getSession().getAttribute("session_check") != null){
            return "scm/supplies/scmECOut";
        }else {
            return "index";
        }

    }
}
