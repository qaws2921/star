package com.tobe.mes.tobesystem.MES.ADMIN.MASTER.SYSMsg;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_MSG_CD.SYS_MSG_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_MSG_CD.SYS_MSG_CDS;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;
import com.tobe.mes.tobesystem.Mapper.Admin.Master.SYSMsg_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SYSMsg_SERVICE {

    @Autowired
    private SYSMsg_Mapper sys_msg_mapper;

    public SYS_MSG_CDS msg_get(Double page, Double rows) {
        if (page == null && rows == null) {
            return new SYS_MSG_CDS(null,0,0,0);
        }else {
            Page p =new Page();
            p.setPage_num((int)(page*1));
            p.setTotal_num(((int)(rows*1)));

            List<SYS_MSG_CD> sys_msgList = sys_msg_mapper.msg_get(p);
            int sys_msg_count = sys_msg_mapper.msg_count(p);

            int total =(int) Math.ceil(sys_msg_count/(rows*1));


            return new SYS_MSG_CDS(sys_msgList,total,(int)(page*1),sys_msg_count);
        }
    }

    public Result msg(SYS_MSG_CD sm) {
        return sys_msg_mapper.msg_au(sm);
    }

    public Result msg_delete(SYS_MSG_CD sm) {
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
