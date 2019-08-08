package com.tobe.mes.tobesystem.MES.SCM.SUPPLY.SCMEC;

import com.tobe.mes.tobesystem.Mapper.Scm.Supply.SCMEC_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SCMEC_SERVICE {
    @Autowired
    private SCMEC_Mapper scmec_mapper;
}
