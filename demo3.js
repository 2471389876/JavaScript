//输出一个字符串中有多少个特定字符
var str = "Can you can a can as a Canner can can a can";
var n = 0;
for(var i=0;i<str.length;i++){
    var char = str.charAt(i);
    if(char.toLowerCase()=='c'){
        n++;
    }
}
document.write("字符串中含有" + n + "个字母c" + "<br/>");

//统计字符串中有多少个数字
function getNum(str){
    var num = 0;
    for(var i=0;i<str.length;i++){
        var char = str.charAt(i);
        if(char != " " && !isNaN(char)){
            num++;
        }
    }
    return num;
}
document.write(getNum("1d34kl")+"<br/>");

//统计一个字符串中有多少个单词
var str = "Rome was not built in a day";
var num = str.split(" ").length;
document.write("共有" + num + "个单词"+"<br/>");

//删除给定字符串中的特定字符
var arr="";
function deleteCharAtStr(str){  
    for(var i=0;i<str.length;i++){
        var char = str.charAt(i);
        if(char!='e'){
            arr+=char;
        }
    }
    return arr;
}
document.write("最后的字符串结果是：" + deleteCharAtStr("Hello Lvye"));