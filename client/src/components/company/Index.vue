<template>
  <div>
    <h1>Index</h1>

    <ul id="example-1">
      <li v-for="company in companies" :key="company._id">
        {{ company.name }} |
        <a :href="company_url + company._id">Seen Company</a>
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
      company_url: "http://localhost:8080/company/show/"
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