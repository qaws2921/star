package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMln;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_IN.SCM_IN;
import com.tobe.mes.tobesystem.Bean.MESBean.SCM_IN.SCM_INS;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Mapper.Scm.Materlals.SCMln_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SCMln_SERVICE {

    @Autowired
    private SCMln_Mapper scMln_mapper;

    public SCM_INS scmln_SP_SCM_IN_GET(Double page, Double rows, Page p) {
        if (page == null && rows == null) {
            return new SCM_INS(null,0,0,0);
        }else {

            p.setPage_num((int)(page*1));
            p.setTotal_num(((int)(rows*1)));
            String start_date = p.getStart_date().replace("-","");
            String end_date = p.getEnd_date().replace("-","");

            p.setStart_date(start_date);
            p.setEnd_date(end_date);


            List<SCM_IN> scm_inList = scMln_mapper.scmln_SP_SCM_IN_GET(p);
            int scmln_SP_SCM_IN_GET_count = scMln_mapper.scmln_SP_SCM_IN_GET_count(p);

            int total =(int) Math.ceil(scmln_SP_SCM_IN_GET_count/(rows*1));


            return new SCM_INS(scm_inList,total,(int)(page*1),scmln_SP_SCM_IN_GET_count);
        }
    }
}
