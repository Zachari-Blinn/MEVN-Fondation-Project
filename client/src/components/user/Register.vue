<template>
<<<<<<< HEAD
  <div>
    <Navigation />
    <div class="container">
      <div class="row">
        <div class="col s12">
          <div class="card">
            <div class="card-content">
              <h1>Register</h1>
              <div class="row">
                <div class="col s12">
                  <form action="" method="post">
                    <!-- Step 1 -->
                    <template id="step_1" v-if="current_step == 1">
                      <div>
                        <label for="firstname">Firstname</label>
                        <input
                          name="firstname"
                          id="firstname"
                          type="text"
                          v-model="step_1.firstname"
                          required
                        />
                        <span v-if="msg.firstname">{{ msg.firstname }}</span>
                      </div>
                      <div>
                        <label for="lastname">Lastname</label>
                        <input
                          name="lastname"
                          id="lastname"
                          type="text"
                          v-model="step_1.lastname"
                          required
                        />
                        <span v-if="msg.lastname">{{ msg.lastname }}</span>
                      </div>
                      <!-- Button -->
                      <div class="row">
                        <button
                          :disabled="
                            !!msg['firstname'] ||
                            !!msg['lastname'] ||
                            step_1.firstname == null ||
                            step_1.lastname == null
                          "
                          class="btn right"
                          type="button"
                          @click.prevent="goToStep(2)"
                        >
                          Next
                        </button>
                      </div>
                    </template>

                    <!-- Step 2 -->
                    <template id="step_2" v-if="current_step == 2">
                      <div class="input-field col s12">
                        <label for="gender">Gender</label>
                        <select
                        class="browser-default"
                          name="gender"
                          id="gender"
                          v-model="step_2.gender"
                        >
                          <option value="" disabled>Choose your option</option>
                          <option value="">Unspecified</option>
                          <option value="0">Man</option>
                          <option value="1">Woman</option>
                        </select>
                      </div>
                      <div class="input-field col s12">
                        <label for="birthday">Birthday</label>
                        <input
                          name="birthday"
                          id="birthday"
                          type="date"
                          v-model="step_2.birthday"
                        />
                      </div>
                      <!-- Button -->
                      <div class="row">
                        <button
                          class="btn right"
                          type="button"
                          @click.prevent="goToStep(3)"
                        >
                          Next
                        </button>
                        <button
                          class="btn left"
                          type="button"
                          @click.prevent="goToStep(1)"
                        >
                          Back
                        </button>
                      </div>
                    </template>
=======
<div>
  <Navigation />
  <div class="container">
    <div class="card" style="padding: 30px">
    <h1>Register</h1>
>>>>>>> a7a9a89971a3b90153883ecc5d45cfd8f61cd8fc

                    <!-- Step 3 -->
                    <template id="step_3" v-if="current_step == 3">
                      <div>
                        <label for="country">Country</label>
                        <input
                          name="country"
                          id="country"
                          type="text"
                          v-model="step_3.country"
                        />
                      </div>
                      <div>
                        <label for="city">City</label>
                        <input
                          name="city"
                          id="city"
                          type="text"
                          v-model="step_3.city"
                        />
                      </div>
                      <div>
                        <label for="address">Address</label>
                        <input
                          name="address"
                          id="address"
                          type="text"
                          v-model="step_3.address"
                        />
                      </div>
                      <!-- Button -->
                      <div class="row">
                        <button
                          class="btn right"
                          type="button"
                          @click.prevent="goToStep(4)"
                        >
                          Next
                        </button>
                        <button
                          class="btn left"
                          type="button"
                          @click.prevent="goToStep(2)"
                        >
                          Back
                        </button>
                      </div>
                    </template>

                    <!-- Step 4 -->
                    <template id="step_4" v-if="current_step == 4">
                      <div>
                        <label for="email">Email</label>
                        <input
                          name="email"
                          id="email"
                          type="text"
                          v-model="step_4.email"
                          required
                        />
                        <span v-if="msg.email">{{ msg.email }}</span>
                      </div>
                      <div>
                        <label for="password">Password</label>
                        <input
                          name="password"
                          id="password"
                          type="password"
                          v-model="step_4.password"
                          required
                        />
                        <span v-if="msg.password">{{ msg.password }}</span>
                      </div>
                      <!-- Button -->
                      <div class="row">
                        <button
                          :disabled="
                            !!msg['email'] ||
                            !!msg['password'] ||
                            step_4.email == null ||
                            step_4.password == null
                          "
                          class="btn right"
                          type="button"
                          @click.prevent="confirmed()"
                        >
                          Confirm
                        </button>
                        <button
                          class="btn left"
                          type="button"
                          @click.prevent="goToStep(3)"
                        >
                          Back
                        </button>
                      </div>
                    </template>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>
=======
      </template>

      <!-- Step 4 -->
      <template id="step_4" v-if="current_step == 4">
        <div>
          <label for="email">Email</label>
          <input
            name="email"
            id="email"
            type="text"
            v-model="step_4.email"
            required
          />
          <span v-if="msg.email">{{ msg.email }}</span>
        </div>
        <div>
          <label for="password">Password</label>
          <input
            name="password"
            id="password"
            type="password"
            v-model="step_4.password"
            required
          />
          <span v-if="msg.password">{{ msg.password }}</span>
        </div>
        <!-- Button -->
        <div class="row">
          <button
            :disabled="
              !!msg['email'] ||
              !!msg['password'] ||
              step_4.email == null ||
              step_4.password == null
            "
            class="btn right"
            type="button"
            @click.prevent="confirmed()"
          >
            Confirm
          </button>
          <button class="btn left" type="button" @click.prevent="goToStep(3)">
            Back
          </button>
        </div>
      </template>
    </form>
>>>>>>> a7a9a89971a3b90153883ecc5d45cfd8f61cd8fc
    </div>
  </div>
</div>
</template>


<!----------------------------------------- JS  ---------------------------------------->
<script>
import Navigation from "../partials/Navigation";
const axios = require("axios");
const API_URL = "http://localhost:8081/people";

export default {
  data() {
    return {
      current_step: 1,
      msg: [],
      step_1: {
        firstname: null,
        lastname: null,
      },
      step_2: {
        gender: null,
        birthday: null,
      },
      step_3: {
        country: null,
        city: null,
        address: null,
      },
      step_4: {
        email: null,
        password: null,
      },
    };
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
  watch: {
    "step_1.firstname": function (value) {
      this.firstname = value;
      this.validateFistname(value);
    },
    "step_1.lastname": function (value) {
      this.lastname = value;
      this.validateLastname(value);
    },
    "step_4.email": function (value) {
      this.email = value;
      this.validateEmail(value);
    },
    "step_4.password": function (value) {
      this.password = value;
      this.validatePassword(value);
    },
  },
  methods: {
    validateFistname(value) {
      if (/^[a-zA-Z]+$/.test(value)) {
        this.msg["firstname"] = "";
      } else {
        this.msg["firstname"] = "Invalid firstname";
      }
    },
    validateLastname(value) {
      if (/^[a-zA-Z]+$/.test(value)) {
        this.msg["lastname"] = "";
      } else {
        this.msg["lastname"] = "Invalid lastname";
      }
    },
    validateEmail(value) {
      if (
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        )
      ) {
        this.msg["email"] = "";
      } else {
        this.msg["email"] = "Invalid email";
      }
    },
    validatePassword(value) {
      if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(value)) {
        this.msg["password"] = "";
      } else {
        this.msg["password"] = "Invalid password";
      }
    },
    goToStep: function (step) {
      this.current_step = step;
    },
    confirmed: function () {
      // Post people data in database
      axios
        .post(API_URL, {
          firstname: this.step_1.firstname,
          lastname: this.step_1.lastname,
          gender: this.step_2.gender,
          birthday: this.step_2.birthday,
          country: this.step_3.country,
          city: this.step_3.city,
          address: this.step_3.address,
          email: this.step_4.email,
          password: this.step_4.password,
        })
        .then(function (response) {
          this.$router.push({ name: "Home" });
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
    mounted() {
    M.AutoInit();
  },
};
</script>

<style></style>
