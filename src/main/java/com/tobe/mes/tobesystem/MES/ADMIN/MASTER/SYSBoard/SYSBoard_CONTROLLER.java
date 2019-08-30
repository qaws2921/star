package com.tobe.mes.tobesystem.MES.ADMIN.MASTER.SYSBoard;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class SYSBoard_CONTROLLER {
    @RequestMapping(value = "/sysBoard")
    public String sysMsg(HttpServletRequest req){
        if (req.getSession().getAttribute("session_check") != null){

            return "admin/master/sysBoard/sysBoard";
        }else {
            return "index";
        }
    }
}
