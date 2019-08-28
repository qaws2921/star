package com.tobe.mes.tobesystem.MES.SCM.SUPPLIES.SCMECOut;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_EC.SCM_ECS;
import com.tobe.mes.tobesystem.Bean.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class SCMECOut_RESTCONTROLLER {
    @Autowired
    private SCMECOut_SERVICE scmecOut_service;
    @RequestMapping(value = "/scmECOut/sp_scm_ec_out_get", method = RequestMethod.POST) // 코드 리스트 가져오기
    public SCM_ECS scmECOut_sp_scm_ec_out_get (Double page, Double rows, Page p, HttpServletRequest req){
        return scmecOut_service.scmECOut_sp_scm_ec_out_get(page,rows,p,req);
    }

}
