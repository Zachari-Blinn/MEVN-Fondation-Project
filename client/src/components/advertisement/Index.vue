<template>
  <div>
    <h1>Index</h1>
    
    <ul id="example-1">
      <li v-for="advertisement in advertisements" :key="advertisement._id">
        {{ advertisement.name }}
      </li>
    </ul>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      advertisements: null,
    };
  },
  mounted() {
    axios
      .get("http://localhost:8081/advertisement")
      .then((response) => (this.advertisements = response.data));
  },
};
</script>

<style>
</style>