package com.tobe.mes.tobesystem.MES.SCM.SUPPLIES.SCMECOut;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_EC.SCM_EC;
import com.tobe.mes.tobesystem.Bean.MESBean.SCM_EC.SCM_ECS;
import com.tobe.mes.tobesystem.Bean.MESBean.SCM_EC_SUB.SCM_EC_SUB;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
public class SCMECOut_RESTCONTROLLER {
    @Autowired
    private SCMECOut_SERVICE scmecOut_service;
    @RequestMapping(value = "/scmECOut/sp_scm_ec_out_get", method = RequestMethod.POST) // 코드 리스트 가져오기
    public SCM_ECS scmECOut_sp_scm_ec_out_get (Double page, Double rows, Page p, HttpServletRequest req){
        return scmecOut_service.scmECOut_sp_scm_ec_out_get(page,rows,p,req);
    }

    @RequestMapping(value = "/scmECOut/sp_scm_ec_out_add", method = RequestMethod.POST) // 코드 리스트 가져오기
    public Result scmECOut_sp_scm_ec_out_add (SCM_EC se, HttpServletRequest req){
        return scmecOut_service.scmECOut_sp_scm_ec_out_add(se,req);
    }

    @RequestMapping(value = "/scmECOut/sp_scm_ec_out_sub_get", method = RequestMethod.POST) // 코드 리스트 가져오기
    public List<SCM_EC_SUB> scmECOut_sp_scm_ec_out_sub_get (SCM_EC se, HttpServletRequest req){
        return scmecOut_service.scmECOut_sp_scm_ec_out_sub_get(se,req);
    }

    @RequestMapping(value = "/scmECOut/sp_scm_ec_out_del", method = RequestMethod.DELETE) // 코드 리스트 가져오기
    public Result scmECOut_sp_scm_ec_out_del (SCM_EC se, HttpServletRequest req){
        return scmecOut_service.scmECOut_sp_scm_ec_out_del(se,req);
    }

}
