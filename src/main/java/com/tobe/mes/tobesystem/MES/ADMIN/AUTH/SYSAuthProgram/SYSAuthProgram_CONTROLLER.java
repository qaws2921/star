package com.tobe.mes.tobesystem.MES.ADMIN.AUTH.SYSAuthProgram;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class SYSAuthProgram_CONTROLLER {
    @RequestMapping(value = "/sysAuthProgram")
    public String sysAuthProgram(HttpServletRequest req){
        if (req.getSession().getAttribute("session_check") != null){

            return "admin/auth/sysAuthProgram";
        }else {
            return "index";
        }


    }
}
