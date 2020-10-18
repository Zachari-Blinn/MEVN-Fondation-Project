<template>
  <div>
    <Navigation />
    <section>
      <div class="container">
        <div class="row">
          <div class="col s12">
            <div class="card">
              <div class="card-content">
                <h1 class="center">{{ company.name }}</h1>
                <p>{{ company.description }}</p>
                <a :href="url + company._id">Create Ads</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row">
          <h3>{{ company.name }} Advertisement:</h3>
          <div v-for="advertisement in advertisements" :key="advertisement._id">
            <div class="col s6">
              <div class="card">
                <div class="card-content">
                  <span class="card-title">{{ advertisement.name }}</span>
                  <!-- TODO DESCRIPTION WITH TRUNCATE -->
                </div>
                <div class="card-action center">
                  <div v-if="isLoggedIn">
                    <a :href="candidacy_url_create + advertisement._id"
                      >Apply</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navigation from "../partials/Navigation";
import axios from "axios";
import store from "../../store";

export default {
  props: ["id"],
  store,
  components: {
    Navigation,
  },
  data() {
    return {
      company: null,
      advertisements: null,
      url: "http://localhost:8080/advertisement/create/",
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
      url: `http://localhost:8081/company/${this.id}`,
      method: "get",
    }).then((response) => (this.company = response.data));

    axios({
      url: `http://localhost:8081/advertisement/company/${this.id}`,
      method: "get",
    }).then((response) => (this.advertisements = response.data));
  },
};
</script>

<style>
</style>
