package com.tobe.mes.tobesystem.Public;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_CARGO_CD.SYS_CARGO_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_COMMON_CD.SYS_COMMON_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_LOC_CD.SYS_LOC_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_PART_GROUP.SYS_PART_GROUP;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_SUPP_CD.SYS_SUPP_CD;
import com.tobe.mes.tobesystem.Bean.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class COMMON_RESTCONTROLLER {
    @Autowired
    private COMMON_SERVICE common_service;

    @RequestMapping(value = "/common/part/group/get", method = RequestMethod.POST) // 코드 리스트 가져오기
    public List<SYS_PART_GROUP> part_group_get (){
        return common_service.part_group_get();
    }
    @RequestMapping(value = "/common/common/get", method = RequestMethod.POST) // 코드 리스트 가져오기
    public List<SYS_COMMON_CD> common_get (Page p){
        return common_service.common_get(p);
    }
    @RequestMapping(value = "/common/cargo/cd/get", method = RequestMethod.POST) // 코드 리스트 가져오기
    public List<SYS_CARGO_CD> cargo_cd_get (){
        return common_service.cargo_cd_get();
    }
    @RequestMapping(value = "/common/loc/cd/get", method = RequestMethod.POST) // 코드 리스트 가져오기
    public List<SYS_LOC_CD> loc_cd_get (Page p){
        return common_service.loc_cd_get(p);
    }
    @RequestMapping(value = "/common/supp/get", method = RequestMethod.POST) // 코드 리스트 가져오기
    public List<SYS_SUPP_CD> supp_get (Page p){
        return common_service.supp_get(p);
    }

}
