package com.tobe.mes.tobesystem.SYS_COMMON;

import com.tobe.mes.tobesystem.Bean.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SYS_COMMON_RESTCONTROLLER {
    @Autowired
    private SYS_COMMON_SERVICE common_service;

    @RequestMapping(value = "/common/get", method = RequestMethod.POST)
    public SYS_COMMONS common_get (Double page, Double rows, String code_type){
        System.out.println(code_type);
        return common_service.common_get(page,rows,code_type);
    }
    @RequestMapping(value = "/common_au", method = RequestMethod.POST)
    public void common_au (SYS_COMMON sc){
        System.out.println(sc.getCode_type());

    }
    @RequestMapping(value = "/common/group/get", method = RequestMethod.POST)
    public List<SYS_COMMON> common_group_get (){
        return common_service.common_group_get();
    }
}
