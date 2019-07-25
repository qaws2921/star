package com.tobe.mes.tobesystem.MES.ADMIN.USER.SYSUser;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SYSUser_CONTORLLER {
    @RequestMapping(value = "/sysUser")
    public String sysUser(){
        return "admin/user/sysUser";
    }
}
