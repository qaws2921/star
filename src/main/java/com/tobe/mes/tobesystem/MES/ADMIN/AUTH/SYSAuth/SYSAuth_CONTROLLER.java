package com.tobe.mes.tobesystem.MES.ADMIN.AUTH.SYSAuth;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class SYSAuth_CONTROLLER {

    @RequestMapping(value = "/sysAuth")
    public String sysAuth(HttpServletRequest req){

        if (req.getSession().getAttribute("session_check") != null){

            return "admin/auth/sysAuth";
        }else {
            return "index";
        }
    }
}
