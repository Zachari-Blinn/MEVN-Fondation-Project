<template>
  <div>
    <h1>Index</h1>
    
    <ul id="example-1">
      <li v-for="advertisement in advertisements" :key="advertisement._id">
        {{ advertisement.name }}
        <a :href="advertisement_url + advertisement._id">Seen Ad</a>
      </li>
    </ul>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      advertisements: null,
      advertisement_url: "http://localhost:8080/advertisement/show/"
    };
  },
  mounted() {
    axios
      .get("http://localhost:8081/advertisement")
      .then((response) => (this.advertisements = response.data));
  },
};
</script>

<style>
</style>