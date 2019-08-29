package com.tobe.mes.tobesystem.Bean.MESBean.SCM_EC_SUB;

public class SCM_EC_SUB {
    private String site_code;
    private String ec_no;
    private String part_code;
    private int order_qty;
    private int bad_qty;
    private int in_qty;
    private String part_name;
    private String spec;
    private String part_grp_name;

    public String getSite_code() {
        return site_code;
    }

    public void setSite_code(String site_code) {
        this.site_code = site_code;
    }

    public String getEc_no() {
        return ec_no;
    }

    public void setEc_no(String ec_no) {
        this.ec_no = ec_no;
    }

    public String getPart_code() {
        return part_code;
    }

    public void setPart_code(String part_code) {
        this.part_code = part_code;
    }

    public int getOrder_qty() {
        return order_qty;
    }

    public void setOrder_qty(int order_qty) {
        this.order_qty = order_qty;
    }

    public int getBad_qty() {
        return bad_qty;
    }

    public void setBad_qty(int bad_qty) {
        this.bad_qty = bad_qty;
    }

    public int getIn_qty() {
        return in_qty;
    }

    public void setIn_qty(int in_qty) {
        this.in_qty = in_qty;
    }

    public String getPart_name() {
        return part_name;
    }

    public void setPart_name(String part_name) {
        this.part_name = part_name;
    }

    public String getSpec() {
        return spec;
    }

    public void setSpec(String spec) {
        this.spec = spec;
    }

    public String getPart_grp_name() {
        return part_grp_name;
    }

    public void setPart_grp_name(String part_grp_name) {
        this.part_grp_name = part_grp_name;
    }
}
