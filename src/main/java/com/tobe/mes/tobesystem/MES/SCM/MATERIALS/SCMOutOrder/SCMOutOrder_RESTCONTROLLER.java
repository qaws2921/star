package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMOutOrder;

import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_OUT_ORDER_GET.SP_SCM_OUT_ORDER_GET;
import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_OUT_ORDER_GET.SP_SCM_OUT_ORDER_GETS;
import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_OUT_ORDER_SUB_GET.SP_SCM_OUT_ORDER_SUB_GET;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class SCMOutOrder_RESTCONTROLLER {
    @Autowired
    private SCMOutOrder_SERVICE scmOutOrder_service;
    @RequestMapping(value = "/scmOutOrder/SP_SCM_OUT_ORDER_GET", method = RequestMethod.POST) // 코드 리스트 가져오기
    public SP_SCM_OUT_ORDER_GETS scmOutOrder_SP_SCM_OUT_ORDER_GET (Double page, Double rows, Page p){
        return scmOutOrder_service.scmOutOrder_SP_SCM_OUT_ORDER_GET(page,rows,p);
    }
    @RequestMapping(value = "/scmOutOrder/SP_SCM_OUT_ORDER_ADD", method = RequestMethod.POST) // 코드 리스트 가져오기
    public Result scmOutOrder_SP_SCM_OUT_ORDER_ADD (SP_SCM_OUT_ORDER_GET ssoog){
        return scmOutOrder_service.scmOutOrder_SP_SCM_OUT_ORDER_ADD(ssoog);
    }
    @RequestMapping(value = "/scmOutOrder/SP_SCM_OUT_ORDER_SUB_GET", method = RequestMethod.POST) // 코드 리스트 가져오기
    public List<SP_SCM_OUT_ORDER_SUB_GET> scmOutOrder_SP_SCM_OUT_ORDER_SUB_GET (SP_SCM_OUT_ORDER_SUB_GET ssoosg){
        return scmOutOrder_service.scmOutOrder_SP_SCM_OUT_ORDER_SUB_GET(ssoosg);
    }
    @RequestMapping(value = "/scmOutOrder/SP_SCM_OUT_ORDER_DEL", method = RequestMethod.DELETE) // 코드 리스트 가져오기
    public Result scmOutOrder_SP_SCM_OUT_ORDER_DEL (SP_SCM_OUT_ORDER_GET ssoog){
        return scmOutOrder_service.scmOutOrder_SP_SCM_OUT_ORDER_DEL(ssoog);
    }
}
