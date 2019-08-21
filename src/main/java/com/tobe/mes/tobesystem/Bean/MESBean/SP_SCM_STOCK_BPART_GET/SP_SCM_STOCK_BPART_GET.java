package com.tobe.mes.tobesystem.Bean.MESBean.SP_SCM_STOCK_BPART_GET;

public class SP_SCM_STOCK_BPART_GET {
    private String part_code;
    private String part_name;
    private String alc_code;
    private String part_grp_name;
    private String spec;
    private String unit_name;
    private String supp_name;
    private int max_qty;
    private int min_qty;
    private int stock_qty;

    public String getPart_code() {
        return part_code;
    }

    public void setPart_code(String part_code) {
        this.part_code = part_code;
    }

    public String getPart_name() {
        return part_name;
    }

    public void setPart_name(String part_name) {
        this.part_name = part_name;
    }

    public String getAlc_code() {
        return alc_code;
    }

    public void setAlc_code(String alc_code) {
        this.alc_code = alc_code;
    }

    public String getPart_grp_name() {
        return part_grp_name;
    }

    public void setPart_grp_name(String part_grp_name) {
        this.part_grp_name = part_grp_name;
    }

    public String getSpec() {
        return spec;
    }

    public void setSpec(String spec) {
        this.spec = spec;
    }

    public String getUnit_name() {
        return unit_name;
    }

    public void setUnit_name(String unit_name) {
        this.unit_name = unit_name;
    }

    public String getSupp_name() {
        return supp_name;
    }

    public void setSupp_name(String supp_name) {
        this.supp_name = supp_name;
    }

    public int getMax_qty() {
        return max_qty;
    }

    public void setMax_qty(int max_qty) {
        this.max_qty = max_qty;
    }

    public int getMin_qty() {
        return min_qty;
    }

    public void setMin_qty(int min_qty) {
        this.min_qty = min_qty;
    }

    public int getStock_qty() {
        return stock_qty;
    }

    public void setStock_qty(int stock_qty) {
        this.stock_qty = stock_qty;
    }
}
