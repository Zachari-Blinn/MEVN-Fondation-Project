<template>
  <div>
    <h2>Nav Bar</h2>
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/company/create">Company create</router-link>
      <router-link to="/advertisement/create">Advertisement create</router-link>
      <router-link to="/candidacy/create">Candidacy create</router-link>
      <span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
      <span v-else> | <router-link to="/login">Login</router-link></span>
    </nav>
  </div>
</template>

<script>
import store from "../../store";
import axios from "axios";
const API_URL = 'http://localhost:8081/people';

export default {
  store,
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    logout: function () {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
  },
  mounted () {
    axios
      .get(API_URL)
      .then((response) => (
        console.log(response.data)
      ));
  },
};
</script>
