package com.tobe.mes.tobesystem.ADMIN.AUTH.SYS_MENU_CD;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SYS_MENU_CD_CONTROLLER {
    @RequestMapping(value = "/sysAuthProgram")
    public String sysAuthProgram(){
        return "admin/auth/sysAuthProgram";
    }
}
