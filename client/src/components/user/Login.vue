<template>
  <div>
    <h1>Login</h1>
    <form>
      <div>
        <label for="email">Email</label>
        <input id="email" v-model="email" type="text" name="email" required />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          name="password"
          required
        />
      </div>
      <div>
        <button class="btn" type="submit" @click.prevent="login()">
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    login: function () {
      let email = this.email;
      let password = this.password;

      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push({ name: "Home" }))
        .catch((err) => console.log(err));
    },
  },
};
</script>
