package com.tobe.mes.tobesystem.MES.ADMIN.AUTH.SYSAuthProgram;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_MENU_CD.SYS_MENU_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_MENU_CD.SYS_MENU_CDS;
import com.tobe.mes.tobesystem.Bean.Result;
import com.tobe.mes.tobesystem.Mapper.Admin.Auth.SYSAuthProgram_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class SYSAuthProgram_SERVICE {

    @Autowired
    private SYSAuthProgram_Mapper sys_menu_cd_mapper;

    public List<SYS_MENU_CD> menu_group_get(SYS_MENU_CD smc, HttpServletRequest req) {
        String site_code = (String) req.getSession().getAttribute("session_check");
        smc.setSite_code(site_code);
        return sys_menu_cd_mapper.menu_group_get(smc);
    }

    public SYS_MENU_CDS menu_cd_program_get(SYS_MENU_CD smc, HttpServletRequest req) {
        String site_code = (String) req.getSession().getAttribute("session_check");
        smc.setSite_code(site_code);
        List<SYS_MENU_CD> sys_menu_cdList = sys_menu_cd_mapper.menu_cd_program_get(smc);
        return new SYS_MENU_CDS(sys_menu_cdList,0,0,0);
    }

    public Result auth_program_add(SYS_MENU_CD smc, HttpServletRequest req) {
        String site_code = (String) req.getSession().getAttribute("session_check");
        smc.setSite_code(site_code);
        return sys_menu_cd_mapper.auth_program_add(smc);
    }
}
