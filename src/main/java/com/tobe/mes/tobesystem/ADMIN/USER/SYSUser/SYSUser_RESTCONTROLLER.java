package com.tobe.mes.tobesystem.ADMIN.USER.SYSUser;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_COMMON_CD.SYS_COMMON_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_USER_CD.SYS_USER_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_USER_CD.SYS_USER_CDS;
import com.tobe.mes.tobesystem.Bean.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SYSUser_RESTCONTROLLER {

    @Autowired
    private SYSUser_SERVICE sysUser_service;

    @RequestMapping(value = "/sysUser/common/dept/get", method = RequestMethod.POST)   // 코드그룹 리스트 가져오기
    public List<SYS_COMMON_CD> common_dept_get (){
        return sysUser_service.common_dept_get();
    }

    @RequestMapping(value = "/sysUser/common/duty/get", method = RequestMethod.POST)   // 코드그룹 리스트 가져오기
    public List<SYS_COMMON_CD> common_duty_get (){
        return sysUser_service.common_duty_get();
    }

    @RequestMapping(value = "/sysUser/user/get", method = RequestMethod.POST) // 코드 리스트 가져오기
    public SYS_USER_CDS user_get (Double page, Double rows, String dept_code){
        return sysUser_service.user_get(page,rows,dept_code);
    }
    @RequestMapping(value = "/sysUser/user/cd/au", method = RequestMethod.POST)  // 코드 저장 수정
    public Result user_cd_au (SYS_USER_CD suc){
        return sysUser_service.user_cd_au(suc);

    }
    @RequestMapping(value = "/sysUser/user/cd/delete", method = RequestMethod.DELETE) // 코드 리스트 가져오기
    public Result user_cd_delete (SYS_USER_CD suc){
        return sysUser_service.user_cd_delete(suc);
    }
}
