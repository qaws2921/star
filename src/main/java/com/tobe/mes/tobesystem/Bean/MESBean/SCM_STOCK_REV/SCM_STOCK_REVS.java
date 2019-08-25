package com.tobe.mes.tobesystem.Bean.MESBean.SCM_STOCK_REV;

import java.util.List;

public class SCM_STOCK_REVS {
    private List<SCM_STOCK_REV> rows;
    private int total;
    private int page;
    private int records;

    public SCM_STOCK_REVS(List<SCM_STOCK_REV> rows, int total, int page, int records) {
        this.rows = rows;
        this.total = total;
        this.page = page;
        this.records = records;
    }

    public List<SCM_STOCK_REV> getRows() {
        return rows;
    }

    public void setRows(List<SCM_STOCK_REV> rows) {
        this.rows = rows;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public int getRecords() {
        return records;
    }

    public void setRecords(int records) {
        this.records = records;
    }
}
