package com.tobe.mes.tobesystem.ADMIN.SYS_BOARD_CD;

public class SYS_BOARD_CD {
    private String board_code;
    private String board_en;
    private String board_kr;
    private String board_auth;
    private Double files;
    private Double file_size;
    private String use_yn;
    private String user_code;
    private String create_date;
    private String update_date;
    private String user_name;
    private String keyword;

    public String getBoard_code() {
        return board_code;
    }

    public String getBoard_en() {
        return board_en;
    }

    public String getBoard_kr() {
        return board_kr;
    }

    public String getBoard_auth() {
        return board_auth;
    }

    public Double getFiles() {
        return files;
    }

    public Double getFile_size() {
        return file_size;
    }

    public String getUse_yn() {
        return use_yn;
    }

    public String getUser_code() {
        return user_code;
    }

    public String getCreate_date() {
        return create_date;
    }

    public String getUpdate_date() {
        return update_date;
    }

    public void setBoard_code(String board_code) {
        this.board_code = board_code;
    }

    public void setBoard_en(String board_en) {
        this.board_en = board_en;
    }

    public void setBoard_kr(String board_kr) {
        this.board_kr = board_kr;
    }

    public void setBoard_auth(String board_auth) {
        this.board_auth = board_auth;
    }

    public void setFiles(Double files) {
        this.files = files;
    }

    public void setFile_size(Double file_size) {
        this.file_size = file_size;
    }

    public void setUse_yn(String use_yn) {
        this.use_yn = use_yn;
    }

    public void setUser_code(String user_code) {
        this.user_code = user_code;
    }

    public void setCreate_date(String create_date) {
        this.create_date = create_date;
    }

    public void setUpdate_date(String update_date) {
        this.update_date = update_date;
    }

    public String getUser_name() {
        return user_name;
    }

    public String getKeyword() {
        return keyword;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }
}
