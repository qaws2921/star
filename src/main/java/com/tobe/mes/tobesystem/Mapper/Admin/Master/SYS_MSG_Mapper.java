package com.tobe.mes.tobesystem.Mapper.Admin.Master;


import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.ADMIN.MASTER.SYS_MSG.SYS_MSG;

import java.util.List;

public interface SYS_MSG_Mapper {
    List<SYS_MSG> msg_get(Page p);
    int msg_count(Page p);
    int msg_au(SYS_MSG sm);
    int msg_delete(String code);



}
