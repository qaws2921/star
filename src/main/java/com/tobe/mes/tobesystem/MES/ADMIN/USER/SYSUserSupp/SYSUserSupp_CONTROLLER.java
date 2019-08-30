package com.tobe.mes.tobesystem.MES.ADMIN.USER.SYSUserSupp;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class SYSUserSupp_CONTROLLER {
    @RequestMapping(value = "/sysUserSupp")
    public String sysUserSupp(HttpServletRequest req){
        if (req.getSession().getAttribute("session_check") != null){

            return "admin/user/sysUserSupp/sysUserSupp";
        }else {
            return "index";
        }

    }
}
