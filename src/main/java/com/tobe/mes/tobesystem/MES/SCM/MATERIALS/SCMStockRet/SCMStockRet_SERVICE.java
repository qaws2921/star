package com.tobe.mes.tobesystem.MES.SCM.MATERIALS.SCMStockRet;

import com.tobe.mes.tobesystem.Bean.MESBean.SCM_STOCK_RET.SCM_STOCK_RET;
import com.tobe.mes.tobesystem.Bean.MESBean.SCM_STOCK_RET.SCM_STOCK_RETS;
import com.tobe.mes.tobesystem.Bean.Page;
import com.tobe.mes.tobesystem.Mapper.Scm.Materlals.SCMStockRet_Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class SCMStockRet_SERVICE {
    @Autowired
    private SCMStockRet_Mapper scmStockRet_mapper;

    public SCM_STOCK_RETS scmStockRet_sp_scm_stock_rev_get(Double page, Double rows, Page p, HttpServletRequest req) {
        if (page == null && rows == null) {
            return new SCM_STOCK_RETS(null, 0, 0, 0);
        } else {

            p.setPage_num((int) (page * 1));
            p.setTotal_num(((int) (rows * 1)));
            String start_date = p.getStart_date().replace("-", "");
            String end_date = p.getEnd_date().replace("-", "");

            p.setStart_date(start_date);
            p.setEnd_date(end_date);
            String site_code = (String) req.getSession().getAttribute("session_check");
            p.setSite_code(site_code);

            List<SCM_STOCK_RET> list = scmStockRet_mapper.scmStockRet_sp_scm_stock_rev_get(p);
            int count = scmStockRet_mapper.scmStockRet_sp_scm_stock_rev_get_count(p);

            int total = (int) Math.ceil(count / (rows * 1));


            return new SCM_STOCK_RETS(list, total, (int) (page * 1), count);
        }
    }
}
