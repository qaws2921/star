package com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_OUT_ORDER_SUB_GET;

public class SP_SCM_OUT_ORDER_SUB_GET {
    private String rq_no;
    private String part_code;
    private int qty;
    private String part_name;
    private String spec;
    private String part_grp_name;

    public String getRq_no() {
        return rq_no;
    }

    public void setRq_no(String rq_no) {
        this.rq_no = rq_no;
    }

    public String getPart_code() {
        return part_code;
    }

    public void setPart_code(String part_code) {
        this.part_code = part_code;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
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
