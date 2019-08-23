package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMStockRetList;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_STOCK_RET.SCM_STOCK_RETS;
import com.tobe.mes.tobesystem.Bean.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SCMStockRetList_RESTCONTROLLER {
    @Autowired
    private SCMStockRetList_SERVICE scmStockRet_service;

    @RequestMapping(value = "/scmStockRet/SP_SCM_STOCK_RET_GET", method = RequestMethod.POST) // 코드 리스트 가져오기
    public SCM_STOCK_RETS scmStockRet_SP_SCM_STOCK_RET_GET (Double page, Double rows, Page p){
        return scmStockRet_service.scmStockRet_SP_SCM_STOCK_RET_GET(page,rows,p);
    }

}
