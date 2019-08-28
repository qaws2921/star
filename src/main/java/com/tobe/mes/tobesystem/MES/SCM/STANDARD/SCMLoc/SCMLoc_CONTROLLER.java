package com.tobe.mes.tobesystem.MES.SCM.STANDARD.SCMLoc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class SCMLoc_CONTROLLER {
    @RequestMapping(value = "/scmLoc")
    public String scmLoc(HttpServletRequest req){
        if (req.getSession().getAttribute("session_check") != null){
            return "scm/standard/scmLoc";
        }else {
            return "index";
        }


    }
}
