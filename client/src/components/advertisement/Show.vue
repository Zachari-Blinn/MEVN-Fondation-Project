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
    axios
      .get("http://localhost:8081/advertisement/", {
          params: {
              id: this.id
          }
      })
      .then((response) => (this.advertisement = response.data));
  },
};
</script>

<style>
</style>
