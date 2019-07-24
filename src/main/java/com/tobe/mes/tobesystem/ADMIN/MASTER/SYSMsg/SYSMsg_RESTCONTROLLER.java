package com.tobe.mes.tobesystem.ADMIN.MASTER.SYSMsg;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_MSG_CD.SYS_MSG_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_MSG_CD.SYS_MSG_CDS;
import com.tobe.mes.tobesystem.Bean.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SYSMsg_RESTCONTROLLER {

    @Autowired
    private SYSMsg_SERVICE sys_msg_service;

    @RequestMapping(value = "/sysMsg/msg/get", method = RequestMethod.POST) // 코드 리스트 가져오기
    public SYS_MSG_CDS msg_get (Double page, Double rows){
        return sys_msg_service.msg_get(page,rows);
    }

    @RequestMapping(value = "/sysMsg/msg/au", method = RequestMethod.POST) // 코드 리스트 가져오기
    public Result msg_au (SYS_MSG_CD sm){
        return sys_msg_service.msg(sm);
    }

    @RequestMapping(value = "/sysMsg/msg/delete", method = RequestMethod.DELETE) // 코드 리스트 가져오기
    public Result msg_delete (SYS_MSG_CD sm){
        return sys_msg_service.msg_delete(sm);
    }
}
