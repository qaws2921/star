package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMStockRev;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_STOCK_REV.SCM_STOCK_REV;
import com.tobe.mes.tobesystem.Bean.MESBean.SCM_STOCK_REV.SCM_STOCK_REVS;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class SCMStockRev_RESTCONTROLLER {
    @Autowired
    private SCMStockRev_SERVICE scmStockRev_service;
    @RequestMapping(value = "/scmStockRev/SP_SCM_STOCK_REV_GET", method = RequestMethod.POST) // 코드 리스트 가져오기
    public SCM_STOCK_REVS scmStockRev_SP_SCM_STOCK_REV_GET (Double page, Double rows, Page p, HttpServletRequest req){
        return scmStockRev_service.scmStockRev_SP_SCM_STOCK_REV_GET(page,rows,p,req);

    }

    @RequestMapping(value = "/scmStockRev/SP_SCM_STOCK_REV_ADD", method = RequestMethod.POST) // 코드 리스트 가져오기
    public Result scmStockRev_SP_SCM_STOCK_REV_ADD (SCM_STOCK_REV ssr, HttpServletRequest req){
        return scmStockRev_service.scmStockRev_SP_SCM_STOCK_REV_ADD(ssr,req);
    }
}
