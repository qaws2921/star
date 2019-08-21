package com.tobe.mes.tobesystem.MES.SCM.PARTNERS.SCMDCBox;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_DC_BOX.SCM_DC_BOX;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@Controller
public class SCMDCBox_CONTROLLER {

    @Autowired
    private SCMDCBox_SERVICE scmdcBox_service;

    @RequestMapping("scmDCBox")
    public String scmDCBox(){
        return "scm/partners/scmDCBox";
    }

    @RequestMapping("scmDCBoxAdd")
    public ModelAndView scmDCBoxAdd(SCM_DC_BOX scmDcBox)
    {
        ModelAndView mav = new ModelAndView();
        System.out.println(scmDcBox.getPart_code());
        System.out.println(scmDcBox.getLot_no());
        System.out.println(scmDcBox.getOrder_qty());
        System.out.println(scmDcBox.getWork_date());

        List<SCM_DC_BOX> data = scmdcBox_service.scmDCBoxAdd(scmDcBox);
        mav.addObject("print_data",data);
        mav.setViewName("barcode/2x2");
        return mav;
    }
}
