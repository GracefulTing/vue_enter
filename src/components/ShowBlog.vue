<template>
  <!-- wide字符串,数组/对象也可以 -->
  <div id="show-blog" v-theme:column="'wide'">    
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <!-- <div class="single-blog" v-for="blog in blogs"> -->
    <div class="single-blog" v-for="blog in filteredBlogs">
      <router-link v-bind:to="'/blog/'+blog.id"><h2 v-rainbow>{{blog.title | to-uppercase}}</h2></router-link>
      <article>{{blog.body | snippet}}</article>
    </div>
  </div>
</template>

<script>


export default {
  name: 'show-blog',
  data(){
    return {
      blogs:[],
      search:''
    }
  },
  created(){
    this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function(data){
      // console.log(data);                  //本地json文件放在static下才可以访问
      this.blogs = data.body.slice(0,10);
    })
  },
  computed:{
    filteredBlogs:function(){
      return this.blogs.filter((blog)=>{
        return blog.title.match(this.search);
      })
    }
  },
  // 局部
  filters:{
    "to-uppercase":function(value){
      return value.toUpperCase();
    }
    // toUpperCase(value){
    //   return value.toUpperCase();
    // }
  },
  directives:{
    'rainbow':{
      bind(el,binding,vnode){
        el.style.color='#' + Math.random().toString(16).slice(2,8);;
      }
    }
  }
}
</script>

<style>
#show-blog{
  max-width:800px;
  margin:0 auto;
}
.single-blog{
  padding:20px;
  margin:20px 0;
  box-sizing: border-box;
  background: #eee;
  border:1px dotted #aaa;
}

#show-blog a{
  text-decoration: none;
  color:#444;
}

input[type="text"]{
  padding:8px;
  width:100%;
  box-sizing: border-box;
}

</style>