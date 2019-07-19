package com.tobe.mes.tobesystem.ADMIN.SYS_COMMON;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SYS_COMMON_RESTCONTROLLER {
    @Autowired
    private SYS_COMMON_SERVICE common_service;

    @RequestMapping(value = "/sysCommon/common/get", method = RequestMethod.POST) // 코드 리스트 가져오기
    public SYS_COMMONS common_get (Double page, Double rows, String code_type){
        return common_service.common_get(page,rows,code_type);
    }
    @RequestMapping(value = "/sysCommon/common/au", method = RequestMethod.POST)  // 코드 저장 수정
    public int common_au (SYS_COMMON sc){
        return common_service.common_au(sc);

    }
    @RequestMapping(value = "/sysCommon/common/group/get", method = RequestMethod.POST)   // 코드그룹 리스트 가져오기
    public List<SYS_COMMON> common_group_get (){
        return common_service.common_group_get();
    }

    @RequestMapping(value = "/sysCommon/common/delete", method = RequestMethod.DELETE) // 코드 삭제
    public int common_delete (SYS_COMMON sc) {
        return common_service.common_delete(sc);
    }
}
