package com.tobe.mes.tobesystem.MES.SCM.SUPPLIES.SCMECIn;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_EC.SCM_EC;
import com.tobe.mes.tobesystem.Bean.MESBean.SCM_EC.SCM_ECS;
import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_EC_IN_READY_GET.SP_SCM_EC_IN_READY_GET;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
public class SCMECIn_RESTCONTROLLER {
    @Autowired
    private SCMECIn_SERVICE scmecIn_service;

    @RequestMapping(value = "/scmECIn/sp_scm_ec_in_get", method = RequestMethod.POST) // 코드 리스트 가져오기
    public SCM_ECS scmECIn_sp_scm_ec_in_get (Double page, Double rows, Page p, HttpServletRequest req){
        return scmecIn_service.scmECIn_sp_scm_ec_in_get(page,rows,p,req);
    }

    @RequestMapping(value = "/scmECIn/sp_scm_ec_in_add", method = RequestMethod.POST) // 코드 리스트 가져오기
    public Result scmECIn_sp_scm_ec_in_add (SCM_EC se, HttpServletRequest req){
        return scmecIn_service.scmECIn_sp_scm_ec_in_add(se,req);
    }

    @RequestMapping(value = "/scmECIn/sp_scm_ec_in_ready_get", method = RequestMethod.POST) // 코드 리스트 가져오기
    public List<SP_SCM_EC_IN_READY_GET> scmECIn_sp_scm_ec_in_ready_get (SCM_EC se, HttpServletRequest req){
        return scmecIn_service.scmECIn_sp_scm_ec_in_ready_get(se,req);
    }
//    @RequestMapping(value = "/scmECIn/sp_scm_ec_get", method = RequestMethod.POST) // 코드 리스트 가져오기
//    public SCM_ECS scmECIn_sp_scm_ec_get (SCM_EC se, HttpServletRequest req){
//        return scmecIn_service.scmECIn_sp_scm_ec_get(se,req);
//    }
//    @RequestMapping(value = "/scmECIn/sp_scm_ec_in_ready_get", method = RequestMethod.POST) // 코드 리스트 가져오기
//    public List<SP_SCM_EC_IN_READY_GET> scmECIn_sp_scm_ec_in_ready_get (SCM_EC se, HttpServletRequest req){
//        return scmecIn_service.scmECIn_sp_scm_ec_in_ready_get(se,req);
//    }
}
