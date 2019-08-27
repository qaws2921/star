package com.tobe.mes.tobesystem.MES.ADMIN.USER.SYSUser;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_COMMON_CD.SYS_COMMON_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_USER_CD.SYS_USER_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_USER_CD.SYS_USER_CDS;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;
import com.tobe.mes.tobesystem.Mapper.Admin.User.SYSUser_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class SYSUser_SERVICE {

    @Autowired
    private SYSUser_Mapper sysUser_mapper;

    public List<SYS_COMMON_CD> common_dept_get() {
        return sysUser_mapper.common_dept_get();
    }

    public List<SYS_COMMON_CD> common_duty_get() {
        return sysUser_mapper.common_duty_get();
    }

    public SYS_USER_CDS user_get(Double page, Double rows, String dept_code, HttpServletRequest req) {
        if (page == null && rows == null) {
            return new SYS_USER_CDS(null,0,0,0);
        }else {
            Page p =new Page();
            p.setPage_num((int)(page*1));
            p.setTotal_num(((int)(rows*1)));
            p.setKeyword(dept_code);
            String site_code = (String) req.getSession().getAttribute("session_check");
            p.setSite_code(site_code);

            List<SYS_USER_CD> sys_user_cdList = sysUser_mapper.user_get(p);
            int user_get_count = sysUser_mapper.user_get_count(p);

            int total =(int) Math.ceil(user_get_count/(rows*1));


            return new SYS_USER_CDS(sys_user_cdList,total,(int)(page*1),user_get_count);
        }
    }

    public Result user_cd_au(SYS_USER_CD suc, HttpServletRequest req) {
        String site_code = (String) req.getSession().getAttribute("session_check");
        suc.setSite_code(site_code);
        return sysUser_mapper.user_cd_au(suc);
    }

    public Result user_cd_delete(SYS_USER_CD suc, HttpServletRequest req) {
        char a = (char) 5;
        char b = (char) 4;
        String user_cd_code[] = suc.getUser_code().split(",");
        String code= "";
        for (int i = 0; i < user_cd_code.length; i++) {
            if (i == 0) {
                code += user_cd_code[i];
            } else {
                code += b + user_cd_code[i];
            }
        }
        String site_code = (String) req.getSession().getAttribute("session_check");
        suc.setSite_code(site_code);
        suc.setUser_code(code);

        return sysUser_mapper.user_cd_delete(suc);
    }
}
