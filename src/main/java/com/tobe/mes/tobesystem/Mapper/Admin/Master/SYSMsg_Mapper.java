package com.tobe.mes.tobesystem.Mapper.Admin.Master;


import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_MSG_CD.SYS_MSG_CD;
import com.tobe.mes.tobesystem.Bean.Result;

import java.util.List;

public interface SYSMsg_Mapper {
    List<SYS_MSG_CD> msg_get(Page p);
    int msg_count(Page p);
    Result msg_au(SYS_MSG_CD sm);
    Result msg_delete(String code);



}
