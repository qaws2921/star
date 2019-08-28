package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMInFromDC;

import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_IN_READY_GET.SP_SCM_IN_READY_GET;
import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_IN_READY_GET.SP_SCM_IN_READY_GETS;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
public class SCMInFromDC_RESTCONTROLLER {
    @Autowired
    private SCMInFromDC_SERVICE scmInFromDC_service;
    @RequestMapping(value = "/scmInFromDC/SP_SCM_IN_READY_GET", method = RequestMethod.POST) // 코드 리스트 가져오기
    public List<SP_SCM_IN_READY_GET> scmInFromDC_SP_SCM_IN_READY_GET (Page p, HttpServletRequest req) {
        return scmInFromDC_service.scmInFromDC_SP_SCM_IN_READY_GET(p,req);
    }

    @RequestMapping(value = "/scmInFromDC/SP_SCM_IN_ADD", method = RequestMethod.POST) // 코드 리스트 가져오기
    public Result scmInFromDC_SP_SCM_IN_ADD (SP_SCM_IN_READY_GET ssirg, HttpServletRequest req) {
        return scmInFromDC_service.scmInFromDC_SP_SCM_IN_ADD(ssirg,req);
    }
}
