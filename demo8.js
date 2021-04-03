/* var arr = ['red', 'blue', 'red', 'green', 'pink', 'red'];
var num = 0;
var index = arr.indexOf('red');
while (index !== -1) {
    console.log(index);
    num++;
    index = arr.indexOf('red', index + 1);
}
console.log('red出现的次数为：' + num); */

var str = 'abaasdffggghhhjjkkgfdsssss34333343';
console.log(str.length);
console.log(str.charAt(2));
if (str.indexOf('c') !== -1) {
    console.log('存在');
} else {
    console.log('不存在');
}
console.log(str.replace('a', 'c'));
console.log(str.substr(1, 3));
var o = {};
for (var i = 0; i < str.length; i++) {
    var chars = str.charAt(i);
    if (o[chars]) {
        o[chars]++;
    } else {
        o[chars] = 1;
    }
}
var max = 0;
var ch = '';
for (var k in o) {
    if (o[k] > max) {
        max = o[k];
        ch = k;
    }
}
console.log('次数最多的字符是:' + ch);
console.log('次数是：' + max);