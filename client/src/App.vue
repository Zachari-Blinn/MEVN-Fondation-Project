<template>
  <div id="app">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.css"
        integrity="sha512-t38vG/f94E72wz6pCsuuhcOPJlHKwPy+PY+n1+tJFzdte3hsIgYE7iEpgg/StngunGszVMrRfvwZinrza0vMTA=="
        crossorigin="anonymous" />

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <router-view />
  </div>
</template>

<script>
//import Navigation from "./components/partials/Navigation"
//import Footer from "./components/partials/Footer"
import store from './store'

import M from 'materialize-css'

export default {
  name: "App",
  store,
  mounted () {
    M.AutoInit()
  }
};

</script>
