package com.tobe.mes.tobesystem.ADMIN.MASTER.SYSCommon;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_COMMON_CD.SYS_COMMON_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_COMMON_CD.SYS_COMMONS_CD;
import com.tobe.mes.tobesystem.Bean.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SYSCommon_RESTCONTROLLER {
    @Autowired
    private SYSCommon_SERVICE common_service;

    @RequestMapping(value = "/sysCommon/common/get", method = RequestMethod.POST) // 코드 리스트 가져오기
    public SYS_COMMONS_CD common_get (Double page, Double rows, String code_type){
        return common_service.common_get(page,rows,code_type);
    }
    @RequestMapping(value = "/sysCommon/common/au", method = RequestMethod.POST)  // 코드 저장 수정
    public Result common_au (SYS_COMMON_CD sc){
        return common_service.common_au(sc);

    }
    @RequestMapping(value = "/sysCommon/common/group/get", method = RequestMethod.POST)   // 코드그룹 리스트 가져오기
    public List<SYS_COMMON_CD> common_group_get (){
        return common_service.common_group_get();
    }

    @RequestMapping(value = "/sysCommon/common/delete", method = RequestMethod.DELETE) // 코드 삭제
    public Result common_delete (SYS_COMMON_CD sc) {
        return common_service.common_delete(sc);
    }
}
