<template>
  <div>
    <Navigation />

    <div class="container">
      <div class="row">
        <div class="col s12">
          <div class="card">
            <div class="card-content">
              <h1 class="center">Advertisement</h1>
              <section>
                <form action="" method="post">
                  <div>
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" v-model="name" />
                  </div>
                  <div>
                    <label for="salary">Salary</label>
                    <input
                      type="number"
                      name="salary"
                      id="salary"
                      v-model="salary"
                    />
                  </div>
                  <div class="input-field col s12">
                    <label for="contract_type">Contract Type</label>
                    <select name="contract_type" id="contract_type" v-model="contract_type">
                      <option value="" disabled selected></option>
                      <option value="">All</option>
                      <option value="CDI">CDI</option>
                      <option value="CDD">CDD</option>
                      <option value="CTT">CTT</option>
                      <option value="CUI">CUI</option>
                      <option value="CAE">CAE</option>
                      <option value="CIE">CIE</option>
                    </select>
                  </div>
                  <div class="input-field col s12">
                    <label for="education">Education</label>
                    <select name="education" id="education" v-model="education">
                      <option value="" disabled selected></option>
                      <option value="">All</option>
                      <option value="1">Step 1</option>
                      <option value="2">Step 2</option>
                      <option value="3">CAP, BEP</option>
                      <option value="4">Bac</option>
                      <option value="5">BTS, DUT</option>
                      <option value="6">Licence</option>
                      <option value="7">Master</option>
                      <option value="8">Doctoral</option>
                    </select>
                  </div>
                  <div class="input-field col s12">
                    <label for="remote">Remote</label>
                    <select name="remote" id="remote" v-model="remote">
                      <option value="" disabled selected></option>
                      <option value="">All</option>
                      <option value="unremote">Unremote</option>
                      <option value="partially_remote">Partially remote</option>
                      <option value="distributed_team">Distributed team</option>
                      <option value="full_remote">Full remote</option>
                    </select>
                  </div>
                  <div class="input-field col s12">
                    <label for="language">Language</label>
                    <select name="language" id="language" v-model="language">
                      <option value="" disabled selected></option>
                      <option value="">All</option>
                      <option value="en">English</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                      <option value="it">Italian</option>
                    </select>
                  </div>
                  <div>
                    <button class="btn" type="submit" @click.prevent="search()">
                      Search
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div v-for="advertisement in advertisements" :key="advertisement._id">
          <div class="col s6">
            <div class="card">
              <div class="card-content">
                <span class="card-title">{{ advertisement.name }}</span>
                <!-- TODO DESCRIPTION WITH TRUNCATE -->
              </div>
              <div class="card-action center">
                <a :href="advertisement_url_show + advertisement._id">Seen</a>
                <a :href="candidacy_url_create + advertisement._id">Apply</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navigation from "../partials/Navigation";

export default {
  data() {
    return {
      advertisements: null,
      advertisement_url_show: "http://localhost:8080/advertisement/show/",
      candidacy_url_create: "http://localhost:8080/candidacy/create/",
      name: null,
      salary: null,
      contract_type: null,
      education: null,
      remote: null,
      language: null,
    };
  },
  mounted() {
    this.search();
  },
  methods: {
    search: function () {
      axios
        .post("http://localhost:8081/advertisement/search", {
          name: this.name,
          salary: this.salary,
          contract_type: this.contract_type,
          education: this.education,
          remote: this.remote,
          language: this.language,
        })
        .then((response) => (this.advertisements = response.data));
    },
  },
  components: {
    Navigation,
  },
};
</script>

<style>
</style>