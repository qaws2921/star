package com.tobe.mes.tobesystem.Mapper;


import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.SYS_PART_GROUP.SYS_PART_GROUP;

import java.util.List;

public interface SYS_PART_GROUP_Mapper {
    List<SYS_PART_GROUP> part_group_get(Page p);
    int part_group_count(Page p);

}
