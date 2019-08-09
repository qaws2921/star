package com.tobe.mes.tobesystem.MES.SCM.STANDARD.SCMPart;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_BPART_CD.SYS_BPART_CDS;
import com.tobe.mes.tobesystem.Bean.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SCMPart_RESTCONTROLLER {
    @Autowired
    private SCMPart_SERVICE scmPart_service;

    @RequestMapping(value = "/scmPart/bPart/get", method = RequestMethod.POST) // 코드 리스트 가져오기
    public SYS_BPART_CDS bPart_get (Double page, Double rows, Page p){
        return scmPart_service.bPart_get(page,rows,p);
    }
}
