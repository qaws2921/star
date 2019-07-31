package com.tobe.mes.tobesystem.MES.SCM.STANDARD.SCMSupp;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_SUPP_CD.SYS_SUPP_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_SUPP_CD.SYS_SUPP_CDS;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Mapper.Scm.Standard.SCMSupp_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SCMSupp_SERVICE {
    @Autowired
    private SCMSupp_Mapper scmSupp_mapper;

    public SYS_SUPP_CDS supp_cd_get(Double page, Double rows, String corp_type) {

        if (page == null && rows == null) {
            return new SYS_SUPP_CDS(null,0,0,0);
        }else {
            Page p =new Page();
            p.setPage_num((int)(page*1));
            p.setTotal_num(((int)(rows*1)));
            p.setKeyword(corp_type);
            List<SYS_SUPP_CD> sys_supp_cdList = scmSupp_mapper.supp_cd_get(p);
            int supp_cd_get_count = scmSupp_mapper.supp_cd_get_count(p);

            int total =(int) Math.ceil(supp_cd_get_count/(rows*1));


            return new SYS_SUPP_CDS(sys_supp_cdList,total,(int)(page*1),supp_cd_get_count);
        }
    }
}
