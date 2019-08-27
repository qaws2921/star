package com.tobe.mes.tobesystem.MES.ADMIN.MASTER.SYSPartGroup;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class SYSPartGroup_CONTROLLER {

    @RequestMapping(value = "/sysPartGroup")
    public String sysCommon(HttpServletRequest req){

        if (req.getSession().getAttribute("session_check") != null){

            return "admin/master/sysPartGroup";
        }else {
            return "index";
        }

    }
}
