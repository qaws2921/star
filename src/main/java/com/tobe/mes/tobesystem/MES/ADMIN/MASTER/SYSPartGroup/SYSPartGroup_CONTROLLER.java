package com.tobe.mes.tobesystem.MES.ADMIN.MASTER.SYSPartGroup;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SYSPartGroup_CONTROLLER {

    @RequestMapping(value = "/sysPartGroup")
    public String sysCommon(){
        return "admin/master/sysPartGroup";
    }
}
