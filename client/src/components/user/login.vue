<template>
  <div>
      <h1>Login</h1>
      <form id="app" @submit="checkForm" action="" method="">
        <div>
            <label for="email">Email</label>
            <input id="email" v-model="email" type="text" name="email" required>
        </div>
        <div>
            <label for="password">Password</label>
            <input id="password" v-model="password" type="password" name="password" required>
        </div>
        <div>
            <input type="submit" value="Submit">
        </div>
      </form>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
