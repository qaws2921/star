package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMln;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_IN.SCM_IN;
import com.tobe.mes.tobesystem.Bean.MESBean.SCM_IN.SCM_INS;
import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_IN_SUB_GET.SP_SCM_IN_SUB_GET;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;



@RestController
public class SCMln_RESTCONTROLLER {
    @Autowired
    private SCMln_SERVICE scMln_service;

    @RequestMapping(value = "/scmln/SP_SCM_IN_GET", method = RequestMethod.POST) // 코드 리스트 가져오기
    public SCM_INS scmln_SP_SCM_IN_GET (Double page, Double rows, Page p, HttpServletRequest req){
        return scMln_service.scmln_SP_SCM_IN_GET(page,rows,p,req);
    }
    @RequestMapping(value = "/scmln/SP_SCM_IN_SUB_GET", method = RequestMethod.POST) // 코드 리스트 가져오기
    public List<SP_SCM_IN_SUB_GET> scmln_SP_SCM_IN_SUB_GET (SCM_IN si, HttpServletRequest req){
        return scMln_service.scmln_SP_SCM_IN_SUB_GET(si,req);
    }
    @RequestMapping(value = "/scmln/SP_SCM_IN_ADD", method = RequestMethod.POST) // 코드 리스트 가져오기
    public Result scmln_SP_SCM_IN_ADD (SCM_IN si, HttpServletRequest req){
        return scMln_service.scmln_SP_SCM_IN_ADD(si,req);
    }
    @RequestMapping(value = "/scmln/SP_SCM_IN_DEL", method = RequestMethod.DELETE) // 코드 리스트 가져오기
    public Result scmln_SP_SCM_IN_DEL (SCM_IN si, HttpServletRequest req){
        return scMln_service.scmln_SP_SCM_IN_DEL(si,req);
    }

}
