<template>
  <div id="app">
    {{ message }}
  </div>
</template>

<script>
import Vue from 'vue'
Vue({
  el: '#app',
  data: {
    message: 'Hello Vue !'
  }
})
</script>
