# vue_enter

###  第七课  vuex入门


vuex:充当一个桥梁角色,方便组件的共用和传值.
触发事件改变:mutation
获取:getter
存储:state

安装淘宝镜像:(sudo) npm install -g cnpm --registry=https://registry.npm.taobao.org
->使用cnpm   cnpm -v
安装脚手架:(sudo) cnpm install -g vue-cli
->vue -V测试
->vue init webpack-simple vuex-demo
->cd vuex-demo
->cnpm install 
->cnpm run dev
父组件中的products在子组件中使用,绑定了products，子组件中props使用
->cnpm install vuex --save
->在package.json中查看
->src下新建store文件,新建store.js
->main.js
->App.vue->one.vue->two.vue

->更多工具->扩展程序->更多->vue.js devtools->添加

->mapGetters和mapActions
->cnpm install babel-preset-stage-2 --save-dev
->.babelrc:
