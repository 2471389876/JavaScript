/* //判断时间段
var time = prompt("请输入现在几点：");
if (time > 6 && time < 12) {
    alert("早上好");
} else if (time > 12 && time < 18) {
    alert("下午好");
} else {
    alert("晚上好");
} */

/* //用户依次输入两个值，最后弹出最大值
var num1 = prompt("请输入第一个值：");
var num2 = prompt("请输入第二个值：");
alert(num1 > num2 ? num1 : num2); */

/* //用户输入一个数，判断是奇数还是偶数
var num = prompt("请输入一个数：");
if (num % 2 == 0) {
    alert("这个数是偶数");
} else {
    alert("这个数是奇数");
} */

/* //用户输入1-7，返回星期几
var day = prompt("请输入1~7的数字：")
switch (parseInt(day)) {
    case 1: alert("星期一"); break;
    case 2: alert("星期二"); break;
    case 3: alert("星期三"); break;
    case 4: alert("星期四"); break;
    case 5: alert("星期五"); break;
    case 6: alert("星期六"); break;
    default: alert("星期日");
} */

var score = prompt("请输入分数：");
if (score >= 90) {
    alert("A");
} else if (score >= 80) {
    alert("B");
} else if (score >= 70) {
    alert("C")
} else if (score > 60) {
    alert("D");
} else {
    alert("E");
}