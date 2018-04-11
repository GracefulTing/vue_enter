// 实例化vue对象
new Vue({
	el:"#vue-app",   //el:element　需要获取的元素,一定是html中的根容器元素.
	data:{            //data:用于数据的存储
		// name:"tt",
		old:22,
		website:"http://www.baidu.com",
		websiteTag:"<a href='http://www.baidu.com'>百度</a>",

		x:0,
		y:0,

		name:"",
		age:"",

		a:0,
		b:0,
		age:20,

		changeColor:false,
		changeLength:false,

		error:false,
		success:false,

		characters:["sw","ma","ed"],
		users:[
			{name:"tt",age:"20"},
			{name:"dd",age:"22"},
			{name:"wf",age:"21"}
		],
	},
	methods:{			//methods:用于存储各种方法
		greet:function(time){
			return 'Good ' + time + ' ' + this.name + '!';
		},
		add:function(inc){
			this.old += inc ;
		},
		substract:function(dec){
			this.old -= dec;
		},
		updateXY:function(event){
			// console.log(event)
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		stopMoving:function(event){
			event.stopPropagation();
		},
		alert:function(){
			alert("hello");
		},
		logName:function(){
			// console.log("正在输入名字...");
			this.name = this.$refs.name.value;
			// console.log(this.$refs.name.value)
		},
		logAge:function(){
			// console.log("正在输入年龄...");
			this.age = this.$refs.age.value;
		},
		// addToA:function(){
		// 	// console.log("add to a");
		// 	return this.a + this.age;
		// },
		// addToB:function(){
		// 	// console.log("add to b");
		// 	return this.b + this.age;
		// }
		//   一起执行
	},
	computed:{
		addToA:function(){
			// console.log("add to a");
			return this.a + this.age;
		},
		addToB:function(){
			// console.log("add to b");
			return this.b + this.age;
		},
		// 点击哪个执行哪个
		compClasses:function(){
			return {
				changeColor:this.changeColor,
				changeLength:this.changeLength
			}
		}
	}              
});

// data-binding:给属性绑定对应的值

// 渐进式:易用、灵活、高效。没有太多限制。和angular相比，angular有很多的限制。可以很好的融合，使用别的优秀的库，也可以被使用。


// {{方法()}}:不加()无法识别方法.
// 标签中事件方法可以不加(),传参数需要加();

// v-model:先绑定name属性,如果有内容,就会显示hello，绑定到元素上。

// computed:变化幅度大时使用，耗时和大量搜索，例如搜索,操作虚拟dom.
//methods方法都会执行.


// 多个实例化对象，修改前面的在最后一个里面修改，one.title="",最后一个的直接在外面修改:two.title="";

		 
//	v-show:display dom一直存在 　v-if:dom变化 

//	template无多于div,div有 


Vue.component("greeting",{
	template:"<p>{{name}}:hello,介绍vue组件<button @click='changeName'>改名字</button></p>",
	data:function(){
		return {
			name:'tt'
		}
	},
	methods:{
		changeName:function(){
			this.name = 'henry';
		}
	}
})

new Vue({
	el:"#vue-app-one"
})
new Vue({
	el:"#vue-app-two"
})

// var one = new Vue({
// 	el:"#vue-app-one",
//     data:{
//        title:'这是app-one的内容'
//     },
//     methods:{

//     }
// })
// var two = new Vue({
// 	el:"#vue-app-two",
//     data:{
//        title:'这是app-two的内容'
//     },
//     methods:{
//        changeTitle:function(){
//           one.title = "app-one的标题已经被改变了！";
//        }
//     }
// })

// two.title = 'app-two的标题也发生改变了！';