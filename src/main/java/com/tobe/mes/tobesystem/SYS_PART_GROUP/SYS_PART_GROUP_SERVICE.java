package com.tobe.mes.tobesystem.SYS_PART_GROUP;

import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Mapper.SYS_COMMON_Mapper;
import com.tobe.mes.tobesystem.Mapper.SYS_PART_GROUP_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class SYS_PART_GROUP_SERVICE {

    @Autowired
    private SYS_PART_GROUP_Mapper sys_part_group_mapper;

    public SYS_PART_GROUPS part_group_get(Double page, Double rows) {
        if (page == null && rows == null) {
            return new SYS_PART_GROUPS(null,0,0,0);
        }else {
            Page p =new Page();
            p.setPage_num((int)(page*1));
            p.setTotal_num(((int)(rows*1)));

            List<SYS_PART_GROUP> sys_part_groupList = sys_part_group_mapper.part_group_get(p);
            int sys_part_group_count = sys_part_group_mapper.part_group_count(p);

            int total =(int) Math.ceil(sys_part_group_count/(rows*1));


            return new SYS_PART_GROUPS(sys_part_groupList,total,(int)(page*1),sys_part_group_count);
        }
    }
}
