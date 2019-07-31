package com.tobe.mes.tobesystem.MES.SCM.STANDARD.SCMSupp;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_SUPP_CD.SYS_SUPP_CDS;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SCMSupp_RESTCONTROLLER {
    @Autowired
    private SCMSupp_SERVICE scmSupp_service;

    @RequestMapping(value = "/sysSupp/supp/cd/get", method = RequestMethod.POST) // 코드 리스트 가져오기
    public SYS_SUPP_CDS supp_cd_get (Double page, Double rows, String corp_type){
        return scmSupp_service.supp_cd_get(page,rows,corp_type);
    }
}
