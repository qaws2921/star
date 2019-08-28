package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMStockRet;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_STOCK_RET.SCM_STOCK_RETS;
import com.tobe.mes.tobesystem.Bean.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class SCMStockRet_RESTCONTROLLER {
    @Autowired
    private SCMStockRet_SERVICE scmStockRet_service;

    @RequestMapping(value = "/scmStockRet/sp_scm_stock_rev_get", method = RequestMethod.POST) // 코드 리스트 가져오기
    public SCM_STOCK_RETS scmStockRet_sp_scm_stock_rev_get (Double page, Double rows, Page p, HttpServletRequest req){
        return scmStockRet_service.scmStockRet_sp_scm_stock_rev_get(page,rows,p,req);

    }
}
