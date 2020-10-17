<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <a href="#!" class="brand-logo">Logo</a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"
          ><i class="material-icons">menu</i></a
        >
        <ul class="right hide-on-med-and-down">
          <li><router-link to="/">Home</router-link></li>
          <li>
            <router-link to="/company/create">Company create</router-link>
          </li>
          <li><router-link to="/company/index">Company index</router-link></li>
          <li>
            <router-link to="/advertisement/index"
              >Advertisement index</router-link
            >
          </li>
          <li>
            <span v-if="isLoggedIn"
              ><a :href="people_url_show + user._id">User page</a
              ><a @click="logout">Logout</a></span
            >
          </li>
          <li>
            <span v-if="!isLoggedIn"
              ><router-link to="/login">Login</router-link></span
            >
          </li>
          <li>
            <span v-if="!isLoggedIn"
              ><router-link to="/register">Register</router-link></span
            >
          </li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <li><router-link to="/">Home</router-link></li>
      <li>
        <router-link to="/company/create">Company create</router-link>
      </li>
      <li><router-link to="/company/index">Company index</router-link></li>
      <li>
        <router-link to="/advertisement/index">Advertisement index</router-link>
      </li>
      <li v-if="isLoggedIn">
        <a :href="people_url_show + user._id">User page</a><a @click="logout">Logout</a>
      </li>
      <li v-if="!isLoggedIn">
        <router-link to="/login">Login</router-link>
      </li>
      <li v-if="!isLoggedIn">
        <router-link to="/register">Register</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "../../store";

export default {
  store,
  data() {
    return {
      people_url_show: "http://localhost:8080/user/show/",
      user: JSON.parse(localStorage.getItem("people")),
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
  mounted() {
    M.AutoInit();
  },
};
</script>

<style>
nav {
  margin-bottom: 75px;
}
</style>