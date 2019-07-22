function jquery_sysPartGroup(_this){

}

function formmatter_date(cellValue) { // 날짜 필터
   if (cellValue == null){
       return '';
   } else {

    var y = cellValue.substring(0,4);
    var m = cellValue.substring(4,6);
    var d = cellValue.substring(6,8);
    var h = cellValue.substring(8,10);
    var mm = cellValue.substring(10,12);
    var s = cellValue.substring(12,14);
    // 20190718092501
    var date = y+"-"+m+"-"+d+" "+h+":"+mm+":"+s;
    return date;
   }
}
