<template>
  <div class="edit-blog">
    <h2>编辑博客</h2>
    <form v-if="!submited">
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required />
      <label>博客内容</label>
      <textarea v-model="blog.content"></textarea>

      <div id="checkboxes">
        <label>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories">
        <label>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories">
        <label>React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories">
        <label>Angular4.js</label>
        <input type="checkbox" value="Angular4.js" v-model="blog.categories">
      </div>

      <label>作者:</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{author}}</option>
      </select>

      <button v-on:click.prevent="post">添加博客</button>
    </form>
    <div v-if="submited">
      <h3>您的博客发布成功！</h3>
    </div>
    <hr>
    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题:{{blog.title}}</p>
      <p>博客内容:</p>
      <p>{{blog.content}}</p>
      <p>博客分类:</p>
      <ul>
        <li v-for="category in blog.categories">{{category}}</li>
      </ul>
      <p>作者:{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
import axios from '../axios-auth'

export default {
  name: 'edit-blog',
  data () {
    return {
      id:this.$route.params.id,
      blog:{
        title:"",
        content:"",
        categories:[],
        author:""
      },
      authors:["tt","wf","ll"],
      submited:false           //是否点击提交事件
    }
  },
  methods:{
    post:function(){
      this.$http.post("/posts",this.blog).then(function(data){
        // console.log(data);
        this.submited = true;
      })
    },
    fetchData:function(){
    	// console.log(this.id);
    	axios.get("/posts/" + this.id).then(response=>{
    		// console.log(response.body);
    		this.blog = response.body;
    	})
    }
  },
  created(){
  	this.fetchData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
