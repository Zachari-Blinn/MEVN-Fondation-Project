<template>
  <div id="app">
    <Navigation />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navigation from "./components/partials/Navigation"
import Footer from "./components/partials/Footer"
import store from './store'

export default {
  name: "App",
  store,
  components: {
    Navigation,
    Footer
  }
};
</script>
