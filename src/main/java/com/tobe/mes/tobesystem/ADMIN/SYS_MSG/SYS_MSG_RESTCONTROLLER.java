package com.tobe.mes.tobesystem.ADMIN.SYS_MSG;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SYS_MSG_RESTCONTROLLER {

    @Autowired
    private SYS_MSG_SERVICE sys_msg_service;

    @RequestMapping(value = "/sysMsg/msg/get", method = RequestMethod.POST) // 코드 리스트 가져오기
    public SYS_MSGS msg_get (Double page, Double rows){
        return sys_msg_service.msg_get(page,rows);
    }

    @RequestMapping(value = "/sysMsg/msg/au", method = RequestMethod.POST) // 코드 리스트 가져오기
    public int msg_au (SYS_MSG sm){
        return sys_msg_service.msg(sm);
    }

    @RequestMapping(value = "/sysMsg/msg/delete", method = RequestMethod.DELETE) // 코드 리스트 가져오기
    public int msg_delete (SYS_MSG sm){
        return sys_msg_service.msg_delete(sm);
    }
}
