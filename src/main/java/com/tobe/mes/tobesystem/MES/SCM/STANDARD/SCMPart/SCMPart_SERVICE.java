package com.tobe.mes.tobesystem.MES.SCM.STANDARD.SCMPart;

import com.tobe.mes.tobesystem.Mapper.Scm.Standard.SCMPart_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SCMPart_SERVICE {
    @Autowired
    private SCMPart_Mapper scmPart_mapper;
}
