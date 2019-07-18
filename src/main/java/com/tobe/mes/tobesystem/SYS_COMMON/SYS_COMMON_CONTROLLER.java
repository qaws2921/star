package com.tobe.mes.tobesystem.SYS_COMMON;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SYS_COMMON_CONTROLLER {

    @RequestMapping(value = "/sysCommon")
    public String sysCommon(){
        return "admin/sysCommon";
    }

}
