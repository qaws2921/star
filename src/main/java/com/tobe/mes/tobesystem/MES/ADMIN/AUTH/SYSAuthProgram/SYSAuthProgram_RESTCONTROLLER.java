package com.tobe.mes.tobesystem.MES.ADMIN.AUTH.SYSAuthProgram;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_MENU_CD.SYS_MENU_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_MENU_CD.SYS_MENU_CDS;
import com.tobe.mes.tobesystem.Bean.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
public class SYSAuthProgram_RESTCONTROLLER {

    @Autowired
    private SYSAuthProgram_SERVICE sys_menu_cd_service;

    @RequestMapping(value = "/menu/group/get", method = RequestMethod.POST)
    public List<SYS_MENU_CD> menu_group_get(SYS_MENU_CD smc,HttpServletRequest req){
        return sys_menu_cd_service.menu_group_get(smc,req);
    }

    @RequestMapping(value = "/menu/cd/program/get", method = RequestMethod.POST)
    public SYS_MENU_CDS menu_cd_program_get(SYS_MENU_CD smc,HttpServletRequest req){
        return sys_menu_cd_service.menu_cd_program_get(smc,req);
    }

    @RequestMapping(value = "/auth/program/add", method = RequestMethod.POST)
    public Result auth_program_add(SYS_MENU_CD smc,HttpServletRequest req){
        return sys_menu_cd_service.auth_program_add(smc,req);
    }
}
