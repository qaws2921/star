package com.tobe.mes.tobesystem.MES.SCM.STANDARD.SCMPart;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_BPART_CD.SYS_BPART_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_BPART_CD.SYS_BPART_CDS;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Mapper.Scm.Standard.SCMPart_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SCMPart_SERVICE {
    @Autowired
    private SCMPart_Mapper scmPart_mapper;

    public SYS_BPART_CDS bPart_get(Double page, Double rows, Page p) {
        if (page == null && rows == null) {
            return new SYS_BPART_CDS(null,0,0,0);
        }else {
            p.setPage_num((int)(page*1));
            p.setTotal_num(((int)(rows*1)));
            List<SYS_BPART_CD> sys_bpart_cdList = scmPart_mapper.bPart_get(p);
            int bPart_get_count = scmPart_mapper.bPart_get_count(p);

            int total =(int) Math.ceil(bPart_get_count/(rows*1));


            return new SYS_BPART_CDS(sys_bpart_cdList,total,(int)(page*1),bPart_get_count);
        }
    }
}
