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
    axios({
      url: `http://localhost:8081/candidacy/${this.id}`,
      method: "get",
    })
      .then((response) => (this.candidacy = response.data))
  },
};
</script>

<style>
</style>
