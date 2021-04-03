/* var obj = {
    uname: '可可',
    type: '阿拉斯加犬',
    age: 5,
    color: '棕色',
    bark: function () {
        console.log('汪汪~');
    },
    showFilm: function () {
        console.log('我会演电影~');
    }
}
console.log(obj.uname);
console.log(obj['type']);
obj.bark(); */

/* var obj = new Object();
obj.uname = '鸣人';
obj.age = 19;
obj.sex = '男';
obj.skill = function () {
    console.log('影分身术');
}
console.log(obj.uname);
console.log(obj['sex']);
obj.skill(); */

/* function Star(name, type, blood) {
    this.name = name;
    this.type = type;
    this.blood = blood;
    this.attack = function (att) {
        console.log(att);
    }
}
var lp = new Star('廉颇', '力量型', 500);
lp.attack('近战');
console.log(lp.name);
console.log(lp['type']);
var hy = new Star('后羿', '射手型', 100);
hy.attack('远战');
console.log(hy.name);
console.log(hy.type); */

/* var obj = {
    color: 'white',
    weight: 10,
    type: 'hp',
    film: function () {
        console.log('看电影');
    },
    music: function () {
        console.log('听音乐');
    }
}
console.log(obj.weight);
obj.music(); */
/* 
var obj = new Object();
obj.width = 10;
obj.height = 20;
obj.bcolor = 'red';
obj.type = function () {
    console.log('点击');
}
console.log(obj.width);
obj.type(); */

/* function Car(weight, color, type) {
    this.weight = weight;
    this.color = color;
    this.type = type;
    this.zairen = function () {
        console.log('载人');
    }
}
var user = new Car(10, 'red', 'baoma');
console.log(user.type);
user.zairen(); */

function reserve(arr) {
    var newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr[newArr.length] = arr[i];
    }
    return newArr;
}
console.log(reserve([1, 2, 3, 4, 5]));