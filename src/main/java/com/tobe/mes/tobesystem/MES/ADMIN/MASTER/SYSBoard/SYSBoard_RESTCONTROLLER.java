package com.tobe.mes.tobesystem.MES.ADMIN.MASTER.SYSBoard;

import com.tobe.mes.tobesystem.Bean.MESBean.SYS_BOARD_CD.SYS_BOARD_CD;
import com.tobe.mes.tobesystem.Bean.MESBean.SYS_BOARD_CD.SYS_BOARD_CDS;
import com.tobe.mes.tobesystem.Bean.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class SYSBoard_RESTCONTROLLER {

    @Autowired
    private SYSBoard_SERVICE sys_board_cd_service;

    @RequestMapping(value = "/sysBoard/board/cd/get", method = RequestMethod.POST) // 코드 리스트 가져오기
    public SYS_BOARD_CDS board_cd_get (Double page, Double rows, HttpServletRequest req){

        return sys_board_cd_service.board_cd_get(page,rows,req);
    }
    @RequestMapping(value = "/sysBoard/board/cd/au", method = RequestMethod.POST) // 코드 리스트 가져오기
    public Result board_cd_au (SYS_BOARD_CD sbc, HttpServletRequest req){
        return sys_board_cd_service.board_cd_au(sbc,req);
    }
}
