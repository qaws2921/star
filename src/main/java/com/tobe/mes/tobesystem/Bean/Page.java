package com.tobe.mes.tobesystem.Bean;

public class Page {
    private int page_num;
    private int total_num;
    private String keyword;
    private String keyword2;
    private String keyword3;
    private String keyword4;
    private String keyword5;
    private String keyword6;
    private String start_date;
    private String end_date;
    private String user_code;


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

    public String getKeyword2() {
        return keyword2;
    }

    public String getKeyword3() {
        return keyword3;
    }

    public void setKeyword2(String keyword2) {
        this.keyword2 = keyword2;
    }

    public void setKeyword3(String keyword3) {
        this.keyword3 = keyword3;
    }

    public String getKeyword4() {
        return keyword4;
    }

    public void setKeyword4(String keyword4) {
        this.keyword4 = keyword4;
    }

    public String getKeyword5() {
        return keyword5;
    }

    public void setKeyword5(String keyword5) {
        this.keyword5 = keyword5;
    }

    public String getKeyword6() {
        return keyword6;
    }

    public void setKeyword6(String keyword6) {
        this.keyword6 = keyword6;
    }

    public String getUser_code() {
        return user_code;
    }

    public void setUser_code(String user_code) {
        this.user_code = user_code;
    }
}
