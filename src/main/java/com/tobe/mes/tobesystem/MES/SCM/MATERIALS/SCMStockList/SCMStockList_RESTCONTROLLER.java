package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMStockList;

import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_STOCK_BPART_GET.SP_SCM_STOCK_BPART_GETS;
import com.tobe.mes.tobesystem.Bean.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

@RestController
public class SCMStockList_RESTCONTROLLER {

    @Autowired
    private SCMStockList_SERVICE scmStockList_service;



    @RequestMapping(value = "/scmStockList/SP_SCM_STOCK_BPART_GET", method = RequestMethod.POST) // 코드 리스트 가져오기
    public SP_SCM_STOCK_BPART_GETS scmStockList_SP_SCM_STOCK_BPART_GET (Double page, Double rows, Page p){
        return scmStockList_service.scmStockList_SP_SCM_STOCK_BPART_GET(page,rows,p);
    }

    @RequestMapping(value = "/scmStockList/excel/download",method = RequestMethod.POST)
    public byte[] scmStockList_download(HttpServletResponse response, Page p ) throws  Exception{
        return scmStockList_service.scmStockList_download(response,p);
    }
}
