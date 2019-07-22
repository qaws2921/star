package com.tobe.mes.tobesystem.Mapper.Admin.Auth;


import com.tobe.mes.tobesystem.ADMIN.AUTH.SYS_AUTH_CD.SYS_AUTH_CD;
import com.tobe.mes.tobesystem.Bean.Page;

import java.util.List;

public interface SYS_AUTH_CD_Mapper {
    List<SYS_AUTH_CD> auth_cd_get(Page p);
    int auth_cd_count(Page p);
    int auth_cd_au(SYS_AUTH_CD sac);
    int auth_cd_delete(String code);
}
