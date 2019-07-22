package com.tobe.mes.tobesystem.ADMIN.AUTH.SYS_MENU_CD;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SYS_MENU_CD_RESTCONTROLLER {

    @Autowired
    private SYS_MENU_CD_SERVICE sys_menu_cd_service;

    @RequestMapping(value = "/menu/group/get", method = RequestMethod.POST)
    public List<SYS_MENU_CD> menu_group_get(){
        return sys_menu_cd_service.menu_group_get();
    }

    @RequestMapping(value = "/menu/cd/program/get", method = RequestMethod.POST)
    public SYS_MENU_CDS menu_cd_program_get(SYS_MENU_CD smc){
        return sys_menu_cd_service.menu_cd_program_get(smc);
    }

    @RequestMapping(value = "/auth/program/add", method = RequestMethod.POST)
    public int auth_program_add(SYS_MENU_CD smc){
        System.out.println(smc.getAuth_code());
        System.out.println(smc.getMenu_code());
        System.out.println(smc.getCheck_add());
        System.out.println(smc.getCheck_del());
        return sys_menu_cd_service.auth_program_add(smc);
    }
}
