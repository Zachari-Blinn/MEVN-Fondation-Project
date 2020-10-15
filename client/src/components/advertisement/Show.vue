<template>
  <div>
    <h1>Advertisement show {{ id }}</h1>
    {{ advertisement.name }}
    {{ advertisement.description }}
    {{ advertisement.salary }}
    {{ advertisement.starting_date }}
    {{ advertisement.ending_date }}
    {{ advertisement.contract_type }}
    {{ advertisement.education }}
    {{ advertisement.remote }}
    {{ advertisement.language }}
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
  },
};
</script>

<style></style>
