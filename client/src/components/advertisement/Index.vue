<template>
  <div>
    <Navigation />
  <div class="container">
  <div class="card">
    <div class="col s12 m12 l9 xl9 centrer" style="margin-bottom: 100px;">
            <div class="card">
              <div class="card-content">
                <h3 class="center">{{ title }}</h3>
                <div class="row">

<<<<<<< HEAD
    <div class="container">
      <div class="row">
        <div class="col s12">
          <div class="card">
            <div class="card-content">
              <h1 class="center">Advertisement</h1>
                <ul class="collapsible">
                  <li>
                    <div class="collapsible-header"><i class="material-icons">search</i>Filter</div>
              <div class="collapsible-body">
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
                  </li>
                </ul>
=======
                  <form class="col s12" action="" method="post">


                      <div>

                        <!-- Name -->
                        <div class="row">
                          <div class="input-field col s12">
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" v-model="name" />
                          </div>
                        </div>

                        <!-- Salary -->
                        <div class="row">
                          <div class="input-field col s12">
                            <label for="salary">Salary</label>
                            <input type="number" name="salary" id="salary" v-model="salary">
                          </div>
                        </div>

                        <!-- Contract Type -->
                        <div class="row">
                          <div class="input-field col s12">
                            <p>Contract type</p>
                            <select name="contract_type" id="contract_type" v-model="contract_type">
                              <option value="">All</option>
                              <option value="CDI">CDI</option>
                              <option value="CDD">CDD</option>
                              <option value="CTT">CTT</option>
                              <option value="CUI">CUI</option>
                              <option value="CAE">CAE</option>
                              <option value="CIE">CIE</option>
                            </select>
                          </div>
                        </div>

                        <!-- Education -->
                        <div class="row">
                          <div class="input-field col s12">
                            <p>Education</p>
                            <select name="education" id="education" v-model="education">
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
                        </div>


                        <!-- Remote -->
                        <div class="row">
                          <div class="input-field col s12">
                            <p>Remote</p>
                            <select name="remote" id="remote" v-model="remote">
                              <option value="">All</option>
                              <option value="unremote">Unremote</option>
                              <option value="partially_remote">Partially remote</option>
                              <option value="distributed_team">Distributed team</option>
                              <option value="full_remote">Full remote</option>
                            </select>
                          </div>
                        </div>

                        <!-- Language -->
                        <div class="row">
                          <div class="input-field col s12">
                            <p>Language</p>
                            <select name="language" id="language" v-model="language">
                              <option value="">All</option>
                              <option value="en">English</option>
                              <option value="fr">French</option>
                              <option value="de">German</option>
                              <option value="it">Italian</option>
                            </select>
                          </div>
                        </div>
                      </div>
 

                      <!-- Button -->
                      <div>
                        <button class="btn" type="submit" @click.prevent="search()">Search</button>
                      </div>
                    </form>
                </div>
              </div>
>>>>>>> a7a9a89971a3b90153883ecc5d45cfd8f61cd8fc
            </div>
          </div>


<!----------------------------------------------------------------------------------------------------------------->
    <div class="row">
      <div class="col s12" style="margin-bottom: 100px">
        <div class="section">
          <!-------------------------------------------------->
          <div class="col s12 m6 l4" v-for="advertisement in advertisements" :key="advertisement._id">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <section id="grid">
                  <div class="box">
                    <div class="box-content box-titre">
                      <h4> {{ advertisement.name }} </h4> |
                      <a :href="advertisement_url_show + advertisement._id">Seen</a> |
                      <a :href="candidacy_url_create + advertisement._id">Apply</a>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <!-------------------------------------------------->
        </div>
      </div>
    </div>
    </div>
  </div>
  </div>
</template>

<script>
import Navigation from "../partials/Navigation";
import axios from "axios";

export default {
  data() {
    return {
      title: 'Advertisement Index',
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
        M.AutoInit();
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


<!--------------------------------------------------	CSS	------------------------------------->
<style scoped>
main {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.page {
  display: flex;
  justify-content: center;
}

section {
  width: 100%;
  max-width: 862px;
  height: 18vh;
  max-height: 500px;
  background-color: black;
  color: white;
}

#grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
  width: 100%;
}

.box {
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
}
.box-content {
  width: 100%;
}
.box-info {
  width: 100%;
  margin: 0;
  padding: 0;
}

.box-titre {
  text-align: left;
  padding-left: 50px;
}

.box:nth-child(1) {
  background-color: #008c9e !important;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 1;
  text-align: center;
}


ul {
  margin-right: 9%;
}
a{
  color: black;
}
</style>