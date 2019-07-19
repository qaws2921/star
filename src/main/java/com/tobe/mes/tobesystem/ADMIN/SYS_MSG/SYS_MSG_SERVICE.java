package com.tobe.mes.tobesystem.ADMIN.SYS_MSG;

import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Mapper.Admin.SYS_MSG_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SYS_MSG_SERVICE {

    @Autowired
    private SYS_MSG_Mapper sys_msg_mapper;

    public SYS_MSGS msg_get(Double page, Double rows) {
        if (page == null && rows == null) {
            return new SYS_MSGS(null,0,0,0);
        }else {
            Page p =new Page();
            p.setPage_num((int)(page*1));
            p.setTotal_num(((int)(rows*1)));

            List<SYS_MSG> sys_msgList = sys_msg_mapper.msg_get(p);
            int sys_msg_count = sys_msg_mapper.msg_count(p);

            int total =(int) Math.ceil(sys_msg_count/(rows*1));


            return new SYS_MSGS(sys_msgList,total,(int)(page*1),sys_msg_count);
        }
    }

    public int msg(SYS_MSG sm) {
        return sys_msg_mapper.msg_au(sm);
    }

    public int msg_delete(SYS_MSG sm) {
        char a = (char) 5;
        char b = (char) 4;
        String msg_code[] = sm.getMsg_code().split(",");
        String code= "";
        for (int i = 0; i < msg_code.length; i++) {
            if (i == 0) {
                code += msg_code[i];
            } else {
                code += b + msg_code[i];
            }
        }
        return sys_msg_mapper.msg_delete(code);
    }
}
