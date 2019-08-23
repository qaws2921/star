package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMInFromDC;

import com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_IN_READY_GET.SP_SCM_IN_READY_GET;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;
import com.tobe.mes.tobesystem.Mapper.Scm.Materlals.SCMInFromDC_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SCMInFromDC_SERVICE {
    @Autowired
    private SCMInFromDC_Mapper scmInFromDC_mapper;

    public List<SP_SCM_IN_READY_GET> scmInFromDC_SP_SCM_IN_READY_GET(Page p) {
        return scmInFromDC_mapper.scmInFromDC_SP_SCM_IN_READY_GET(p);
    }

    public Result scmInFromDC_SP_SCM_IN_ADD(SP_SCM_IN_READY_GET ssirg) {
        ssirg.setWork_date(ssirg.getWork_date().replace("-",""));

        char a = (char) 5;
        char b = (char) 4;
        String list1[] = ssirg.getPart_code().split(",");
        String list2[] = ssirg.getOrder_qty_s().split(",");
        String list3[] = ssirg.getBad_qty_s().split(",");
        String list4[] = ssirg.getIn_qty_s().split(",");
        String code= "";
        for (int i = 0; i < list1.length; i++) {
            if (i == 0) {
                code += list1[i]+a+list2[i]+a+list3[i]+a+list4[i];
            } else {
                code += b + list1[i]+a+list2[i]+a+list3[i]+a+list4[i];
            }
        }

        ssirg.setPart_code(code);

        return scmInFromDC_mapper.scmInFromDC_SP_SCM_IN_ADD(ssirg);
    }
}
