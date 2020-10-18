<template>
<<<<<<< HEAD
  <div>
    <Navigation />
    <div class="container">
      <div class="row">
        <div class="col s12">
          <div class="card">
            <div class="card-content">
              <h1 class="center">Advertisement</h1>
              <div class="row">
                <div class="col s12">
                  <form>
                    <div>
                      <label for="name">Name</label>
                      <input
                        id="name"
                        v-model="name"
                        type="text"
                        name="name"
                        required
                      />
                    </div>
                    <div>
                      <label for="description">Description</label>
                      <textarea
                      class="materialize-textarea"
                        name="description"
                        id="description"
                        v-model="description"
                      ></textarea>
                    </div>
                    <div>
                      <label for="salary">Salary</label>
                      <input
                        id="salary"
                        v-model="salary"
                        type="number"
                        name="salary"
                      />
                    </div>
                    <div>
                      <label for="starting_date">Starting date</label>
                      <input
                        class="datepicker"
                        id="starting_date"
                        v-model="starting_date"
                        type="text"
                        name="starting_date"
                      />
                    </div>
                    <div>
                      <label for="ending_date">Ending date</label>
                      <input
                        class="datepicker"
                        id="ending_date"
                        v-model="ending_date"
                        type="text"
                        name="ending_date"
                      />
                    </div>
                    <div>
                      <label for="contract_type">Contract type</label>
                      <select
                        name="contract_type"
                        id="contract_type"
                        v-model="contract_type"
                      >
                        <option value="" disabled>
                          Please select an option
                        </option>
                        <option value="">Whatever</option>
                        <option value="ALTERNATION">Alternation</option>
                        <option value="CDI">CDI</option>
                        <option value="CDD">CDD</option>
                        <option value="CTT">CTT</option>
                        <option value="CUI">CUI</option>
                        <option value="CAE">CAE</option>
                        <option value="CIE">CIE</option>
                      </select>
                    </div>
                    <div>
                      <label for="education">Education</label>
                      <select
                        name="education"
                        id="education"
                        v-model="education"
                      >
                        <option value="" disabled>
                          Please select an option
                        </option>
                        <option value="0">Whatever</option>
                        <option value="1">Level 1</option>
                        <option value="2">Level 2</option>
                        <option value="3">Level 3</option>
                        <option value="4">Level 4</option>
                        <option value="5">Level 5</option>
                        <option value="6">Level 6</option>
                        <option value="7">Level 7</option>
                        <option value="8">Level 8</option>
                      </select>
                    </div>
                    <div>
                      <label for="remote">Remote</label>
                      <select name="remote" id="remote" v-model="remote">
                        <option value="" disabled>
                          Please select an option
                        </option>
                        <option value="">Whatever</option>
                        <option value="unremote">Unremote</option>
                        <option value="partially_remote">
                          Partially Remote
                        </option>
                        <option value="distributed_team">
                          Distributed Team
                        </option>
                        <option value="full_remote">Full Remote</option>
                      </select>
                    </div>
                    <div>
                      <label for="language">Language</label>
                      <select name="language" id="language" v-model="language">
                        <option value="" disabled>
                          Please select an option
                        </option>
                        <option value="">Whatever</option>
                        <option value="en">English</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="i">Italian</option>
                      </select>
                    </div>
                    <div>
                      <button
                        class="btn"
                        type="submit"
                        @click.prevent="complete()"
                      >
                        Create
                      </button>
                    </div>
=======
      <div>
        <Navigation />
        <div>
          <div class="col s12 m12 l9 xl9 centrer" style="margin-bottom: 100px;">
            <div class="card">
              <div class="card-content">
                <h3 class="center">{{ title }}</h3>
                <div class="row">
                  <form class="col s12">

                    <!-- Step 1 -->
                    <template>
                      <div>

                        <!-- Name -->
                        <div class="row">
                          <div class="input-field col s12">
                            <input id="name" type="text" class="validate" v-model="name" required autofocus>
                            <label for="name">Advertissement Name</label>
                            <span class="helper-text" data-error="wrong" data-success="right"></span>
                          </div>
                        </div>

                        <!-- Description -->
                        <div class="row">
                          <div class="input-field col s12">
                            <input id="description" type="text" class="validate" v-model="description" required autofocus>
                            <label for="description">Description</label>
                            <span class="helper-text" data-error="wrong" data-success="right"></span>
                          </div>
                        </div>

                        <!-- Salary -->
                        <div class="row">
                          <div class="input-field col s12">
                            <label for="salary">Salary</label>
                            <input id="salary" min="0" v-model="salary" type="number" required/>
                            <span class="helper-text" data-error="wrong" data-success="right"></span>
                          </div>
                        </div>

                        <!-- Contract Type -->
                        <div class="row">
                          <div class="input-field col s12">
                            <p>Contract type</p>
                            <select name="contract_type" id="contract_type" v-model="contract_type" required>
                              <option value="" disabled>Please select an option</option>
                              <option value="">Whatever</option>
                              <option value="ALTERNATION">Apprenticeship</option>
                              <option value="CDI">CDI</option>
                              <option value="CDD">CDD</option>
                              <option value="CTT">CTT</option>
                              <option value="CUI">CUI</option>
                              <option value="CAE">CAE</option>
                              <option value="CIE">CIE</option>
                            </select>
                          </div>
                        </div>

                        <!-- Starting Date -->
                        <div class="row">
                          <div class="input-field col s12" required>
                            <p>Starting Date</p>
                            <label for="starting_date"></label>
                            <input
                              id="starting_date"
                              v-model="starting_date"
                              type="date"
                              name="starting_date"
                            />
                          </div>
                        </div>

                        <!-- Ending Date -->
                        <div class="row">
                          <div class="input-field col s12">
                            <p>Ending Date</p>
                            <label for="ending_date"></label>
                            <input
                              id="ending_date"
                              v-model="ending_date"
                              type="date"
                              name="ending_date"
                            />
                          </div>
                        </div>


                        <!-- Contract Type -->
                        <div class="row">
                          <div class="input-field col s12">
                            <p>Education</p>
                            <select name="education" id="education" v-model="education" required>
                              <option value="" disabled>Please select an option</option>
                              <option value="0">Whatever</option>
                              <option value="1">Level 1</option>
                              <option value="2">Level 2</option>
                              <option value="3">Level 3</option>
                              <option value="4">Level 4</option>
                              <option value="5">Level 5</option>
                              <option value="6">Level 6</option>
                              <option value="7">Level 7</option>
                              <option value="8">Level 8</option>
                            </select>
                          </div>
                        </div>


                        <!-- Remote -->
                        <div class="row">
                          <div class="input-field col s12">
                            <p>Remote</p>
                            <select name="remote" id="remote" v-model="remote" required>
                              <option value="" disabled>Please select an option</option>
                              <option value="">Whatever</option>
                              <option value="unremote">Unremote</option>
                              <option value="partially_remote">Partially Remote</option>
                              <option value="distributed_team">Distributed Team</option>
                              <option value="full_remote">Full Remote</option>
                            </select>
                          </div>
                        </div>

                        <!-- Language -->
                        <div class="row">
                          <div class="input-field col s12">
                            <p>Language</p>
                            <select name="language" id="language" v-model="language" multiple required>
                              <option value="" disabled>Please select an option</option>
                              <option value="">Whatever</option>
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
                        <button class="btn" type="submit" @click.prevent="complete()">Create</button>
                      </div>
                    </template>
>>>>>>> a7a9a89971a3b90153883ecc5d45cfd8f61cd8fc
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </div>
  </div>
=======
>>>>>>> a7a9a89971a3b90153883ecc5d45cfd8f61cd8fc
</template>


<!----------------------------------------  JS  -------------------------------------------->
<script>
import Navigation from "../partials/Navigation";
import axios from "axios";
const API_URL = "http://localhost:8081/advertisement";

export default {
  props: ["id"],
  data() {
    return {
      title: 'Advertissement create',
      errors: [],
      name: null,
      description: null,
      salary: null,
      starting_date: null,
      ending_date: null,
      contract_type: null,
      education: null,
      remote: null,
      language: null,
      company: this.id,
    };
  },
  methods: {
    complete: function () {
      // Post company data in database
      axios
        .post(API_URL, {
          name: this.name,
          description: this.description,
          salary: this.salary,
          starting_date: this.starting_date,
          ending_date: this.ending_date,
          contract_type: this.contract_type,
          education: this.education,
          remote: this.remote,
          language: this.language,
          company: this.id,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

      // Redirect to Home
      this.$router.push({ name: "Home" });
    },
  },
  components: {
    Navigation,
  },
};
</script>

<!------------------------------------------  CSS ------------------------------------->
<style scoped>
.centrer
{
    display: flex;
    justify-content: center !important;
}

.card{
  width: 80%;
}
</style>
