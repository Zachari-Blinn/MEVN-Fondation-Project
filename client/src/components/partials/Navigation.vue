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
          <li><router-link to="/company/index">Companies</router-link></li>
          <li>
            <router-link to="/advertisement/index">Advertisements</router-link>
          </li>
          <li v-show="isLoggedIn">
            <a @click="logout">Logout</a>
          </li>
          <li v-show="!isLoggedIn">
            <span><router-link to="/login">Login</router-link></span>
          </li>
          <li v-show="!isLoggedIn">
            <span><router-link to="/register">Register</router-link></span>
          </li>
          <li v-show="isAdmin">
            <router-link to="/admin/people">Admin Panel</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <li>
        <router-link to="/"><i class="material-icons">home</i>Home</router-link>
      </li>
      <li>
        <router-link to="/company/index"
          ><i class="material-icons">work</i>Companies</router-link
        >
      </li>
      <li>
        <router-link to="/advertisement/index"
          ><i class="material-icons">whatshot</i>Advertisements</router-link
        >
      </li>
      <li v-show="!isLoggedIn">
        <router-link to="/login">Login</router-link>
      </li>
      <li v-show="!isLoggedIn">
        <router-link to="/register">Register</router-link>
      </li>
      <li v-show="isAdmin">
        <router-link to="/admin/people"
          ><i class="material-icons">grade</i>Admin Panel</router-link
        >
      </li>
      <li v-show="isLoggedIn">
        <ul class="collapsible">
          <li>
            <div class="collapsible-header">
              <i class="material-icons">account_circle</i>{{ user.firstname }}
              {{ user.lastname }}
            </div>
            <div class="collapsible-body">
              <ul>
                <li v-show="isLoggedIn">
                  <a :href="people_dashboard_url_show + user._id">My Userpage</a>
                </li>
                <li v-show="isLoggedIn">
                  <a :href="dashboard_url_show + user._id">My Company</a>
                </li>
                <li v-show="isLoggedIn">
                  <a class="red-text" href="" @click="logout"
                    ><i class="material-icons red-text">exit_to_app</i>Logout</a
                  >
                </li>
              </ul>
            </div>
          </li>
        </ul>
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
      people_dashboard_url_show: "http://localhost:8080/user/dashboard/",
      dashboard_url_show: "http://localhost:8080/company/dashboard/",
      user: JSON.parse(localStorage.getItem("people")) || "",
    };
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
    isAdmin: function () {
      return this.$store.getters.isAdmin;
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