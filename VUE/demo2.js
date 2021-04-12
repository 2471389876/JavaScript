// var app = new Vue({
//     el: '#app',
//     data: {
//         message: '<a href="http://www.itheima.com">黑马程序员</a>',
//         info: "学校！"
//     }
// })
// var app = new Vue({
//     el: '#app',
//     data: {
//         message: '<a href="http://www.itheima.com">黑马程序员</a>',
//         info: "你好！",
//         food: "西兰花"
//     },
//     methods: {
//         doIt: function () {
//             alert("你好")
//         },
//         changefood: function () {
//             this.food += "好吃！"
//         }
//     }
// })
var app = new Vue({
    el: '#app',
    data: {
        num: 1
    },
    methods: {
        add: function () {

            if (this.num < 10) {
                this.num++;
            } else {
                alert("最大值，不能点了");
            }
        },
        sub: function () {

            if (this.num > 0) {
                this.num--;
            } else {
                alert("最小值，不能点了");
            }
        }
    }
})