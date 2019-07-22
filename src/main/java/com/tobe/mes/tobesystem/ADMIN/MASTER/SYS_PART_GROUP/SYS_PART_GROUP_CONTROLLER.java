package com.tobe.mes.tobesystem.ADMIN.MASTER.SYS_PART_GROUP;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SYS_PART_GROUP_CONTROLLER {

    @RequestMapping(value = "/sysPartGroup")
    public String sysCommon(){
        return "admin/master/sysPartGroup";
    }
}
