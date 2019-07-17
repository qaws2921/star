package com.tobe.mes.tobesystem.Bean;

public class Page {
    private int page_num;
    private int total_num;
    private String keyword;
    private String start_date;
    private String end_date;

    public int getPage_num() {
        return page_num;
    }

    public int getTotal_num() {
        return total_num;
    }

    public String getKeyword() {
        return keyword;
    }

    public String getStart_date() {
        return start_date;
    }

    public String getEnd_date() {
        return end_date;
    }

    public void setPage_num(int page_num) {
        this.page_num = page_num;
    }

    public void setTotal_num(int total_num) {
        this.total_num = total_num;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }

    public void setStart_date(String start_date) {
        this.start_date = start_date;
    }

    public void setEnd_date(String end_date) {
        this.end_date = end_date;
    }
}
