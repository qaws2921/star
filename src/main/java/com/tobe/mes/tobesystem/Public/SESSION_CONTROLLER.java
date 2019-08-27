package com.tobe.mes.tobesystem.Public;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class SESSION_CONTROLLER {
    @Autowired
    private SESSION_SERVICE session_service;

    @RequestMapping(value = "/session_check", method = RequestMethod.POST) // 코드 리스트 가져오기
    public Integer session_check (String session_check, HttpServletRequest req){
        return session_service.session_check(session_check,req);
    }
}
