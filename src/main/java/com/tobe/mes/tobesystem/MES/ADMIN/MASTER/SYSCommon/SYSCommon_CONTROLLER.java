package com.tobe.mes.tobesystem.MES.ADMIN.MASTER.SYSCommon;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SYSCommon_CONTROLLER {

    @RequestMapping(value = "/sysCommon")
    public String sysCommon(){
        return "admin/master/sysCommon/sysCommon";
    }

}
