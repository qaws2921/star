package com.tobe.mes.tobesystem.Mapper.Admin.Master;

import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.ADMIN.MASTER.SYS_COMMON.SYS_COMMON;

import java.util.List;

public interface SYS_COMMON_Mapper {
    List<SYS_COMMON> common_get(Page p);
    List<SYS_COMMON> common_group_get();
    int common_count(Page p);
    int common_au(SYS_COMMON sc);
    int common_delete(String type_value);

}
