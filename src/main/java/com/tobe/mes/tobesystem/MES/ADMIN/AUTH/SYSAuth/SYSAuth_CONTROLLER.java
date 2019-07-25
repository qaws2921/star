package com.tobe.mes.tobesystem.MES.ADMIN.AUTH.SYSAuth;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SYSAuth_CONTROLLER {

    @RequestMapping(value = "/sysAuth")
    public String sysAuth(){
        return "admin/auth/sysAuth";
    }
}
