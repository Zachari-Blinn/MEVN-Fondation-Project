<template>
  <div>
    <Navigation />

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

    <!-- Apply (only if connected) -->
    <span v-if="isLoggedIn">
      <a :href="candidacy_url_create + advertisement._id">Apply</a>
    </span>
  </div>
</template>

<script>
import Navigation from "../partials/Navigation";
import axios from "axios";
import store from "../../store";

export default {
  props: ["id"],
  data() {
    return {
      store,
      advertisement: null,
      candidacy_url_create: "http://localhost:8080/candidacy/create/",
    };
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
  mounted() {
    axios({
      url: `http://localhost:8081/advertisement/${this.id}`,
      method: "get",
    }).then((response) => (this.advertisement = response.data));
  },
  components: {
    Navigation,
  },
};
</script>

<style></style>
