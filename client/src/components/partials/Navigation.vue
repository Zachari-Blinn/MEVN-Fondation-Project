<template>
  <div>
    <h2>Nav Bar</h2>
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/company/create">Company create</router-link>
      <router-link to="/company/index">Company index</router-link>
      <router-link to="/advertisement/index">Advertisement index</router-link>
      <span v-if="isLoggedIn"> |
        <a :href="people_url_show + user._id">User page</a> | 
        <a @click="logout">Logout</a>
      </span>
      <span v-else> | <router-link to="/login">Login</router-link></span>
      <span v-if="!isLoggedIn"> |
      <router-link to="/register">Register</router-link></span>
    </nav>
  </div>
</template>

<script>
import store from "../../store";

export default {
  store,
    data() {
    return {
      people_url_show: "http://localhost:8080/user/show/",
      user: JSON.parse(localStorage.getItem('people'))
    };
  },
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
};
</script>
