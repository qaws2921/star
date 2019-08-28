package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMln;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;


@Controller
public class SCMln_CONTROLLER {
    @RequestMapping(value = "/scmln")
    public String scmln(HttpServletRequest req){

        if (req.getSession().getAttribute("session_check") != null){
            return "scm/materials/scmln";
        }else {
            return "index";
        }

    }
}
