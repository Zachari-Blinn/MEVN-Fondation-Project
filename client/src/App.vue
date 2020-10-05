<template>
  <div id="app">
    <Navigation />
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navigation from './components/partials/Navigation'
import Footer from './components/partials/Footer'

export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  }
}
</script>
