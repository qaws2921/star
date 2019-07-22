package com.tobe.mes.tobesystem.ADMIN.AUTH.SYS_MENU_CD;

public class SYS_MENU_CD {
    private String menu_code;
    private String parent_menu_code;
    private String menu_name;
    private int level;
    private int rownum;
    private String check_get;
    private String check_add;
    private String check_edit;
    private String check_del;
    private String auth_code;
    private String keyword;

    public String getMenu_code() {
        return menu_code;
    }

    public String getMenu_name() {
        return menu_name;
    }

    public int getLevel() {
        return level;
    }

    public int getRownum() {
        return rownum;
    }

    public String getCheck_get() {
        return check_get;
    }

    public String getCheck_add() {
        return check_add;
    }

    public String getCheck_edit() {
        return check_edit;
    }

    public String getCheck_del() {
        return check_del;
    }

    public String getKeyword() {
        return keyword;
    }

    public void setMenu_code(String menu_code) {
        this.menu_code = menu_code;
    }

    public void setMenu_name(String menu_name) {
        this.menu_name = menu_name;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public void setRownum(int rownum) {
        this.rownum = rownum;
    }

    public void setCheck_get(String check_get) {
        this.check_get = check_get;
    }

    public void setCheck_add(String check_add) {
        this.check_add = check_add;
    }

    public void setCheck_edit(String check_edit) {
        this.check_edit = check_edit;
    }

    public void setCheck_del(String check_del) {
        this.check_del = check_del;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }

    public String getAuth_code() {
        return auth_code;
    }

    public void setAuth_code(String auth_code) {
        this.auth_code = auth_code;
    }

    public String getParent_menu_code() {
        return parent_menu_code;
    }

    public void setParent_menu_code(String parent_menu_code) {
        this.parent_menu_code = parent_menu_code;
    }
}
