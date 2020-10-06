<template>
  <div>
    <h1>Register</h1>

    <form action="" method="post">

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
          <label for="firstname">Firstname</label>
          <input
            name="firstname"
            id="firstname"
            type="text"
            v-model="step_1.firstname"
          />
        </div>
        <div>
          <label for="lastname">Lastname</label>
          <input name="lastname" id="lastname" type="text" v-model="step_1.lastname" />
        </div>
        <!-- Button -->
        <div class="row">
            <button class="btn right" type="button" @click.prevent="goToStep(2)">Next</button>
        </div>
      </template>

      <!-- Step 2 -->
      <template id="step_2" v-if="current_step == 2">
        <div>
          <label for="gender">Gender</label>
          <select name="gender" id="gender" v-model="step_2.gender">
            <option value="" disabled>Choose your option</option>
            <option value="">Unspecified</option>
            <option value="0">Man</option>
            <option value="1">Woman</option>
          </select>
        </div>
        <div>
          <label for="birthday">Birthday</label>
          <input name="birthday" id="birthday" type="date" v-model="step_2.birthday" />
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
          <label for="country">Country</label>
          <input name="country" id="country" type="text" v-model="step_3.country" />
        </div>
        <div>
          <label for="city">City</label>
          <input name="city" id="city" type="text" v-model="step_3.city" />
        </div>
        <div>
          <label for="address">Address</label>
          <input name="address" id="address" type="text" v-model="step_3.address" />
        </div>
        <!-- Button -->
        <div class="row">
            <button class="btn right" type="button" @click.prevent="goToStep(4)">Next</button>
            <button class="btn left" type="button" @click.prevent="goToStep(2)">Back</button>
        </div>
      </template>

      <!-- Step 4 -->
      <template id="step_4" v-if="current_step == 4">
        <div>
          <label for="email">Email</label>
          <input name="email" id="email" type="text" v-model="step_4.email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input name="password" id="password" type="password" v-model="step_4.password" />
        </div>
        <!-- Button -->
        <div class="row">
        <button class="btn right" type="button" @click.prevent="confirmed()">Confirm</button>
        <button class="btn left" type="button" @click.prevent="goToStep(3)">Back</button>
        </div>
      </template>
    </form>
  </div>
</template>

<script>
const axios = require('axios')
const API_URL = 'http://localhost:8081/people'

export default {
  data () {
    return {
      current_step: 1,
      errors: [],
      step_1: {
        firstname: null,
        lastname: null
      },
      step_2: {
        gender: null,
        birthday: null
      },
      step_3: {
        country: null,
        city: null,
        address: null
      },
      step_4: {
        email: null,
        password: null
      }
    }
  },
  components: {
    step_1: {
      template: '#step_1',
      props: ['current_step', 'step_1']
    },
    step_2: {
      template: '#step_2',
      props: ['current_step', 'step_2']
    },
    step_3: {
      template: '#step_3',
      props: ['current_step', 'step_3']
    },
    step_4: {
      template: '#step_4',
      props: ['current_step', 'step_1', 'step_2', 'step_3']
    }
  },
  computed: {

  },
  methods: {
    goToStep: function (step) {
      this.current_step = step
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
                password: this.step_4.password
            })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
  }
}
</script>

<style>
</style>
