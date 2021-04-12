// v - show使用
// var app = new Vue({
//     el: '#app',
//     data: {
//         isShow: false,
//         age: 17
//     },
//     methods: {
//         changeIsShow: function () {
//             this.isShow = !this.isShow;
//         },
//         addAge: function () {
//             this.age++;
//         }
//     }
// })

// v - if使用
// var app = new Vue({
//     el: '#app',
//     data: {
//         isShow: false,
//         tempture: 34
//     },
//     methods: {
//         changeIsShow: function () {
//             this.isShow = !this.isShow;
//         },
//         changeTemp: function () {
//             this.tempture++;
//         }
//     }
// })

//v-bind使用
// var app = new Vue({
//     el: '#app',
//     data: {
//         imgSrc: 'http://www.itheima.com/images/logo.png',
//         Title: "黑马程序员",
//         isActive: false
//     },
//     methods: {
//         change: function () {
//             this.isActive = !this.isActive;
//         }
//     }
// })

//图片切换
var app = new Vue({
    el: '#mask',
    data: {
        imgSrc: ['image/1.jpg', 'image/2.jpg', 'image/3.jpg'],
        index: 0
    },
    methods: {
        prev: function () {
            this.index--;
        },
        next: function () {
            this.index++;
        }
    }
})