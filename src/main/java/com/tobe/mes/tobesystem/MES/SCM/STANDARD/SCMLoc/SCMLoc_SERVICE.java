package com.tobe.mes.tobesystem.MES.SCM.STANDARD.SCMLoc;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_LOC_CD.SYS_LOC_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_LOC_CD.SYS_LOC_CDS;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Mapper.Scm.Standard.SCMLoc_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SCMLoc_SERVICE {
    @Autowired
    private SCMLoc_Mapper scmLoc_mapper;

    public SYS_LOC_CDS scmLoc_get(Double page, Double rows, Page p) {
        if (page == null && rows == null) {
            return new SYS_LOC_CDS(null,0,0,0);
        }else {

            p.setPage_num((int)(page*1));
            p.setTotal_num(((int)(rows*1)));

            List<SYS_LOC_CD> sys_loc_cdList = scmLoc_mapper.scmLoc_get(p);
            int scmLoc_get_count = scmLoc_mapper.scmLoc_get_count(p);

            int total =(int) Math.ceil(scmLoc_get_count/(rows*1));


            return new SYS_LOC_CDS(sys_loc_cdList,total,(int)(page*1),scmLoc_get_count);
        }
    }
}
