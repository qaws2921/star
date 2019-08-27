package com.tobe.mes.tobesystem.MES.ADMIN.AUTH.SYSAuth;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_AUTH_CD.SYS_AUTH_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_AUTH_CD.SYS_AUTH_CDS;
import com.tobe.mes.tobesystem.Bean.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class SYSAuth_RESTCONTROLLER {


    @Autowired
    private SYSAuth_SERVICE sys_auth_cd_service;

    @RequestMapping(value = "/sysAuth/auth/cd/get", method = RequestMethod.POST) // 코드 리스트 가져오기
    public SYS_AUTH_CDS auth_cd_get (Double page, Double rows, HttpServletRequest req){

        return sys_auth_cd_service.auth_cd_get(page,rows,req);
    }

    @RequestMapping(value = "/sysAuth/auth/cd/au", method = RequestMethod.POST) // 코드 리스트 가져오기
    public Result auth_cd_au (SYS_AUTH_CD sac, HttpServletRequest req){
        return sys_auth_cd_service.auth_cd_au(sac,req);
    }

    @RequestMapping(value = "/sysAuth/auth/cd/delete", method = RequestMethod.DELETE) // 코드 리스트 가져오기
    public Result auth_cd_delete (SYS_AUTH_CD sac, HttpServletRequest req){
        return sys_auth_cd_service.auth_cd_delete(sac,req);
    }
}
