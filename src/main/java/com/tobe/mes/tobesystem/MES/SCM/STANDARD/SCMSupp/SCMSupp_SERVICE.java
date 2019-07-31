package com.tobe.mes.tobesystem.MES.SCM.STANDARD.SCMSupp;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_SUPP_CD.SYS_SUPP_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_SUPP_CD.SYS_SUPP_CDS;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;
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

    public Result supp_cd_au(SYS_SUPP_CD ssc) {

        return scmSupp_mapper.supp_cd_au(ssc);
    }

    public Result supp_cd_delete(SYS_SUPP_CD ssc) {
        char a = (char) 5;
        char b = (char) 4;
        String supp_code[] = ssc.getSupp_code().split(",");
        String code= "";
        for (int i = 0; i < supp_code.length; i++) {
            if (i == 0) {
                code += supp_code[i];
            } else {
                code += b + supp_code[i];
            }
        }
        return scmSupp_mapper.supp_cd_delete(code);
    }
}
