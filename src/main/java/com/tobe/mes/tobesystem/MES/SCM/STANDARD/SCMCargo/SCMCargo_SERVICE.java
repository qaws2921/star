package com.tobe.mes.tobesystem.MES.SCM.STANDARD.SCMCargo;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_CARGO_CD.SYS_CARGO_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_CARGO_CD.SYS_CARGO_CDS;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_COMMON_CD.SYS_COMMON_CD;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;
import com.tobe.mes.tobesystem.Mapper.Scm.Standard.SCMCargo_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class SCMCargo_SERVICE {
    @Autowired
    private SCMCargo_Mapper scmCargo_mapper;


    public List<SYS_COMMON_CD> common_cargo_type_get() {
        return scmCargo_mapper.common_cargo_type_get();
    }

    public SYS_CARGO_CDS cargo_cd_get(Double page, Double rows, String cargo_grp_code, HttpServletRequest req) {
        if (page == null && rows == null) {
            return new SYS_CARGO_CDS(null,0,0,0);
        }else {
            Page p =new Page();
            p.setPage_num((int)(page*1));
            p.setTotal_num(((int)(rows*1)));
            p.setKeyword(cargo_grp_code);
            String site_code = (String) req.getSession().getAttribute("session_check");
            p.setSite_code(site_code);

            List<SYS_CARGO_CD> sys_cargo_cdList = scmCargo_mapper.cargo_cd_get(p);
            int cargo_cd_get_count = scmCargo_mapper.cargo_cd_get_count(p);

            int total =(int) Math.ceil(cargo_cd_get_count/(rows*1));


            return new SYS_CARGO_CDS(sys_cargo_cdList,total,(int)(page*1),cargo_cd_get_count);
        }
    }

    public Result cargo_cd_au(SYS_CARGO_CD scc, HttpServletRequest req) {

        String site_code = (String) req.getSession().getAttribute("session_check");
        scc.setSite_code(site_code);
        return scmCargo_mapper.cargo_cd_au(scc);
    }

    public Result cargo_cd_delete(SYS_CARGO_CD scc, HttpServletRequest req) {
        char a = (char) 5;
        char b = (char) 4;
        String cargo_cd_code[] = scc.getCargo_code().split(",");
        String code= "";
        for (int i = 0; i < cargo_cd_code.length; i++) {
            if (i == 0) {
                code += cargo_cd_code[i];
            } else {
                code += b + cargo_cd_code[i];
            }
        }
        String site_code = (String) req.getSession().getAttribute("session_check");
        scc.setSite_code(site_code);
        scc.setCargo_code(code);
        return scmCargo_mapper.cargo_cd_delete(scc);
    }
}
