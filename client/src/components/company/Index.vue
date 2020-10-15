<template>
  <div>
    <h1>Index</h1>

    <ul id="example-1">
      <li v-for="company in companies" :key="company._id">
        {{ company.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      companies: null,
    };
  },
  mounted() {
    axios
      .get("http://localhost:8081/company")
      .then((response) => (this.companies = response.data));
  },
};
</script>

<style>
</style>