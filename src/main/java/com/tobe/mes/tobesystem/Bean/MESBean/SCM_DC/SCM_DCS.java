package com.tobe.mes.tobesystem.Bean.MESBean.SCM_DC;

import java.util.List;

public class SCM_DCS {
    private List<SCM_DC> rows;
    private int total;
    private int page;
    private int records;

    public SCM_DCS(List<SCM_DC> rows, int total, int page, int records) {
        this.rows = rows;
        this.total = total;
        this.page = page;
        this.records = records;
    }

    public List<SCM_DC> getRows() {
        return rows;
    }

    public int getTotal() {
        return total;
    }

    public int getPage() {
        return page;
    }

    public int getRecords() {
        return records;
    }

    public void setRows(List<SCM_DC> rows) {
        this.rows = rows;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public void setRecords(int records) {
        this.records = records;
    }
}
