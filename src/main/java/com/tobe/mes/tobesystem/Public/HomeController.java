package com.tobe.mes.tobesystem.Public;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    @RequestMapping("/")
    public String home(){
        return "index";
    }
    @RequestMapping("/aa")
    public String aa(){
        return "home";
    }
    @RequestMapping("/test")
    public String test(){
        return "test";
    }
}
