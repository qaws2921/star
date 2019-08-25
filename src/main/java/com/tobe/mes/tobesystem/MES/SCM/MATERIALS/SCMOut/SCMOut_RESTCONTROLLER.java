package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMOut;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_OUT.SCM_OUT;
import com.tobe.mes.tobesystem.Bean.MESBean.SCM_OUT.SCM_OUTS;
import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_OUT_ORDER_GET.SP_SCM_OUT_ORDER_GET;
import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_OUT_ORDER_SUB_GET.SP_SCM_OUT_ORDER_SUB_GET;
import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_OUT_SUB_GET.SP_SCM_OUT_SUB_GET;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SCMOut_RESTCONTROLLER {
    @Autowired
    private SCMOut_SERVICE scmOut_service;
    @RequestMapping(value = "/scmOut/SP_SCM_OUT_GET", method = RequestMethod.POST) // 코드 리스트 가져오기
    public SCM_OUTS scmOut_SP_SCM_OUT_GET (Double page, Double rows, Page p){
        return scmOut_service.scmOut_SP_SCM_OUT_GET(page,rows,p);
    }

    @RequestMapping(value = "/scmOut/SP_SCM_OUT_SUB_GET", method = RequestMethod.POST) // 코드 리스트 가져오기
    public List<SP_SCM_OUT_SUB_GET> scmOut_SP_SCM_OUT_SUB_GET (SCM_OUT so){
        return scmOut_service.scmOut_SP_SCM_OUT_SUB_GET(so);
    }
    @RequestMapping(value = "/scmOut/SP_SCM_OUT_ORDER_SUB_GET", method = RequestMethod.POST) // 코드 리스트 가져오기
    public List<SP_SCM_OUT_ORDER_SUB_GET> scmOut_SP_SCM_OUT_ORDER_SUB_GET (SP_SCM_OUT_ORDER_GET ssoog){
        return scmOut_service.scmOut_SP_SCM_OUT_ORDER_SUB_GET(ssoog);
    }

    @RequestMapping(value = "/scmOut/SP_SCM_OUT_ADD", method = RequestMethod.POST) // 코드 리스트 가져오기
    public Result scmOut_SP_SCM_OUT_ADD (SCM_OUT so){
        return scmOut_service.scmOut_SP_SCM_OUT_ADD(so);
    }

    @RequestMapping(value = "/scmOut/SP_SCM_OUT_DEL", method = RequestMethod.DELETE) // 코드 리스트 가져오기
    public Result scmOut_SP_SCM_OUT_DEL (SCM_OUT so){
        return scmOut_service.scmOut_SP_SCM_OUT_DEL(so);
    }

}
