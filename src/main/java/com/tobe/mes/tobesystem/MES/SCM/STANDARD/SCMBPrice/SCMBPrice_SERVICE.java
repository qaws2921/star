package com.tobe.mes.tobesystem.MES.SCM.STANDARD.SCMBPrice;

import com.tobe.mes.tobesystem.Mapper.Scm.Standard.SCMBPrice_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SCMBPrice_SERVICE {
    @Autowired
    private SCMBPrice_Mapper scmbPrice_mapper;
}
