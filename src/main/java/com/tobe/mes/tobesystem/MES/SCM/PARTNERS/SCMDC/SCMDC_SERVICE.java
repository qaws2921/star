package com.tobe.mes.tobesystem.MES.SCM.PARTNERS.SCMDC;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_DC.SCM_DC;
import com.tobe.mes.tobesystem.Bean.MESBean.SCM_DC.SCM_DCS;
import com.tobe.mes.tobesystem.Bean.MESBean.SCM_DC_BOX.SCM_DC_BOX;
import com.tobe.mes.tobesystem.Bean.MESBean.SCM_DC_BOX.SCM_DC_BOXS;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Mapper.Scm.Partners.SCMDC_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SCMDC_SERVICE {
    @Autowired
    private SCMDC_Mapper scmdc_mapper;

    public SCM_DCS scmDC_get(Double page, Double rows, Page p) {
        if (page == null && rows == null) {
            return new SCM_DCS(null,0,0,0);
        }else {

            p.setPage_num((int)(page*1));
            p.setTotal_num(((int)(rows*1)));
            String start_date = p.getStart_date().replace("-","");
            String end_date = p.getEnd_date().replace("-","");

            p.setStart_date(start_date);
            p.setEnd_date(end_date);


            List<SCM_DC> scm_dcList = scmdc_mapper.scmDC_get(p);
            int scmDC_get_count = scmdc_mapper.scmDC_get_count(p);

            int total =(int) Math.ceil(scmDC_get_count/(rows*1));


            return new SCM_DCS(scm_dcList,total,(int)(page*1),scmDC_get_count);
        }
    }

    public SCM_DC_BOXS scmDC_SP_SCM_DC_BOX_READY_GET_get(Double page, Double rows, Page p) {
        if (page == null && rows == null) {
            return new SCM_DC_BOXS(null,0,0,0);
        }else {

            p.setPage_num((int)(page*1));
            p.setTotal_num(((int)(rows*1)));
            String keyword = p.getKeyword().replace("-","");

            p.setKeyword(keyword);


            List<SCM_DC_BOX> scm_dc_boxList = scmdc_mapper.scmDC_SP_SCM_DC_BOX_READY_GET_get(p);
            int scmDC_SP_SCM_DC_BOX_READY_GET_get_count = scmdc_mapper.scmDC_SP_SCM_DC_BOX_READY_GET_get_count(p);

            int total =(int) Math.ceil(scmDC_SP_SCM_DC_BOX_READY_GET_get_count/(rows*1));


            return new SCM_DC_BOXS(scm_dc_boxList,total,(int)(page*1),scmDC_SP_SCM_DC_BOX_READY_GET_get_count);
        }
    }
}
