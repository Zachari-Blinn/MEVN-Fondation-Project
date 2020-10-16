<template>
  <div>
    <h1>Index</h1>
    
    <ul id="example-1">
      <li v-for="advertisement in advertisements" :key="advertisement._id">
        {{ advertisement.name }}
        <a :href="advertisement_url_show + advertisement._id">Seen</a>
        <a :href="candidacy_url_create + advertisement._id">Apply</a>
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
      advertisement_url_show: "http://localhost:8080/advertisement/show/",
      candidacy_url_create: "http://localhost:8080/candidacy/create/"
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