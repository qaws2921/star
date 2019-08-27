package com.tobe.mes.tobesystem.Mapper.Admin.Auth;


import com.tobe.mes.tobesystem.Bean.MESBean.SYS_AUTH_CD.SYS_AUTH_CD;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;

import java.util.List;

public interface SYSAuth_Mapper {
    List<SYS_AUTH_CD> auth_cd_get(Page p);
    int auth_cd_count(Page p);
    Result auth_cd_au(SYS_AUTH_CD sac);
    Result auth_cd_delete(SYS_AUTH_CD sac);
}
