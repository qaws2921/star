package com.tobe.mes.tobesystem.MES.SCM.STANDARD.SCMPart;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class SCMPart_CONTROLLER {
    @RequestMapping(value = "/scmPart")
    public String scmPart(HttpServletRequest req){
        if (req.getSession().getAttribute("session_check") != null){

            return "scm/standard/scmPart";
        }else {
            return "index";
        }

    }

    @RequestMapping(value = "/scmBPartExcelUp")
    public String scmBPartExcelUp(){
        return "scm/standard/scmBPartExcelUp";
    }
}
