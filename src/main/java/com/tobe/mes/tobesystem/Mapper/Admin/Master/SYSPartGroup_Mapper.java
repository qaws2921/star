package com.tobe.mes.tobesystem.Mapper.Admin.Master;


import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_PART_GROUP.SYS_PART_GROUP;
import com.tobe.mes.tobesystem.Bean.Result;

import java.util.List;

public interface SYSPartGroup_Mapper {
    List<SYS_PART_GROUP> part_group_get(Page p);
    int part_group_count(Page p);
    Result part_group_au(SYS_PART_GROUP spg);
    Result part_group_delete(String code);


}
