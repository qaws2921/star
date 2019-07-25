package com.tobe.mes.tobesystem.MES.ADMIN.AUTH.SYSAuthProgram;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SYSAuthProgram_CONTROLLER {
    @RequestMapping(value = "/sysAuthProgram")
    public String sysAuthProgram(){
        return "admin/auth/sysAuthProgram";
    }
}
