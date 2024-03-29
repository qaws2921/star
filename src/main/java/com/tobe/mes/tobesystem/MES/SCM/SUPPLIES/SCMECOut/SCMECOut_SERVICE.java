package com.tobe.mes.tobesystem.MES.SCM.SUPPLIES.SCMECOut;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_EC.SCM_EC;
import com.tobe.mes.tobesystem.Bean.MESBean.SCM_EC.SCM_ECS;
import com.tobe.mes.tobesystem.Bean.MESBean.SCM_EC_SUB.SCM_EC_SUB;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;
import com.tobe.mes.tobesystem.Mapper.Scm.Supplies.SCMECOut_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class SCMECOut_SERVICE {
    @Autowired
    private SCMECOut_Mapper scmecOut_mapper;

    public SCM_ECS scmECOut_sp_scm_ec_out_get(Double page, Double rows, Page p, HttpServletRequest req) {
        if (page == null && rows == null) {
            return new SCM_ECS(null,0,0,0);
        }else {

            p.setPage_num((int)(page*1));
            p.setTotal_num(((int)(rows*1)));
            String start_date = p.getStart_date().replace("-","");
            String end_date = p.getEnd_date().replace("-","");

            p.setStart_date(start_date);
            p.setEnd_date(end_date);

            String site_code = (String) req.getSession().getAttribute("session_check");
            p.setSite_code(site_code);
            List<SCM_EC> list = scmecOut_mapper.scmECOut_sp_scm_ec_out_get(p);
            int count = scmecOut_mapper.scmECOut_sp_scm_ec_out_getT_count(p);

            int total =(int) Math.ceil(count/(rows*1));



            return new SCM_ECS(list,total,(int)(page*1),count);
        }
    }

    public Result scmECOut_sp_scm_ec_out_add(SCM_EC se, HttpServletRequest req) {
        String work_date = se.getWork_date().replace("-","");
        se.setWork_date(work_date);


        char a = (char)5;
        char b = (char)4;
        String part_code[] = se.getKeyword().split(",");
        String in_qty[] = se.getKeyword2().split(",");
        String code_list="";
        for (int i = 0; i < part_code.length ; i++) {
            if (i == 0){
                code_list += part_code[i]+a+in_qty[i];
            }else {
                code_list += b+part_code[i]+a+in_qty[i];
            }
        }
        String site_code = (String) req.getSession().getAttribute("session_check");
        se.setSite_code(site_code);
        se.setKeyword(code_list);

        return scmecOut_mapper.scmECOut_sp_scm_ec_out_add(se);
    }

    public List<SCM_EC_SUB> scmECOut_sp_scm_ec_out_sub_get(SCM_EC se, HttpServletRequest req) {
        String site_code = (String) req.getSession().getAttribute("session_check");
        se.setSite_code(site_code);
        return scmecOut_mapper.scmECOut_sp_scm_ec_out_sub_get(se);
    }

    public Result scmECOut_sp_scm_ec_out_del(SCM_EC se, HttpServletRequest req) {
        char a = (char)5;
        char b = (char)4;
        String no[] = se.getEc_no().split(",");
        String code_list="";
        for (int i = 0; i < no.length ; i++) {
            if (i == 0){
                code_list += no[i];
            }else {
                code_list += b+no[i];
            }
        }
        String site_code = (String) req.getSession().getAttribute("session_check");
        se.setSite_code(site_code);
        se.setEc_no(code_list);

        return scmecOut_mapper.scmECOut_sp_scm_ec_out_del(se);
    }
}
