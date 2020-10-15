<template>
  <div>
    <h1>People show {{ id }}</h1>
    {{ people }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      people: null,
    };
  },
  mounted() {
    axios({
      url: `http://localhost:8081/people/${this.id}`,
      method: "get",
    })
      .then((response) => (this.people = response.data))
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style>
</style>
