package com.tobe.mes.tobesystem.MES.ADMIN.USER.SYSUserSupp;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_USER_SUPP_CD.SYS_USER_SUPP_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_USER_SUPP_CD.SYS_USER_SUPP_CDS;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;
import com.tobe.mes.tobesystem.Mapper.Admin.User.SYSUserSupp_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SYSUserSupp_SERVICE {

    @Autowired
    private SYSUserSupp_Mapper sysUserSupp_mapper;

    public SYS_USER_SUPP_CDS user_supp_get(Double page, Double rows) {
        if (page == null && rows == null) {
            return new SYS_USER_SUPP_CDS(null,0,0,0);
        }else {
            Page p =new Page();
            p.setPage_num((int)(page*1));
            p.setTotal_num(((int)(rows*1)));

            List<SYS_USER_SUPP_CD> sys_user_supp_cdList = sysUserSupp_mapper.user_supp_get(p);
            int user_supp_get_count = sysUserSupp_mapper.user_supp_get_count(p);

            int total =(int) Math.ceil(user_supp_get_count/(rows*1));


            return new SYS_USER_SUPP_CDS(sys_user_supp_cdList,total,(int)(page*1),user_supp_get_count);
        }
    }

    public Result user_supp_cd_au(SYS_USER_SUPP_CD susc) {
        return sysUserSupp_mapper.user_supp_cd_au(susc);
    }

    public Result user_supp_cd_delete(SYS_USER_SUPP_CD susc) {
        char a = (char) 5;
        char b = (char) 4;
        String user_supp_cd_code[] = susc.getUser_code().split(",");
        String code= "";
        for (int i = 0; i < user_supp_cd_code.length; i++) {
            if (i == 0) {
                code += user_supp_cd_code[i];
            } else {
                code += b + user_supp_cd_code[i];
            }
        }
        return sysUserSupp_mapper.user_supp_cd_delete(code);
    }
}
