<template>
  <div>
    <h1>Ads show {{ id }}</h1>
    {{ advertisement }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      advertisement: null,
    };
  },
  mounted() {
    axios({
      url: `http://localhost:8081/advertisement/${this.id}`,
      method: "get",
    })
      .then((response) => (this.advertisement = response.data))
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style>
</style>
