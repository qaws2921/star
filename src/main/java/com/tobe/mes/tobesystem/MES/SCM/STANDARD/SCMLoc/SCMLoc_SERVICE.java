package com.tobe.mes.tobesystem.MES.SCM.STANDARD.SCMLoc;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_LOC_CD.SYS_LOC_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_LOC_CD.SYS_LOC_CDS;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;
import com.tobe.mes.tobesystem.Mapper.Scm.Standard.SCMLoc_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class SCMLoc_SERVICE {
    @Autowired
    private SCMLoc_Mapper scmLoc_mapper;

    public SYS_LOC_CDS scmLoc_get(Double page, Double rows, Page p, HttpServletRequest req) {
        if (page == null && rows == null) {
            return new SYS_LOC_CDS(null,0,0,0);
        }else {

            p.setPage_num((int)(page*1));
            p.setTotal_num(((int)(rows*1)));
            String site_code = (String) req.getSession().getAttribute("session_check");
            p.setSite_code(site_code);
            List<SYS_LOC_CD> sys_loc_cdList = scmLoc_mapper.scmLoc_get(p);
            int scmLoc_get_count = scmLoc_mapper.scmLoc_get_count(p);

            int total =(int) Math.ceil(scmLoc_get_count/(rows*1));


            return new SYS_LOC_CDS(sys_loc_cdList,total,(int)(page*1),scmLoc_get_count);
        }
    }

    public Result scmLoc_au(SYS_LOC_CD slc, HttpServletRequest req) {

        String site_code = (String) req.getSession().getAttribute("session_check");
        slc.setSite_code(site_code);
        return scmLoc_mapper.scmLoc_au(slc);
    }

    public Result scmLoc_delete(SYS_LOC_CD slc, HttpServletRequest req) {
        char a = (char)5;
        char b = (char)4;
        String code_value[] = slc.getLoc_code().split(",");
        String type_value="";
        for (int i = 0; i < code_value.length ; i++) {
            if (i == 0){
                type_value += slc.getCargo_code()+a+code_value[i];
            }else {
                type_value += b+slc.getCargo_code()+a+code_value[i];
            }
        }
        String site_code = (String) req.getSession().getAttribute("session_check");
        slc.setSite_code(site_code);
        slc.setCargo_code(type_value);
        return scmLoc_mapper.scmLoc_delete(slc);
    }
}
