package com.tobe.mes.tobesystem.Bean.MESBean.SYS_AUTH_CD;

import java.util.List;

public class SYS_AUTH_CDS {
    private List<SYS_AUTH_CD> rows;
    private int total;
    private int page;
    private int records;

    public SYS_AUTH_CDS(List<SYS_AUTH_CD> rows, int total, int page, int records) {
        this.rows = rows;
        this.total = total;
        this.page = page;
        this.records = records;
    }

    public List<SYS_AUTH_CD> getRows() {
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

    public void setRows(List<SYS_AUTH_CD> rows) {
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
