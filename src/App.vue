<template>
  <div id="app">
      <!--两个组件的联系 -->
      <!-- <test msg="这是新的属性值！"></test>-->

      <users></users>
  </div>
</template>

<script>

// import Test from './components/Test'
import Users from './components/Users'

export default {
  name: 'App',
  components: {
      // Test
      Users
  }
}
</script>

<style>

</style>
