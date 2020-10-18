<template>
  <div>
    <Navigation />

    <h1>Index</h1>

    <ul id="example-1">
      <li v-for="candidacy in candidacies" :key="candidacy._id">
        {{ candidacy }}
      </li>
    </ul>
  </div>
</template>

<script>
import Navigation from "../partials/Navigation";
import axios from "axios";

export default {
  data() {
    return {
      candidacies: null,
      //advertisement_url_show: "http://localhost:8080/advertisement/show/",
      //candidacy_url_create: "http://localhost:8080/candidacy/create/"
    };
  },
  mounted() {
    axios
      .get("http://localhost:8081/candidacy")
      .then((response) => (this.candidacies = response.data));
  },
  components: {
    Navigation,
  },
};
</script>

<style>
</style>