<template>
  <div>
      <h1>Login</h1>
      <form>
        <div>
            <label for="email">Email</label>
            <input id="email" v-model="email" type="text" name="email" required>
        </div>
        <div>
            <label for="password">Password</label>
            <input id="password" v-model="password" type="password" name="password" required>
        </div>
        <div>
          <button class="btn" type="submit" @click.prevent="login()">Login</button>
        </div>
      </form>
  </div>
</template>

<script>
import axios from 'axios'
const API_URL = 'http://localhost:8081/people/login'

export default {
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    login: function () {
      axios.post(API_URL, {
        email: this.email,
        password: this.password
      })
      .then(function (response) {
        if (response.data === 'Success') {
          console.log('Success')
        } else {
          console.log('Not Allowed')
        }
      })

      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
