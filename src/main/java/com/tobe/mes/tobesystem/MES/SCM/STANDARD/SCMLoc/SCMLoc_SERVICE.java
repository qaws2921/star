package com.tobe.mes.tobesystem.MES.SCM.STANDARD.SCMLoc;

import com.tobe.mes.tobesystem.Mapper.Scm.Standard.SCMLoc_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SCMLoc_SERVICE {
    @Autowired
    private SCMLoc_Mapper scmLoc_mapper;
}
