package com.tobe.mes.tobesystem.Mapper.Admin.Auth;


import com.tobe.mes.tobesystem.Bean.MESBean.SYS_MENU_CD.SYS_MENU_CD;
import com.tobe.mes.tobesystem.Bean.Result;

import java.util.List;

public interface SYSAuthProgram_Mapper {
    List<SYS_MENU_CD> menu_group_get();
    List<SYS_MENU_CD> menu_cd_program_get(SYS_MENU_CD smc);

    Result auth_program_add(SYS_MENU_CD smc);
}
