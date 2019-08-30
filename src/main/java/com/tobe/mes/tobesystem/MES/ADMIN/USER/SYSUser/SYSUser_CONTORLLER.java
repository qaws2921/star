package com.tobe.mes.tobesystem.MES.ADMIN.USER.SYSUser;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class SYSUser_CONTORLLER {
    @RequestMapping(value = "/sysUser")
    public String sysUser(HttpServletRequest req){

        if (req.getSession().getAttribute("session_check") != null){

            return "admin/user/sysUser/sysUser";
        }else {
            return "index";
        }

    }
}
