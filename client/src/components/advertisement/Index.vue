<template>
  <div>
    <h1>Index</h1>

    <section>
      <form action="" method="post">
        <div>
          <label for="name">Name</label>
          <input type="text" name="name" id="name" v-model="name" />
        </div>
        <div>
          <button class="btn" type="submit" @click.prevent="search()">Search</button>
        </div>
      </form>
    </section>

    <ul id="example-1">
      <li v-for="advertisement in advertisements" :key="advertisement._id">
        {{ advertisement.name }}
        <a :href="advertisement_url_show + advertisement._id">Seen</a>
        <a :href="candidacy_url_create + advertisement._id">Apply</a>
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
      advertisement_url_show: "http://localhost:8080/advertisement/show/",
      candidacy_url_create: "http://localhost:8080/candidacy/create/",
      name: null,
    };
  },
  mounted() {
    this.search()
  },
  methods: {
    search: function () {
      axios
        .post("http://localhost:8081/advertisement/search", {
          name: this.name,
        })
        .then((response) => (this.advertisements = response.data));
    },
  },
};
</script>

<style>
</style>