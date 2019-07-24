package com.tobe.mes.tobesystem.Mapper.Admin.User;


import com.tobe.mes.tobesystem.Bean.MESBean.SYS_USER_SUPP_CD.SYS_USER_SUPP_CD;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;

import java.util.List;

public interface SYSUserSupp_Mapper {


    List<SYS_USER_SUPP_CD> user_supp_get(Page p);
    int user_supp_get_count(Page p);

    Result user_supp_cd_au(SYS_USER_SUPP_CD susc);

    Result user_supp_cd_delete(String code);
}
