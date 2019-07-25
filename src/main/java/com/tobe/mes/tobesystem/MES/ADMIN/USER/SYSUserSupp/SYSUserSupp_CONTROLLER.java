package com.tobe.mes.tobesystem.MES.ADMIN.USER.SYSUserSupp;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SYSUserSupp_CONTROLLER {
    @RequestMapping(value = "/sysUserSupp")
    public String sysUserSupp(){
        return "admin/user/sysUserSupp";
    }
}
