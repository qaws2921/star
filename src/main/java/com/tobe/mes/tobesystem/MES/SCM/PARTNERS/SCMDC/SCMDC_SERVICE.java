package com.tobe.mes.tobesystem.MES.SCM.PARTNERS.SCMDC;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_DC.SCM_DC;
import com.tobe.mes.tobesystem.Bean.MESBean.SCM_DC.SCM_DCS;
import com.tobe.mes.tobesystem.Bean.MESBean.SCM_DC_BOX.SCM_DC_BOX;
import com.tobe.mes.tobesystem.Bean.MESBean.SCM_DC_BOX.SCM_DC_BOXS;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;
import com.tobe.mes.tobesystem.Mapper.Scm.Partners.SCMDC_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
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

    public Result scmDC_SP_SCM_DC_ADD_au(Page p) {

        String date = p.getKeyword().replace("-","");

        p.setKeyword(date);

        char a = (char) 5;
        char b = (char) 4;
        String box_no[] = p.getKeyword5().split(",");
        String code= "";
        for (int i = 0; i < box_no.length; i++) {
            if (i == 0) {
                code += box_no[i];
            } else {
                code += b + box_no[i];
            }
        }

        p.setKeyword5(code);

        return scmdc_mapper.scmDC_SP_SCM_DC_ADD_au(p);



    }

    public List<SCM_DC_BOX> scmDC_SP_SCM_DC_BOX_GET_get(SCM_DC sd) {
        return scmdc_mapper.scmDC_SP_SCM_DC_BOX_GET_get(sd);

    }

    public Result scmDC_SP_SCM_DC_DEL(SCM_DC sd) {
        char a = (char) 5;
        char b = (char) 4;
        String list[] = sd.getDc_no().split(",");
        String code= "";
        for (int i = 0; i < list.length; i++) {
            if (i == 0) {
                code += list[i];
            } else {
                code += b + list[i];
            }
        }

        return scmdc_mapper.scmDC_SP_SCM_DC_DEL(code);
    }

    public Result scmDC_SP_SP_SCM_DC_BOX_DEL(SCM_DC_BOX sdb) {
        char a = (char) 5;
        char b = (char) 4;
        String list[] = sdb.getBox_no().split(",");
        String code= "";
        for (int i = 0; i < list.length; i++) {
            if (i == 0) {
                code += list[i];
            } else {
                code += b + list[i];
            }
        }

        return scmdc_mapper.scmDC_SP_SP_SCM_DC_BOX_DEL(code);
    }

    public ModelAndView scmDC_print(SCM_DC sd, ModelAndView mav) {
        List<SCM_DC_BOX> list = scmdc_mapper.scmDC_SP_SCM_DC_BOX_GET_get(sd);



        ArrayList<List<SCM_DC_BOX>> list3 = new ArrayList<>();
        ArrayList<SCM_DC_BOX> list4 = new ArrayList<>();
        int num = 1;
       int num2 = 1;

        for (SCM_DC_BOX sdb : list){
          list4.add(sdb);
            if (num == 10 || num2 == list.size()){
                num = 0;
                list3.add(list4);
               list4 = new ArrayList<>();
            }

            num++;
            num2++;

        }


        mav.addObject("scm_dc",sd);
        mav.addObject("list",list3);
        mav.setViewName("scm/partners/print/delivered");
        return mav;
    }
}
