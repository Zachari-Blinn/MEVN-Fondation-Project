<template>
  <div>
    <h1>{{ company.name }}</h1>
    <p>{{ company.description }}</p>
    <a :href="url + company._id">Create Ads</a>
    <!-- TODO afficher les annonces de l'entreprise -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      company: null,
      url: "http://localhost:8080/advertisement/create/"
    };
  },
  mounted() {
    axios({
      url: `http://localhost:8081/company/${this.id}`,
      method: "get",
    })
      .then((response) => (this.company = response.data))
  },
};
</script>

<style>
</style>
