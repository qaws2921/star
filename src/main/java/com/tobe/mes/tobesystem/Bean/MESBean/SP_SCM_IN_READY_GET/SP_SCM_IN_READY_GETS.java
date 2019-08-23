package com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_IN_READY_GET;

import java.util.List;


public class SP_SCM_IN_READY_GETS {
    private List<SP_SCM_IN_READY_GET> rows;
    private int total;
    private int page;
    private int records;

    public SP_SCM_IN_READY_GETS(List<SP_SCM_IN_READY_GET> rows, int total, int page, int records) {
        this.rows = rows;
        this.total = total;
        this.page = page;
        this.records = records;
    }

    public List<SP_SCM_IN_READY_GET> getRows() {
        return rows;
    }

    public void setRows(List<SP_SCM_IN_READY_GET> rows) {
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
