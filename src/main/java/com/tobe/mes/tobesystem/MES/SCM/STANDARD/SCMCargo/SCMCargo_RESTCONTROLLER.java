package com.tobe.mes.tobesystem.MES.SCM.STANDARD.SCMCargo;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_CARGO_CD.SYS_CARGO_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_CARGO_CD.SYS_CARGO_CDS;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_COMMON_CD.SYS_COMMON_CD;
import com.tobe.mes.tobesystem.Bean.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SCMCargo_RESTCONTROLLER {
    @Autowired
    private SCMCargo_SERVICE scmCargo_service;

    @RequestMapping(value = "/scmCargo/common/cargo/type/get", method = RequestMethod.POST)   // 코드그룹 리스트 가져오기
    public List<SYS_COMMON_CD> common_cargo_type_get(){
        return scmCargo_service.common_cargo_type_get();
    }

    @RequestMapping(value = "/scmCargo/cargo/cd/get", method = RequestMethod.POST) // 코드 리스트 가져오기
    public SYS_CARGO_CDS cargo_cd_get (Double page, Double rows, String cargo_grp_code){
        return scmCargo_service.cargo_cd_get(page,rows,cargo_grp_code);
    }
    @RequestMapping(value = "/scmCargo/cargo/cd/au", method = RequestMethod.POST)  // 코드 저장 수정
    public Result cargo_cd_au (SYS_CARGO_CD scc){
        return scmCargo_service.cargo_cd_au(scc);

    }
    @RequestMapping(value = "/scmCargo/cargo/cd/delete", method = RequestMethod.DELETE) // 코드 리스트 가져오기
    public Result cargo_cd_delete (SYS_CARGO_CD scc){
        return scmCargo_service.cargo_cd_delete(scc);
    }
}
