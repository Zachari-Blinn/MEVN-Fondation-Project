<template>
  <div>
    <h1>Advertisement show {{ advertisement.name }}</h1>
    <ul>
      <li>{{ advertisement.description }}</li>
      <li>{{ advertisement.salary }}</li>
      <li>{{ advertisement.starting_date }}</li>
      <li>{{ advertisement.ending_date }}</li>
      <li>{{ advertisement.contract_type }}</li>
      <li>{{ advertisement.education }}</li>
      <li>{{ advertisement.remote }}</li>
      <li>{{ advertisement.language }}</li>
    </ul>
    
    <!-- Candidater -->
    <a :href="url + advertisement.company">Send Candidacy</a>

  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      advertisement: null,
      url: "http://localhost:8080/candidacy/create/"
    };
  },
  mounted() {
    axios({
      url: `http://localhost:8081/advertisement/${this.id}`,
      method: "get",
    })
      .then((response) => (this.advertisement = response.data))
  },
};
</script>

<style></style>
