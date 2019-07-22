package com.tobe.mes.tobesystem.ADMIN.MASTER.SYS_COMMON;

import java.util.List;

public class SYS_COMMONS {
    private List<SYS_COMMON> rows;
    private int total;
    private int page;
    private int records;

    public SYS_COMMONS(List<SYS_COMMON> rows, int total, int page, int records) {
        this.rows = rows;
        this.total = total;
        this.page = page;
        this.records = records;
    }

    public List<SYS_COMMON> getRows() {
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

    public void setRows(List<SYS_COMMON> rows) {
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
