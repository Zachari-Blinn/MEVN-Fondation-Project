<template>
  <div id="app">
    <router-view />
    <Footer />
  </div>
</template>

<script>
//import Navigation from "./components/partials/Navigation"
import Footer from "./components/partials/Footer"
import store from './store'

export default {
  name: "App",
  store,
<<<<<<< HEAD
  mounted () {
    M.AutoInit()
=======
  components: {
    //Navigation,
    Footer
>>>>>>> a7a9a89971a3b90153883ecc5d45cfd8f61cd8fc
  }
};
</script>
