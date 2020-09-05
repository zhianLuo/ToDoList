
var app = new Vue({
    el: '#app',
    data: {
        title: 'ToDolist',
        inpVal: '',
        todolist: JSON.parse(window.localStorage.getItem("todo")),
        donelist: JSON.parse(window.localStorage.getItem("done")),
    },
    methods: {
        //初始化
        init: function () {
            localStorage.setItem("todo", JSON.stringify(this.todolist));
            localStorage.setItem("done", JSON.stringify(this.donelist));
        },
        //添加任务
        add: function () {
            if (this.inpVal) {
                this.todolist.push({
                    text: this.inpVal
                });
                this.inpVal = '';
                this.init();
            }
        },
        //完成任务--移动到完成列表
        finish: function (index) {
            var item1 = this.todolist.splice(index, 1);
            this.donelist.unshift(item1[0]);
            this.init();
        },
        //从完成列表移动到待办列表
        reAdd: function (index) {
            var item2 = this.donelist.splice(index, 1);
            this.todolist.push(item2[0]);
            this.init();
        },
        //删除待办列表事件
        deltodo: function (index) {
            this.todolist.splice(index, 1);
            this.init();
        },
        //删除完成列表事件
        deldone: function (index) {
            this.donelist.splice(index, 1);
            this.init();
        },
        //修改内容
        todoRevise:function(){
            this.init();
        },
        doneRevise:function(){
            this.init();
        },
        //删除全部事件
        delAll:function(){
            this.todolist = [];
            this.donelist = [];
            // localStorage.clear();
            this.init();
        }
    }
});