//判断是否是闰年
function isLeapYear(year){
    if((year%4==0) && (year%100!=0) || (year%400==0)){
        return year + "年是闰年";
    }
    else
    {
        return year + "年不是闰年";
    }
}
document.write(isLeapYear(2017)+"<br / >");

//求出任意5个数的最大值
function fiveMax(a,b,c,d,e){
    var maxNum;
    maxNum = (a>b) ? a:b;
    maxNum = (maxNum>c) ? maxNum : c;
    maxNum = (maxNum>d) ? maxNum : d;
    maxNum = (maxNum>e) ? maxNum : e;
    return maxNum;
}
document.write("5个数中的最大值为："+fiveMax(2,6,9,1,700) + "<br/>");  

//求出任意5个数的最小值
function fiveMin(a,b,c,d,e){
    var minNum;
    minNum = (a<b) ? a : b;
    minNum = (minNum<c) ? minNum : c;
    minNum = (minNum<d) ? minNum : d;
    minNum = (minNum<e) ? minNum : e;
    return minNum;
}
document.write("5个数中的最小值为："+fiveMin(2,6,9,1,700) + "<br/>");   