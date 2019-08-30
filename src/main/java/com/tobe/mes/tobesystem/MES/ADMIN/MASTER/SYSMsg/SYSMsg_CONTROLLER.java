package com.tobe.mes.tobesystem.MES.ADMIN.MASTER.SYSMsg;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SYSMsg_CONTROLLER {

    @RequestMapping(value = "/sysMsg")
    public String sysMsg(){
        return "admin/master/sysMsg/sysMsg";
    }
}
