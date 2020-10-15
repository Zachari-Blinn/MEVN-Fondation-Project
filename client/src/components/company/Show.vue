<template>
  <div>
    <h1>Company show {{ id }}</h1>
    {{ company }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      company: null,
    };
  },
  mounted() {
    axios({
      url: `http://localhost:8081/company/${this.id}`,
      method: "get",
    })
      .then((response) => (this.company = response.data))
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style>
</style>
