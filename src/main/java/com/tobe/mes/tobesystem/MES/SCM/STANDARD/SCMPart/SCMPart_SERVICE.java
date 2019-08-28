package com.tobe.mes.tobesystem.MES.SCM.STANDARD.SCMPart;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_BPART_CD.SYS_BPART_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_BPART_CD.SYS_BPART_CDS;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;
import com.tobe.mes.tobesystem.Mapper.Scm.Standard.SCMPart_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class SCMPart_SERVICE {
    @Autowired
    private SCMPart_Mapper scmPart_mapper;

    public SYS_BPART_CDS bPart_get(Double page, Double rows, Page p, HttpServletRequest req) {
        if (page == null && rows == null) {
            return new SYS_BPART_CDS(null,0,0,0);
        }else {
            p.setPage_num((int)(page*1));
            p.setTotal_num(((int)(rows*1)));
            String site_code = (String) req.getSession().getAttribute("session_check");
            p.setSite_code(site_code);

            List<SYS_BPART_CD> sys_bpart_cdList = scmPart_mapper.bPart_get(p);
            int bPart_get_count = scmPart_mapper.bPart_get_count(p);

            int total =(int) Math.ceil(bPart_get_count/(rows*1));


            return new SYS_BPART_CDS(sys_bpart_cdList,total,(int)(page*1),bPart_get_count);
        }
    }

    public Result scmPart_au(SYS_BPART_CD sbc, HttpServletRequest req) {
        String site_code = (String) req.getSession().getAttribute("session_check");
        sbc.setSite_code(site_code);
        return scmPart_mapper.scmPart_au(sbc);
    }

    public Result scmPart_delete(SYS_BPART_CD sbc, HttpServletRequest req) {
        char a = (char) 5;
        char b = (char) 4;
        String part_code[] = sbc.getPart_code().split(",");
        String code= "";
        for (int i = 0; i < part_code.length; i++) {
            if (i == 0) {
                code += part_code[i];
            } else {
                code += b + part_code[i];
            }
        }
        String site_code = (String) req.getSession().getAttribute("session_check");
        sbc.setSite_code(site_code);
        sbc.setPart_code(code);
        return scmPart_mapper.scmPart_delete(sbc);
    }
}
