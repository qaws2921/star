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
    @RequestMapping("/barcode2x")
    public String barcode2x(){
        return "barcode/2x2";
    }
    @RequestMapping("/barcode4x")
    public String barcode4x(){
        return "barcode/4x4";
    }
    @RequestMapping("/barcode8x")
    public String barcode8x(){
        return "barcode/8x8";
    }

}
