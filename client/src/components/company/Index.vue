<template>
  <div>
    <Navigation />
    <section>
      <div class="container">
        <div class="row">
          <h1 class="">Companies</h1>
          <div v-for="company in companies" :key="company._id">
            <div class="col s6">
              <div class="card">
                <div class="card-content">
                  <span class="card-title">{{ company.name }}</span>
                  <!-- TODO DESCRIPTION WITH TRUNCATE -->
                </div>
                <div class="card-action center">
                  <a :href="company_url + company._id">Seen Company</a>
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

export default {
  data() {
    return {
      companies: null,
      company_url: "http://localhost:8080/company/show/",
    };
  },
  mounted() {
    axios
      .get("http://localhost:8081/company")
      .then((response) => (this.companies = response.data));
  },
  components: {
    Navigation,
  },
};
</script>

<style>
</style>