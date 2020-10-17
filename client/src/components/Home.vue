<template>
  <div id="app">
    <Navigation />

    <h1>{{ page_name }} page</h1>
  </div>
</template>

<script>
import Navigation from "./partials/Navigation";

export default {
  data() {
    return {
      page_name: "Home controller",
    };
  },
  components: {
    Navigation,
  },
};
</script>
