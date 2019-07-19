package com.tobe.mes.tobesystem.ADMIN.SYS_COMMON;

import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Mapper.Admin.SYS_COMMON_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SYS_COMMON_SERVICE {

    @Autowired
    private SYS_COMMON_Mapper sys_common_mapper;

    public SYS_COMMONS common_get(Double page, Double rows, String code_type) {
        if (page == null && rows == null) {
            return new SYS_COMMONS(null,0,0,0);
        }else {
            Page p =new Page();
            p.setPage_num((int)(page*1));
            p.setTotal_num(((int)(rows*1)));
            p.setKeyword(code_type);
            List<SYS_COMMON> sys_commons = sys_common_mapper.common_get(p);
            int sys_commons_count = sys_common_mapper.common_count(p);

            int total =(int) Math.ceil(sys_commons_count/(rows*1));


            return new SYS_COMMONS(sys_commons,total,(int)(page*1),sys_commons_count);
        }

    }

    public List<SYS_COMMON> common_group_get() {
        return sys_common_mapper.common_group_get();
    }

    public int common_au(SYS_COMMON sc) {
        return sys_common_mapper.common_au(sc);
    }

    public int common_delete(SYS_COMMON sc) {
        char a = (char)5;
        char b = (char)4;
        String code_value[] = sc.getCode_value().split(",");
        String type_value="";
        for (int i = 0; i < code_value.length ; i++) {
            if (i == 0){
                type_value += sc.getCode_type()+a+code_value[i];
            }else {
                type_value += b+sc.getCode_type()+a+code_value[i];
            }
        }


        return sys_common_mapper.common_delete(type_value);
    }
}
