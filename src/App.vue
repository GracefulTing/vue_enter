<template>
  <div id="app">
    <h1>在线翻译</h1>
    <h5 class="text-muted">简单 / 易用 / 便捷</h5>
    <translateForm v-on:formSubmit="translateText"></translateForm>
    <translateOutput v-text="translatedText"></translateOutput>
  </div>
</template>

<script>
import TranslateForm from './components/translateForm'
import TranslateOutput from './components/translateOutput'

export default {
  name: 'App',
  components: {
    TranslateForm,
    TranslateOutput
  },
  data:function(){
    return {
      translatedText:''
    }
  },
  methods:{
    translateText:function(text,language){
      // alert(text);
      this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180416T070909Z.e67aefe9783c2249.655622543855bc0c994a38e347e43f047f8100b0&lang='+language+'&text=' + text).then((response) => {
           // console.log(response.body.text[0]);
           this.translatedText = response.body.text[0];
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
