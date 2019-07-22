package com.tobe.mes.tobesystem.Mapper.Admin.Auth;


import com.tobe.mes.tobesystem.ADMIN.AUTH.SYS_MENU_CD.SYS_MENU_CD;

import java.util.List;

public interface SYS_MENU_CD_Mapper {
    List<SYS_MENU_CD> menu_group_get();
    List<SYS_MENU_CD> menu_cd_program_get(SYS_MENU_CD smc);

    int auth_program_add(SYS_MENU_CD smc);
}
