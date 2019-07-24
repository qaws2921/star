package com.tobe.mes.tobesystem.Mapper.Admin.Master;

import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_COMMON_CD.SYS_COMMON_CD;
import com.tobe.mes.tobesystem.Bean.Result;

import java.util.List;

public interface SYSCommon_Mapper {
    List<SYS_COMMON_CD> common_get(Page p);
    List<SYS_COMMON_CD> common_group_get();
    int common_count(Page p);
    Result common_au(SYS_COMMON_CD sc);
    Result common_delete(String type_value);

}
