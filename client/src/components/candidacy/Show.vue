<template>
  <div>
    <h1>Candidacy show {{ id }}</h1>
    {{ candidacy }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      candidacy: null,
    };
  },
  mounted() {
    axios
      .get("http://localhost:8081/candidacy/", {
          params: {
              id: this.id
          }
      })
      .then((response) => (this.candidacy = response.data));
  },
};
</script>

<style>
</style>
