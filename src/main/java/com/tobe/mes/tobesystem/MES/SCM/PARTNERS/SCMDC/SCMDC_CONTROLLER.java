package com.tobe.mes.tobesystem.MES.SCM.PARTNERS.SCMDC;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_DC.SCM_DC;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class SCMDC_CONTROLLER {

    @Autowired
    private SCMDC_SERVICE scmdc_service;

    @RequestMapping(value = "/scmDC")
    public String scmDC(){
        return "scm/partners/scmDC";
    }
    @RequestMapping(value = "/print_delivered")
    public String print_delivered(){
        return "scm/partners/print/delivered";
    }
    @RequestMapping(value = "/scmDC/print", method = RequestMethod.POST) // 코드 리스트 가져오기
    public ModelAndView scmDC_print (SCM_DC sd, ModelAndView mav){
        return scmdc_service.scmDC_print(sd,mav);
    }

}
