package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMOut;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_OUT.SCM_OUT;
import com.tobe.mes.tobesystem.Bean.MESBean.SCM_OUT.SCM_OUTS;
import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_OUT_ORDER_GET.SP_SCM_OUT_ORDER_GET;
import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_OUT_ORDER_SUB_GET.SP_SCM_OUT_ORDER_SUB_GET;
import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_OUT_SUB_GET.SP_SCM_OUT_SUB_GET;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;
import com.tobe.mes.tobesystem.Mapper.Scm.Materlals.SCMOut_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SCMOut_SERVICE {
    @Autowired
    private SCMOut_Mapper scmOut_mapper;

    public SCM_OUTS scmOut_SP_SCM_OUT_GET(Double page, Double rows, Page p) {
        if (page == null && rows == null) {
            return new SCM_OUTS(null,0,0,0);
        }else {

            p.setPage_num((int)(page*1));
            p.setTotal_num(((int)(rows*1)));
            String start_date = p.getStart_date().replace("-","");
            String end_date = p.getEnd_date().replace("-","");

            p.setStart_date(start_date);
            p.setEnd_date(end_date);


            List<SCM_OUT> list = scmOut_mapper.scmOut_SP_SCM_OUT_GET(p);
            int count = scmOut_mapper.scmOut_SP_SCM_OUT_GET_count(p);

            int total =(int) Math.ceil(count/(rows*1));



            return new SCM_OUTS(list,total,(int)(page*1),count);
        }
    }

    public Result scmOut_SP_SCM_OUT_ADD(SCM_OUT so) {
        String work_date = so.getWork_date().replace("-","");
        so.setWork_date(work_date);


        char a = (char)5;
        char b = (char)4;
        String part_code[] = so.getKeyword().split(",");
        String in_qty[] = so.getKeyword2().split(",");

        String code_list="";

        for (int i = 0; i < part_code.length ; i++) {
            if (i == 0){
                code_list += part_code[i]+a+in_qty[i];
            }else {
                code_list += b+part_code[i]+a+in_qty[i];
            }
        }

        so.setKeyword(code_list);

        return scmOut_mapper.scmOut_SP_SCM_OUT_ADD(so);
    }

    public List<SP_SCM_OUT_SUB_GET> scmOut_SP_SCM_OUT_SUB_GET(SCM_OUT so) {
        return scmOut_mapper.scmOut_SP_SCM_OUT_SUB_GET(so);
    }

    public List<SP_SCM_OUT_ORDER_SUB_GET> scmOut_SP_SCM_OUT_ORDER_SUB_GET(SP_SCM_OUT_ORDER_GET ssoog) {
        return scmOut_mapper.scmOut_SP_SCM_OUT_ORDER_SUB_GET(ssoog);
    }


    public Result scmOut_SP_SCM_OUT_DEL(SCM_OUT so) {
        char a = (char)5;
        char b = (char)4;
        String code[] = so.getOut_no().split(",");
        String code_list="";

        for (int i = 0; i < code.length ; i++) {
            if (i == 0){
                code_list += code[i];
            }else {
                code_list += b+code[i];
            }
        }

        return scmOut_mapper.scmOut_SP_SCM_OUT_DEL(code_list);
    }
}
