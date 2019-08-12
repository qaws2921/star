package com.tobe.mes.tobesystem.Public;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_CARGO_CD.SYS_CARGO_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_COMMON_CD.SYS_COMMON_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_PART_GROUP.SYS_PART_GROUP;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Mapper.Admin.Master.SYSCommon_Mapper;
import com.tobe.mes.tobesystem.Mapper.Admin.Master.SYSPartGroup_Mapper;
import com.tobe.mes.tobesystem.Mapper.Scm.Standard.SCMCargo_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class COMMON_SERVICE {
    @Autowired
    private SYSPartGroup_Mapper sysPartGroup_mapper;

    @Autowired
    private SYSCommon_Mapper sysCommon_mapper;

    @Autowired
    private SCMCargo_Mapper scmCargo_mapper;

    public List<SYS_PART_GROUP> part_group_get() {
        Page p = new Page();
        p.setPage_num(0);
        p.setTotal_num(0);
        return sysPartGroup_mapper.part_group_get(p);
    }

    public List<SYS_COMMON_CD> common_get(Page p){
        p.setPage_num(0);
        p.setTotal_num(0);
        return sysCommon_mapper.common_get(p);
    }

    public List<SYS_CARGO_CD> cargo_cd_get() {
        Page p = new Page();
        p.setPage_num(0);
        p.setTotal_num(0);
        p.setKeyword("");
        return scmCargo_mapper.cargo_cd_get(p);
    }
}
