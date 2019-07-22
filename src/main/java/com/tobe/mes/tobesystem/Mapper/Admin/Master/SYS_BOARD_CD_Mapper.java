package com.tobe.mes.tobesystem.Mapper.Admin.Master;


import com.tobe.mes.tobesystem.ADMIN.MASTER.SYS_BOARD_CD.SYS_BOARD_CD;
import com.tobe.mes.tobesystem.Bean.Page;

import java.util.List;

public interface SYS_BOARD_CD_Mapper {

    List<SYS_BOARD_CD> board_cd_get(Page p);
    int board_cd_count(Page p);
    int board_cd_au(SYS_BOARD_CD sbc);


}
