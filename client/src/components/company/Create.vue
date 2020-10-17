<template>
<div>
  <Navigation />
      <div class="container">
        <div class="row">
          <div class="col s12 m12 l9 xl9">
            <div class="card">
              <div class="card-content">
                <h3 class="center">{{ title }}</h3>
                <div class="row">
                  <form class="col s12">

                    <p v-if="errors.length">
                      <b>Please correct the following error(s):</b>
                      <ul>
                        <li v-for="error in errors" :key="error.id" class="red-text text-darken-1">
                          <span class="material-icons">
                            error
                          </span>
                          <span style="font-weight: bold">
                            {{ error }}
                          </span>
                        </li>
                      </ul>
                    </p>

                    <!-- Step 1 -->
                    <template id="step_1" v-if="current_step == 1">
                      <div>

                        <!-- Name -->
                        <div class="row">
                          <div class="input-field col s12">
                            <input id="name" type="text" class="validate" v-model="step_1.name" required autofocus>
                            <label for="name">Company Name</label>
                            <span class="helper-text" data-error="wrong" data-success="right"></span>
                          </div>
                        </div>

                        <!-- Country -->
                        <div class="row">
                          <div class="input-field col s12">
                            <input id="country" type="text" class="validate" v-model="step_1.country" required />
                            <label for="country">Country</label>
                            <span class="helper-text" data-error="wrong" data-success="right"></span>
                          </div>
                        </div>

                        <!-- City && Address -->
                        <div class="row">
                          <div class="input-field col s5">
                            <input id="city" type="text" class="validate" v-model="step_1.city">
                            <label for="city">City</label>
                            <span class="helper-text" data-error="wrong" data-success="right"></span>
                          </div>
                          <div class="input-field col s7">
                            <input id="address" type="text" class="validate" v-model="step_1.address">
                            <label for="address">Address</label>
                            <span class="helper-text" data-error="wrong" data-success="right"></span>
                          </div>
                        </div>
                      </div>

                      <!-- Button -->
                      <div class="row">
                        <button v-if='!isComplete' :disabled='!!errors.length' class="btn right" type="button"
                          @click.prevent="goToStep(2)">Next</button>
                      </div>

                    </template>

                    <!-- Step 2 -->
                    <template id="step_2" v-if="current_step == 2">
                      <div>
                        <!-- Description -->
                        <div class="row">
                          <div class="input-field col s12">
                            <textarea id="description" type="text" class="materialize-textarea"
                              v-model="step_2.description" data-length="1000"></textarea>
                            <label for="description">Description</label>
                          </div>
                        </div>

                        <!-- Size -->
                        <div class="row">
                          <div class="input-field col s12">
                            <select class="browser-default" v-model="step_2.size">
                              <option value="" disabled>Choose your option</option>
                              <option value="TPE">TPE</option>
                              <option value="PE">PE</option>
                              <option value="ETI">ETI</option>
                              <option value="GE">GE</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <!-- Button -->
                      <div class="row">
                        <button class="btn right" type="button" @click.prevent="goToStep(3)">Next</button>

                        <button class="btn left" type="button" @click.prevent="goToStep(1)">Back</button>
                      </div>
                    </template>

                    <!-- Step 3 -->
                    <template id="step_3" v-if="current_step == 3">
                      <div>
                        <!-- Logo -->
                        <div class="row">
                          <div class="file-field input-field">
                            <div class="btn">
                              <span>File</span>
                              <input type="file">
                            </div>
                            <div class="file-path-wrapper">
                              <input type="file-path validate" v-model="step_3.file">
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Button -->
                      <div class="row">
                        <button class="btn right" type="button" @click.prevent="goToStep(4)">Next</button>

                        <button class="btn left" type="button" @click.prevent="goToStep(2)">Back</button>
                      </div>
                    </template>

                    <!-- Step 4 VALIDATION -->
                    <template id="step_4" v-if="current_step == 4">
                      <div>
                        <ul>
                          <li>{{step_1.name}}</li>
                          <li>{{step_1.country}}</li>
                          <li>{{step_1.city}}</li>
                          <li>{{step_1.address}}</li>
                        </ul>
                        <ul>
                          <li>{{step_2.description}}</li>
                          <li>{{step_2.size}}</li>
                        </ul>
                      </div>
                      <div>
                        <button class="btn right" type="button" @click.prevent="confirmed()">Confirm</button>

                        <button class="btn left" type="button" @click.prevent="goToStep(3)">Back</button>
                      </div>
                    </template>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
</template>

<script>
const axios = require("axios");
const API_URL = "http://localhost:8081/company";
import Navigation from "../partials/Navigation";

export default {
  data() {
    return {
      title: "Company",
      current_step: 1,
      errors: [],
      step_1: {
        name: null,
        country: null,
        city: null,
        address: null,
      },
      step_2: {
        description: null,
        size: "",
      },
      step_3: {
        file: null,
      },
    };
  },
  computed: {
    isComplete() {
      return this.checkStep1();
    },
  },
  methods: {
    checkStep1: function (e) {
      this.errors = [];

      if (!this.step_1.name) {
        this.errors.push("Name required");
      }

      if (!this.step_1.country) {
        this.errors.push("Country required");
      }
    },
    goToStep: function (step) {
      this.current_step = step;
    },
    confirmed: function () {
      // Post company data in database
      axios
        .post(API_URL, {
          headers: {
            Authorization: localStorage.token,
          },
          name: this.step_1.name,
          country: this.step_1.country,
          city: this.step_1.city,
          address: this.step_1.address,
          description: this.step_2.description,
          size: this.step_2.size,
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
    step_1: {
      template: "#step_1",
      props: ["current_step", "step_1"],
    },
    step_2: {
      template: "#step_2",
      props: ["current_step", "step_2"],
    },
    step_3: {
      template: "#step_3",
      props: ["current_step", "step_3"],
    },
    step_4: {
      template: "#step_4",
      props: ["current_step", "step_1", "step_2", "step_3"],
    },
  },
};
</script>
