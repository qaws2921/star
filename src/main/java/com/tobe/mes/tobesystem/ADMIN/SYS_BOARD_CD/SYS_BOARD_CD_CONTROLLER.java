package com.tobe.mes.tobesystem.ADMIN.SYS_BOARD_CD;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SYS_BOARD_CD_CONTROLLER {
    @RequestMapping(value = "/sysBoard")
    public String sysMsg(){
        return "admin/sysBoard";
    }
}
