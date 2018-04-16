<template>
  <div id="translateForm">
      <form v-on:submit="formSubmit">
        <input type="text" placeholder="输入需要翻译的内容" v-model="textToTranslate">
        <select v-model="language">
          <option value="en">English</option>
          <option value="ru">Russian</option>
          <option value="ko">Korean</option>
          <option value="ja">Janpenese</option>
        </select>
        <input type="submit" value="翻译">
      </form>
  </div>
</template>

<script>

export default {
    name: 'translateForm',
    data(){
        return {
          textToTranslate:"",
          language:""
        }
    },
    methods:{
        formSubmit:function(event){
          this.$emit("formSubmit",this.textToTranslate,this.language);                 //注册事件,无关系,随便起名  App.vue中绑定方法
          event.preventDefault();
          // alert(this.textToTranslate)
        }
    },
    created:function(){
      this.language = "en";
    } 
}
</script>

<style>

</style>
