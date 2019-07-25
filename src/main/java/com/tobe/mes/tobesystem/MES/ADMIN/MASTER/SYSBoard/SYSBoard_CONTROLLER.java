package com.tobe.mes.tobesystem.MES.ADMIN.MASTER.SYSBoard;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SYSBoard_CONTROLLER {
    @RequestMapping(value = "/sysBoard")
    public String sysMsg(){
        return "admin/master/sysBoard";
    }
}
