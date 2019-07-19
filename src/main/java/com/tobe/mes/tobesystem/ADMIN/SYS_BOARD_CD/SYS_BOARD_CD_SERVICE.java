package com.tobe.mes.tobesystem.ADMIN.SYS_BOARD_CD;

import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Mapper.Admin.SYS_BOARD_CD_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SYS_BOARD_CD_SERVICE {

    @Autowired
    private SYS_BOARD_CD_Mapper sys_board_cd_mapper;

    public SYS_BOARD_CDS board_cd_get(Double page, Double rows) {
        if (page == null && rows == null) {
            return new SYS_BOARD_CDS(null,0,0,0);
        }else {
            Page p =new Page();
            p.setPage_num((int)(page*1));
            p.setTotal_num(((int)(rows*1)));

            List<SYS_BOARD_CD> sys_board_cdList = sys_board_cd_mapper.board_cd_get(p);
            int sys_board_cd_count = sys_board_cd_mapper.board_cd_count(p);

            int total =(int) Math.ceil(sys_board_cd_count/(rows*1));


            return new SYS_BOARD_CDS(sys_board_cdList,total,(int)(page*1),sys_board_cd_count);
        }
    }

    public int board_cd_au(SYS_BOARD_CD sbc) {
        return  sys_board_cd_mapper.board_cd_au(sbc);
    }
}
