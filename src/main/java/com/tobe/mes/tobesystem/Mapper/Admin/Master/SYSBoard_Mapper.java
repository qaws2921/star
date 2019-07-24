package com.tobe.mes.tobesystem.Mapper.Admin.Master;


import com.tobe.mes.tobesystem.Bean.MESBean.SYS_BOARD_CD.SYS_BOARD_CD;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;

import java.util.List;

public interface SYSBoard_Mapper {

    List<SYS_BOARD_CD> board_cd_get(Page p);
    int board_cd_count(Page p);
    Result board_cd_au(SYS_BOARD_CD sbc);


}
