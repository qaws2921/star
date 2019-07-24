package com.tobe.mes.tobesystem.ADMIN.USER.SYSUserSupp;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_USER_SUPP_CD.SYS_USER_SUPP_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_USER_SUPP_CD.SYS_USER_SUPP_CDS;
import com.tobe.mes.tobesystem.Bean.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SYSUserSupp_RESTCONTROLLER {

    @Autowired
    private SYSUserSupp_SERVICE sysUserSupp_service;

    @RequestMapping(value = "/sysUserSupp/user/supp/get", method = RequestMethod.POST) // 코드 리스트 가져오기
    public SYS_USER_SUPP_CDS user_supp_get (Double page, Double rows){
        return sysUserSupp_service.user_supp_get(page,rows);
    }

    @RequestMapping(value = "/sysUserSupp/user/supp/cd/au", method = RequestMethod.POST)  // 코드 저장 수정
    public Result user_supp_cd_au (SYS_USER_SUPP_CD susc){
        return sysUserSupp_service.user_supp_cd_au(susc);

    }


    @RequestMapping(value = "/sysUserSupp/user/supp/cd/delete", method = RequestMethod.DELETE) // 코드 리스트 가져오기
    public Result user_supp_cd_delete (SYS_USER_SUPP_CD susc){
        return sysUserSupp_service.user_supp_cd_delete(susc);
    }
}
