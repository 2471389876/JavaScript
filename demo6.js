/*  var sum = 0;
for (var i = 1; i <= 100; i++) {
    sum += i;

}
console.log(sum); */

/* var num = prompt("请输入班级人数：");
var score = 0;
for (var i = 1; i <= num; i++) {
    var sc = prompt("请输入第" + i + "位同学分数：");
    score += parseInt(sc);
}
alert("这个班级总分为" + score);
alert("这个班级平均分为" + score / parseInt(num)); */

/* var str = '';
for (var i = 1; i <= 5; i++) {
    str += '⭐';
}
console.log(str); */

/* var str = '';
for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= 5; j++) {
        str += '⭐';
    }
    str = str + '\n';
}
console.log(str); */

/* var rows = prompt("请输入行数：");
var cols = prompt("请输入列数：");
var str = '';
for (var i = 1; i <= rows; i++) {
    for (var j = 1; j <= cols; j++) {
        str += '⭐';
    }
    str = str + '\n';
}
console.log(str); */

/* var rows = prompt("请输入行数：");
var cols = prompt("请输入列数：");
var str = '';
for (var i = 1; i <= rows; i++) {
    for (var j = i; j <= cols; j++) {
        str += '⭐';
    }
    str = str + '\n';
}
console.log(str); */

/* var rows = prompt("请输入行数：");
var cols = prompt("请输入列数：");
var str = '';
for (var i = 1; i <= rows; i++) {
    for (var j = 1; j <= i; j++) {
        str += '⭐';
    }
    str = str + '\n';
}
console.log(str); */

/* var str = '';
for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= i; j++) {
        str += j + '*' + i + '=' + i * j + '\t';
    }
    str += '\n';
}
console.log(str); */

/* var user = prompt("请输入用户名：");
var psw = prompt("请输入密码：");
while ((user !== 'admin') && (psw !== '123456')) {
    user = prompt("请输入用户名：");
    psw = prompt("请输入密码：");
}
alert("登陆成功"); */

/* var sum = 0;
for (var i = 1; i <= 20; i++) {
    if ((i % 10) == 3) {
        continue;
    }
    sum += i;
}
console.log(sum); */

/* var sum = 100;

while (1) {
    var op = prompt("请输入你的操作：\n1、存钱\n2、取钱\n3、显示余额\n4、退出");
    if (parseInt(op) == 1) {
        var num = prompt("请输入存钱金额：")
        sum += parseInt(num);
        continue;
    }
    if (parseInt(op) == 2) {
        var num = prompt("请输入取钱金额：")
        sum -= parseInt(num);
        continue;
    }
    if (parseInt(op) == 3) {
        alert("当前剩余：" + sum);
        continue;
    }
    if (parseInt(op) == 4) {
        break;
    }
} */
/* function cal(num1, num2, op) {
    if (op == '+') {
        return num1 + num2;
    }
    if (op == '-') {
        return num1 - num2;
    }
    if (op == '*') {
        return num1 * num2;
    }
    if (op == '/') {
        return num1 / num2;
    }
}
var n1 = prompt("请输入第一个数字：");
var n2 = prompt("请输入第二个数字：");
var option = prompt("请输入操作符：");
var res = cal(parseInt(n1), parseInt(n2), option);
alert(res); */
