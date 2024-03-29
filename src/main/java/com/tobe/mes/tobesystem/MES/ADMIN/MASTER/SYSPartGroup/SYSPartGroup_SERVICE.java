package com.tobe.mes.tobesystem.MES.ADMIN.MASTER.SYSPartGroup;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_PART_GROUP.SYS_PART_GROUP;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_PART_GROUP.SYS_PART_GROUPS;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;
import com.tobe.mes.tobesystem.Mapper.Admin.Master.SYSPartGroup_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;


@Service
public class SYSPartGroup_SERVICE {

    @Autowired
    private SYSPartGroup_Mapper sys_part_group_mapper;

    public SYS_PART_GROUPS part_group_get(Double page, Double rows, HttpServletRequest req) {
        if (page == null && rows == null) {
            return new SYS_PART_GROUPS(null,0,0,0);
        }else {
            Page p =new Page();
            p.setPage_num((int)(page*1));
            p.setTotal_num(((int)(rows*1)));
            String site_code = (String) req.getSession().getAttribute("session_check");
            p.setSite_code(site_code);
            List<SYS_PART_GROUP> sys_part_groupList = sys_part_group_mapper.part_group_get(p);
            int sys_part_group_count = sys_part_group_mapper.part_group_count(p);

            int total =(int) Math.ceil(sys_part_group_count/(rows*1));


            return new SYS_PART_GROUPS(sys_part_groupList,total,(int)(page*1),sys_part_group_count);
        }
    }

    public Result part_group_au(SYS_PART_GROUP spg, HttpServletRequest req) {
        String site_code = (String) req.getSession().getAttribute("session_check");
        spg.setSite_code(site_code);
        return  sys_part_group_mapper.part_group_au(spg);
    }

    public Result part_group_delete(SYS_PART_GROUP spg, HttpServletRequest req) {
        char a = (char) 5;
        char b = (char) 4;
        String part_grp_code[] = spg.getPart_grp_code().split(",");
        String code= "";
        for (int i = 0; i < part_grp_code.length; i++) {
            if (i == 0) {
                code += part_grp_code[i];
            } else {
                code += b + part_grp_code[i];
            }
        }
        String site_code = (String) req.getSession().getAttribute("session_check");
        spg.setSite_code(site_code);
        spg.setPart_grp_code(code);

        return sys_part_group_mapper.part_group_delete(spg);
    }
}
