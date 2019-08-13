package com.tobe.mes.tobesystem.MES.SCM.STANDARD.SCMLoc;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_LOC_CD.SYS_LOC_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_LOC_CD.SYS_LOC_CDS;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SCMLoc_RESTCONTROLLER {
    @Autowired
    private SCMLoc_SERVICE scmLoc_service;
    @RequestMapping(value = "/scmLoc/get", method = RequestMethod.POST) // 코드 리스트 가져오기
    public SYS_LOC_CDS scmLoc_get (Double page, Double rows, Page p){
        return scmLoc_service.scmLoc_get(page,rows,p);
    }

    @RequestMapping(value = "/scmLoc/au", method = RequestMethod.POST)  // 코드 저장 수정
    public Result scmLoc_au (SYS_LOC_CD slc){
        return scmLoc_service.scmLoc_au(slc);

    }

    @RequestMapping(value = "/scmLoc/delete", method = RequestMethod.DELETE) // 코드 삭제
    public Result scmLoc_delete (SYS_LOC_CD slc) {
        return scmLoc_service.scmLoc_delete(slc);
    }

}
