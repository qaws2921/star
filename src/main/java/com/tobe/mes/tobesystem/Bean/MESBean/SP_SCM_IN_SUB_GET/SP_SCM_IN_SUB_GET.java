package com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_IN_SUB_GET;

public class SP_SCM_IN_SUB_GET {
    private String in_no;
    private String part_code;
    private int order_qty;
    private int bad_qty;
    private int out_qty;
    private int in_qty;
    private String part_name;
    private String cargo_name;
    private String loc_name;
    private String spec;
    private String part_grp_name;


    public String getIn_no() {
        return in_no;
    }

    public void setIn_no(String in_no) {
        this.in_no = in_no;
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

    public int getOut_qty() {
        return out_qty;
    }

    public void setOut_qty(int out_qty) {
        this.out_qty = out_qty;
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

    public String getCargo_name() {
        return cargo_name;
    }

    public void setCargo_name(String cargo_name) {
        this.cargo_name = cargo_name;
    }

    public String getLoc_name() {
        return loc_name;
    }

    public void setLoc_name(String loc_name) {
        this.loc_name = loc_name;
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
