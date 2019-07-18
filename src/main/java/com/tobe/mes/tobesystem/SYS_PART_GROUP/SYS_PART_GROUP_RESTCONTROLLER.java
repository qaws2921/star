package com.tobe.mes.tobesystem.SYS_PART_GROUP;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SYS_PART_GROUP_RESTCONTROLLER {
    @Autowired
    private SYS_PART_GROUP_SERVICE sys_part_group_service;

    @RequestMapping(value = "/part/group/get", method = RequestMethod.POST) // 코드 리스트 가져오기
    public SYS_PART_GROUPS part_group_get (Double page, Double rows){
        return sys_part_group_service.part_group_get(page,rows);
    }

}
