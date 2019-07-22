package com.tobe.mes.tobesystem.ADMIN.MASTER.SYS_MSG;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SYS_MSG_CONTROLLER {

    @RequestMapping(value = "/sysMsg")
    public String sysMsg(){
        return "admin/master/sysMsg";
    }
}
