package com.tobe.mes.tobesystem.MES.SCM.PARTNERS.SCMDCBox;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_DC_BOX.SCM_DC_BOX;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
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
    public ModelAndView scmDCBoxAdd(SCM_DC_BOX scmDcBox) throws ParseException {
        // ModelAndView 객체 생성
        ModelAndView mav = new ModelAndView();

        // 날짜 포멧
        String strDate = scmDcBox.getWork_date();
        DateFormat sdf = new SimpleDateFormat("yyyyMMdd");
        Date date = sdf.parse(strDate);
        String work_date = sdf.format(date);
        scmDcBox.setWork_date(work_date);

        // 데이터 처리
        List<SCM_DC_BOX> data = scmdcBox_service.scmDCBoxAdd(scmDcBox);

        // 객체 생성
        mav.addObject("print_data",data);

        // 프린트 규격 별 view return
        if(scmDcBox.getSize().equals("대"))
        {
            mav.setViewName("barcode/2x2");
        }
        if(scmDcBox.getSize().equals("중"))
        {
            mav.setViewName("barcode/4x4");
        }
        if(scmDcBox.getSize().equals("소"))
        {
            mav.setViewName("barcode/8x8");
        }
        return mav;
    }
}
