// v-for使用
// var app = new Vue({
//     el: '#app',
//     data: {
//         arr: ['北京', "上海", "深圳"],
//         vet: [{ name: '西兰花' }, { name: "花菜" }]
//     },
//     methods: {
//         add: function () {
//             this.vet.push({ name: "西红柿" });
//         },
//         remove: function () {
//             this.vet.shift();
//         }
//     }

// })

// v - on使用
// var app = new Vue({
//     el: '#app',
//     methods: {
//         add: function (p1, p2) {
//             console.log(p1);
//             console.log(p2);
//         },
//         remove: function () {
//             alert("吃了没");
//         }
//     }

// })

// v-model使用
// var app = new Vue({
//     el: '#app',
//     data: {
//         message: '黑马程序员'
//     },
//     methods: {
//         getM: function () {
//             alert(this.message);
//         },
//         setM: function () {
//             this.message = "你好";
//         }
//     }

// })

var app = new Vue({
    el: '#todoapp',
    data: {
        list: ["写代码", "吃饭饭", "睡觉觉"],
        inputValue: "好好学习，天天向上"
    },
    methods: {
        add: function () {
            this.list.push(this.inputValue);
        },
        remove: function (index) {
            this.list.splice(index, 1);
        },
        clear: function () {
            this.list = [];
        }
    }
})