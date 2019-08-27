package com.tobe.mes.tobesystem.MES.ADMIN.MASTER.SYSBoard;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_BOARD_CD.SYS_BOARD_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_BOARD_CD.SYS_BOARD_CDS;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Bean.Result;
import com.tobe.mes.tobesystem.Mapper.Admin.Master.SYSBoard_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class SYSBoard_SERVICE {

    @Autowired
    private SYSBoard_Mapper sys_board_cd_mapper;

    public SYS_BOARD_CDS board_cd_get(Double page, Double rows, HttpServletRequest req) {
        if (page == null && rows == null) {
            return new SYS_BOARD_CDS(null,0,0,0);
        }else {
            Page p =new Page();
            p.setPage_num((int)(page*1));
            p.setTotal_num(((int)(rows*1)));
            String site_code = (String) req.getSession().getAttribute("session_check");
            p.setSite_code(site_code);
            List<SYS_BOARD_CD> sys_board_cdList = sys_board_cd_mapper.board_cd_get(p);
            int sys_board_cd_count = sys_board_cd_mapper.board_cd_count(p);

            int total =(int) Math.ceil(sys_board_cd_count/(rows*1));


            return new SYS_BOARD_CDS(sys_board_cdList,total,(int)(page*1),sys_board_cd_count);
        }
    }

    public Result board_cd_au(SYS_BOARD_CD sbc, HttpServletRequest req) {
        String site_code = (String) req.getSession().getAttribute("session_check");
        sbc.setSite_code(site_code);
        return  sys_board_cd_mapper.board_cd_au(sbc);
    }
}
