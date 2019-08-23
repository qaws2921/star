package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMOutOrder;

import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_OUT_ORDER_GET.SP_SCM_OUT_ORDER_GET;
import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_OUT_ORDER_GET.SP_SCM_OUT_ORDER_GETS;
import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_OUT_ORDER_SUB_GET.SP_SCM_OUT_ORDER_SUB_GET;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;
import com.tobe.mes.tobesystem.Mapper.Scm.Materlals.SCMOutOrder_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SCMOutOrder_SERVICE {
    @Autowired
    private SCMOutOrder_Mapper scmOutOrder_mapper;

    public SP_SCM_OUT_ORDER_GETS scmOutOrder_SP_SCM_OUT_ORDER_GET(Double page, Double rows, Page p) {
        if (page == null && rows == null) {
            return new SP_SCM_OUT_ORDER_GETS(null,0,0,0);
        }else {

            p.setPage_num((int)(page*1));
            p.setTotal_num(((int)(rows*1)));
            String start_date = p.getStart_date().replace("-","");
            String end_date = p.getEnd_date().replace("-","");

            p.setStart_date(start_date);
            p.setEnd_date(end_date);


            List<SP_SCM_OUT_ORDER_GET> List = scmOutOrder_mapper.scmOutOrder_SP_SCM_OUT_ORDER_GET(p);
            int count = scmOutOrder_mapper.scmOutOrder_SP_SCM_OUT_ORDER_GET_count(p);

            int total =(int) Math.ceil(count/(rows*1));


            return new SP_SCM_OUT_ORDER_GETS(List,total,(int)(page*1),count);
        }
    }

    public Result scmOutOrder_SP_SCM_OUT_ORDER_ADD(SP_SCM_OUT_ORDER_GET ssoog) {
        ssoog.setWork_date(ssoog.getWork_date().replace("-",""));

        char a = (char) 5;
        char b = (char) 4;
        String list1[] = ssoog.getKeyword().split(",");
        String list2[] = ssoog.getKeyword2().split(",");

        String code= "";
        for (int i = 0; i < list1.length; i++) {
            if (i == 0) {
                code += list1[i]+a+list2[i];
            } else {
                code += b + list1[i]+a+list2[i];
            }
        }

        ssoog.setKeyword(code);

        return scmOutOrder_mapper.scmOutOrder_SP_SCM_OUT_ORDER_ADD(ssoog);


    }

    public List<SP_SCM_OUT_ORDER_SUB_GET> scmOutOrder_SP_SCM_OUT_ORDER_SUB_GET(SP_SCM_OUT_ORDER_SUB_GET ssoosg) {
        return  scmOutOrder_mapper.scmOutOrder_SP_SCM_OUT_ORDER_SUB_GET(ssoosg);
    }

    public Result scmOutOrder_SP_SCM_OUT_ORDER_DEL(SP_SCM_OUT_ORDER_GET ssoog) {
        char a = (char) 5;
        char b = (char) 4;
        String list1[] = ssoog.getRq_no().split(",");

        String code= "";
        for (int i = 0; i < list1.length; i++) {
            if (i == 0) {
                code += list1[i];
            } else {
                code += b + list1[i];
            }
        }

        ssoog.setRq_no(code);

        return scmOutOrder_mapper.scmOutOrder_SP_SCM_OUT_ORDER_DEL(ssoog);
    }
}
