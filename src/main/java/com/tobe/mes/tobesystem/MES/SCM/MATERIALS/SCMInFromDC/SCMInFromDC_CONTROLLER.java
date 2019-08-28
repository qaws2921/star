package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMInFromDC;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;


@Controller
public class SCMInFromDC_CONTROLLER {
    @RequestMapping(value = "/scmInFromDC")
    public String scmInFromDC(HttpServletRequest req){
        if (req.getSession().getAttribute("session_check") != null){
            return "scm/materials/scmInFromDC";
        }else {
            return "index";
        }

    }
}
