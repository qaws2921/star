package com.tobe.mes.tobesystem.Public;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_BPART_CD.SYS_BPART_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_BPART_CD.SYS_BPART_CDS;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_CARGO_CD.SYS_CARGO_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_COMMON_CD.SYS_COMMON_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_LOC_CD.SYS_LOC_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_PART_GROUP.SYS_PART_GROUP;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_SUPP_CD.SYS_SUPP_CD;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Mapper.Admin.Master.SYSCommon_Mapper;
import com.tobe.mes.tobesystem.Mapper.Admin.Master.SYSPartGroup_Mapper;
import com.tobe.mes.tobesystem.Mapper.Scm.Standard.SCMCargo_Mapper;
import com.tobe.mes.tobesystem.Mapper.Scm.Standard.SCMLoc_Mapper;
import com.tobe.mes.tobesystem.Mapper.Scm.Standard.SCMPart_Mapper;
import com.tobe.mes.tobesystem.Mapper.Scm.Standard.SCMSupp_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class COMMON_SERVICE {
    @Autowired
    private SYSPartGroup_Mapper sysPartGroup_mapper;

    @Autowired
    private SYSCommon_Mapper sysCommon_mapper;

    @Autowired
    private SCMCargo_Mapper scmCargo_mapper;

    @Autowired
    private SCMLoc_Mapper scmLoc_mapper;

    @Autowired
    private SCMSupp_Mapper scmSupp_mapper;

    @Autowired
    private SCMPart_Mapper scmPart_mapper;


    public List<SYS_PART_GROUP> part_group_get(HttpServletRequest req) {
        Page p = new Page();
        p.setPage_num(0);
        p.setTotal_num(0);
        String site_code = (String) req.getSession().getAttribute("session_check");
        p.setSite_code(site_code);
        return sysPartGroup_mapper.part_group_get(p);
    }

    public List<SYS_COMMON_CD> common_get(Page p){
        p.setPage_num(0);
        p.setTotal_num(0);
        return sysCommon_mapper.common_get(p);
    }

    public List<SYS_CARGO_CD> cargo_cd_get(HttpServletRequest req) {
        Page p = new Page();
        p.setPage_num(0);
        p.setTotal_num(0);
        p.setKeyword("");
        String site_code = (String) req.getSession().getAttribute("session_check");
        p.setSite_code(site_code);
        return scmCargo_mapper.cargo_cd_get(p);
    }

    public List<SYS_LOC_CD> loc_cd_get(Page p,HttpServletRequest req) {

        p.setPage_num(0);
        p.setTotal_num(0);
        String site_code = (String) req.getSession().getAttribute("session_check");
        p.setSite_code(site_code);
        return scmLoc_mapper.scmLoc_get(p);
    }

    public List<SYS_SUPP_CD> supp_get(Page p,HttpServletRequest req) {
        p.setPage_num(0);
        p.setTotal_num(0);
        String site_code = (String) req.getSession().getAttribute("session_check");
        p.setSite_code(site_code);
        return scmSupp_mapper.supp_cd_get_modal(p);
    }

    public SYS_BPART_CDS bPart_get(Double page, Double rows, Page p,HttpServletRequest req) {
        if (page == null && rows == null) {
            return new SYS_BPART_CDS(null,0,0,0);
        }else {
            p.setPage_num((int)(page*1));
            p.setTotal_num(((int)(rows*1)));
            String site_code = (String) req.getSession().getAttribute("session_check");
            p.setSite_code(site_code);
            List<SYS_BPART_CD> sys_bpart_cdList = scmPart_mapper.bPart_supp_get(p);
            int bPart_get_count = scmPart_mapper.bPart_get_supp_count(p);

            int total =(int) Math.ceil(bPart_get_count/(rows*1));


            return new SYS_BPART_CDS(sys_bpart_cdList,total,(int)(page*1),bPart_get_count);
        }
    }


    public List<SYS_CARGO_CD> common_SP_SYS_CARGO_GET(HttpServletRequest req) {
        Page p = new Page();
        p.setPage_num(0);
        p.setTotal_num(0);
        p.setKeyword("M");
        String site_code = (String) req.getSession().getAttribute("session_check");
        p.setSite_code(site_code);
        return scmCargo_mapper.cargo_cd_get(p);
    }
}
