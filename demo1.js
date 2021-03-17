//找出水仙花数
var str = "";
for(var i=100;i<1000;i++){
    var a = i%10;
    var b = (i/10)%10;
    b = parseInt(b);
    var c = i/100;
    c = parseInt(c);
    if(a*a*a + b*b*b + c*c*c ==i){
        str = str + i +"、";
    }
}
document.write("水仙花数："+str);

//计算1+...+100的值
var sum=0;
for(var i=1;i<=100;i++){
    sum += i;
}
document.write("<br/>"  + sum + "<br/>");

//使用循环输出菱形图案
var i,j,k;
for(i=0;i<4;i++){
    for(j=0;j<3-i;j++){
        document.write('-');
    }
    for(k=0;k<2*i+1;k++){
        document.write("*");
    }
    document.write("<br/>");
}
for(i=0;i<3;i++){
    for(j=0;j<i+1;j++){
        document.write('-');
    }
    for(k=0;k<5-2*i;k++){
        document.write("*");
    }
    document.write("<br/>");
}

//打印九九乘法表
for(var a=1;a<10;a++){
    for(var b=1;b<=a;b++){
        document.write(b + "*" + a + "=" + a*b);
        document.write(" ");
    }
    document.write("<br />");
}