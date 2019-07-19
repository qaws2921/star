package com.tobe.mes.tobesystem.ADMIN.SYS_PART_GROUP;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SYS_PART_GROUP_RESTCONTROLLER {
    @Autowired
    private SYS_PART_GROUP_SERVICE sys_part_group_service;

    @RequestMapping(value = "/sysPartGroup/part/group/get", method = RequestMethod.POST) // 코드 리스트 가져오기
    public SYS_PART_GROUPS part_group_get (Double page, Double rows){
        return sys_part_group_service.part_group_get(page,rows);
    }
    @RequestMapping(value = "/sysPartGroup/part/group/au", method = RequestMethod.POST) // 코드 리스트 가져오기
    public int part_group_au (SYS_PART_GROUP spg){
        return sys_part_group_service.part_group_au(spg);
    }

    @RequestMapping(value = "/sysPartGroup/part/group/delete", method = RequestMethod.DELETE) // 코드 리스트 가져오기
    public int part_group_delete (SYS_PART_GROUP spg){
        return sys_part_group_service.part_group_delete(spg);
    }

}
