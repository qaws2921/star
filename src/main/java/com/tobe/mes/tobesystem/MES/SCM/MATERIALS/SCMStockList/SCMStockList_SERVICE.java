package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMStockList;

import com.tobe.mes.tobesystem.Mapper.Scm.Materlals.SCMStockList_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SCMStockList_SERVICE {

    @Autowired
    private SCMStockList_Mapper scmStockList_mapper;
}
