package com.tobe.mes.tobesystem.ADMIN.MASTER.SYSCommon;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_COMMON_CD.SYS_COMMON_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_COMMON_CD.SYS_COMMONS_CD;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;
import com.tobe.mes.tobesystem.Mapper.Admin.Master.SYSCommon_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SYSCommon_SERVICE {

    @Autowired
    private SYSCommon_Mapper sys_common_mapper;

    public SYS_COMMONS_CD common_get(Double page, Double rows, String code_type) {
        if (page == null && rows == null) {
            return new SYS_COMMONS_CD(null,0,0,0);
        }else {
            Page p =new Page();
            p.setPage_num((int)(page*1));
            p.setTotal_num(((int)(rows*1)));
            p.setKeyword(code_type);
            List<SYS_COMMON_CD> sys_commons = sys_common_mapper.common_get(p);
            int sys_commons_count = sys_common_mapper.common_count(p);

            int total =(int) Math.ceil(sys_commons_count/(rows*1));


            return new SYS_COMMONS_CD(sys_commons,total,(int)(page*1),sys_commons_count);
        }

    }

    public List<SYS_COMMON_CD> common_group_get() {
        return sys_common_mapper.common_group_get();
    }

    public Result common_au(SYS_COMMON_CD sc) {
        return sys_common_mapper.common_au(sc);
    }

    public Result common_delete(SYS_COMMON_CD sc) {
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
