<template>
	<div class="test">
		<!--  获取数据 -->
		<h1>{{title}}</h1>
		<p>{{user.firstName}}</p>
		<p v-text="user.lastName"></p>

		<!-- v-if -->
		<p v-if="showName">{{user.firstName}}</p>
		<p v-else>Nobody</p>

		<!-- v-for -->
		<ul>
			<li v-for="item in items">{{item.title}}</li>
		</ul>

		<!-- v-on -->
		<button v-on:click="greet('hello everybody!')">Say Greeting</button>

		<!-- 键盘事件 -->
		<input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">

		<hr>
		<!-- computed计算属性 -->
		<label>First Name:</label>
		<input type="text" v-model="user.firstName">
		<label>Last Name:</label>
		<input type="text" v-model="user.lastName">
		<br>
		<h3>{{fullName}}</h3>

		<!-- props 属性 -->
		<h2>{{msg}}</h2>
	</div>
</template>

<script>
	export default{
		name:"test",        //name属性很重要，通常和组件名一样，小写   这里的name是啥，App.vue中标签就是啥
		props:{
			msg:{
				type:String,
				default:"默认是当前这些文字"
			}
		},
		data(){
			return {
				title:'Hello vue.js',
				user:{
					firstName:'yaya',
					lastName:'Wang'
				},
				showName:false,
				items:[
					{title:'item1'},
					{title:'item2'},
					{title:'item3'}
				]
			}
		},
		methods:{
			greet:function(greeting){
				alert(greeting);
			},
			pressKey:function(){
				console.log('正在输入...');
			},
			enterHit:function(){
				console.log("你按下了回车键!");
			}
		},
		computed:{
			fullName:function(){
				return this.user.firstName + " " + this.user.lastName;
			}
		}
	}
</script>

<style scoped>
	
</style>


<!-- 
没有热加载，每次必须重新npm run dev
解决，只留下一个终端运行项目,关闭另一终端。
 -->