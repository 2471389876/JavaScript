var app = new Vue({
    el: '#app',
    data: {
        message: '黑马程序员',
        school: {
            name: "学校",
            mobile: 100
        },
        arr: ['北京', '南京', '上海']

    }
})
function DOG(name) {
    this.name = name;
    this.species = '犬科';
}
var dogA = new DOG('大毛');
var dogB = new DOG('二毛');
dogA.species = '猫科';
console.log(dogA.species) //=>猫科
console.log(dogB.species) //=>猫科
console.log(dogA)
console.log(dogB)