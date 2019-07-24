package com.tobe.mes.tobesystem.ADMIN.AUTH.SYSAuth;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_AUTH_CD.SYS_AUTH_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_AUTH_CD.SYS_AUTH_CDS;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;
import com.tobe.mes.tobesystem.Mapper.Admin.Auth.SYSAuth_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SYSAuth_SERVICE {

    @Autowired
    private SYSAuth_Mapper sys_auth_cd_mapper;

    public SYS_AUTH_CDS auth_cd_get(Double page, Double rows) {

        if (page == null && rows == null) {
            return new SYS_AUTH_CDS(null,0,0,0);
        }else {
            Page p =new Page();
            p.setPage_num((int)(page*1));
            p.setTotal_num(((int)(rows*1)));

            List<SYS_AUTH_CD> sys_board_cdList = sys_auth_cd_mapper.auth_cd_get(p);
            int sys_auth_cd_count = sys_auth_cd_mapper.auth_cd_count(p);

            int total =(int) Math.ceil(sys_auth_cd_count/(rows*1));


            return new SYS_AUTH_CDS(sys_board_cdList,total,(int)(page*1),sys_auth_cd_count);
        }
    }

    public Result auth_cd_au(SYS_AUTH_CD sac) {
        return sys_auth_cd_mapper.auth_cd_au(sac);
    }

    public Result auth_cd_delete(SYS_AUTH_CD sac) {
        char a = (char) 5;
        char b = (char) 4;
        String sac_code[] = sac.getAuth_code().split(",");
        String code= "";
        for (int i = 0; i < sac_code.length; i++) {
            if (i == 0) {
                code += sac_code[i];
            } else {
                code += b + sac_code[i];
            }
        }
        return sys_auth_cd_mapper.auth_cd_delete(code);

    }
}
