package com.tobe.mes.tobesystem.Public;

import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

@Service
public class SESSION_SERVICE {
    public Integer session_check(String session_check, HttpServletRequest req) {
        req.getSession().setAttribute("session_check", session_check);
        return 1;
    }
}
