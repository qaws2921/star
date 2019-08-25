package com.tobe.mes.tobesystem.Bean.MESBean.SCM_OUT;

import java.util.List;

public class SCM_OUTS {
    private List<SCM_OUT> rows;
    private int total;
    private int page;
    private int records;

    public SCM_OUTS(List<SCM_OUT> rows, int total, int page, int records) {
        this.rows = rows;
        this.total = total;
        this.page = page;
        this.records = records;
    }

    public List<SCM_OUT> getRows() {
        return rows;
    }

    public void setRows(List<SCM_OUT> rows) {
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
