<template>
  <div>
    <h1>{{ company.name }}</h1>
    <p>{{ company.description }}</p>
    <a :href="url + company._id">Create Ads</a>
    <!-- TODO afficher les annonces de l'entreprise -->
    <h2>Ads:</h2>
    <li v-for="advertisement in advertisements" :key="advertisement._id">
      {{ advertisement.name }}
    </li>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      company: null,
      advertisements: null,
      url: "http://localhost:8080/advertisement/create/",
    };
  },
  mounted() {
    axios({
      url: `http://localhost:8081/company/${this.id}`,
      method: "get",
    }).then((response) => (
      this.company = response.data
    ));

    axios({
      url: `http://localhost:8081/advertisement/company/${this.id}`,
      method: 'get',
    }).then((response) => (
      this.advertisements = response.data
    ));
  },
};
</script>

<style>
</style>
