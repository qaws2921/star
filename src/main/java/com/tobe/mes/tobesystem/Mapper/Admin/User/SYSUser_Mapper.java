package com.tobe.mes.tobesystem.Mapper.Admin.User;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_COMMON_CD.SYS_COMMON_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_USER_CD.SYS_USER_CD;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;

import java.util.List;

public interface SYSUser_Mapper {
    List<SYS_COMMON_CD> common_dept_get();
    List<SYS_COMMON_CD> common_duty_get();
    List<SYS_USER_CD> user_get(Page p);
    int user_get_count(Page p);
    Result user_cd_au(SYS_USER_CD suc);

    Result user_cd_delete(String code);
}
