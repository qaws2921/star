package com.tobe.mes.tobesystem.ADMIN.AUTH.SYS_AUTH_CD;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SYS_AUTH_CD_CONTROLLER {

    @RequestMapping(value = "/sysAuth")
    public String sysAuth(){
        return "admin/auth/sysAuth";
    }
}
