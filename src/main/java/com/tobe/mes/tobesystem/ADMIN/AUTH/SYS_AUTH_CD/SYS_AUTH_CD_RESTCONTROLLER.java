package com.tobe.mes.tobesystem.ADMIN.AUTH.SYS_AUTH_CD;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SYS_AUTH_CD_RESTCONTROLLER {

    @Autowired
    private SYS_AUTH_CD_SERVICE sys_auth_cd_service;

    @RequestMapping(value = "/sysAuth/auth/cd/get", method = RequestMethod.POST) // 코드 리스트 가져오기
    public SYS_AUTH_CDS auth_cd_get (Double page, Double rows){

        return sys_auth_cd_service.auth_cd_get(page,rows);
    }

    @RequestMapping(value = "/sysAuth/auth/cd/au", method = RequestMethod.POST) // 코드 리스트 가져오기
    public int auth_cd_au (SYS_AUTH_CD sac){
        return sys_auth_cd_service.auth_cd_au(sac);
    }

    @RequestMapping(value = "/sysAuth/auth/cd/delete", method = RequestMethod.DELETE) // 코드 리스트 가져오기
    public int auth_cd_delete (SYS_AUTH_CD sac){
        return sys_auth_cd_service.auth_cd_delete(sac);
    }
}
