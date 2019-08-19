package com.tobe.mes.tobesystem.MES.SCM.PARTNERS.SCMDC;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_DC.SCM_DCS;
import com.tobe.mes.tobesystem.Bean.MESBean.SCM_DC_BOX.SCM_DC_BOXS;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SCMDC_RESTCONTROLLER {
    @Autowired
    private SCMDC_SERVICE scmdc_service;

    @RequestMapping(value = "/scmDC/get", method = RequestMethod.POST) // 코드 리스트 가져오기
    public SCM_DCS scmDC_get (Double page, Double rows, Page p){
        return scmdc_service.scmDC_get(page,rows,p);
    }

    @RequestMapping(value = "/scmDC/SP_SCM_DC_BOX_READY_GET", method = RequestMethod.POST) // 코드 리스트 가져오기
    public SCM_DC_BOXS scmDC_SP_SCM_DC_BOX_READY_GET_get (Double page, Double rows, Page p){
        return scmdc_service.scmDC_SP_SCM_DC_BOX_READY_GET_get(page,rows,p);
    }

    @RequestMapping(value = "/scmDC/SP_SCM_DC_ADD", method = RequestMethod.POST) // 코드 리스트 가져오기
    public Result scmDC_SP_SCM_DC_ADD_au (Page p){
        return scmdc_service.scmDC_SP_SCM_DC_ADD_au(p);
    }

}
