package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMStockList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SCMStockList_RESTCONTROLLER {

    @Autowired
    private SCMStockList_SERVICE scmStockList_service;

//    @RequestMapping(value = "/scmln/SP_SCM_IN_GET", method = RequestMethod.POST) // 코드 리스트 가져오기
//    public SCM_INS scmln_SP_SCM_IN_GET (Double page, Double rows, Page p){
//        return scMln_service.scmln_SP_SCM_IN_GET(page,rows,p);
//    }
}
