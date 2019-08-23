package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMln;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_IN.SCM_IN;
import com.tobe.mes.tobesystem.Bean.MESBean.SCM_IN.SCM_INS;
import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_IN_SUB_GET.SP_SCM_IN_SUB_GET;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;
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

    public List<SP_SCM_IN_SUB_GET> scmln_SP_SCM_IN_SUB_GET(SCM_IN si) {

        return scMln_mapper.scmln_SP_SCM_IN_SUB_GET(si);
    }

    public Result scmln_SP_SCM_IN_ADD(SCM_IN si) {

        String work_date = si.getWork_date().replace("-","");
        si.setWork_date(work_date);


        char a = (char)5;
        char b = (char)4;
        String part_code[] = si.getKeyword2().split(",");
        String in_qty[] = si.getKeyword3().split(",");
        String code_list="";
        for (int i = 0; i < part_code.length ; i++) {
            if (i == 0){
                code_list += part_code[i]+a+0+a+0+a+in_qty[i];
            }else {
                code_list += b+part_code[i]+a+0+a+0+a+in_qty[i];
            }
        }
        si.setKeyword2(code_list);

        return scMln_mapper.scmln_SP_SCM_IN_ADD(si);
    }

    public Result scmln_SP_SCM_IN_DEL(SCM_IN si) {

        char a = (char)5;
        char b = (char)4;
        String in_no[] = si.getIn_no().split(",");
        String code_list="";
        for (int i = 0; i < in_no.length ; i++) {
            if (i == 0){
                code_list += in_no[i];
            }else {
                code_list += b+in_no[i];
            }
        }
        si.setIn_no(code_list);

        return scMln_mapper.scmln_SP_SCM_IN_DEL(si);
    }
}
