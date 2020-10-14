<template>
  <div>
    <h1>Candidacy</h1>
    <form action="">
      <div>
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          v-model="description"
        ></textarea>
      </div>
      <div>
        <label for="cv_filename">CV</label>
        <input
          type="file"
          name="cv_filename"
          id="cv_filename"
          ref="cv_filename"
          v-on:change="onChangeFileUpload()"
        />
      </div>
      <div>
        <button class="btn" type="submit" @click.prevent="complete()">
          Send
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
const API_URL = "http://localhost:8081/candidacy";

export default {
  data() {
    return {
      errors: [],
      description: null,
      cover_letter_filename: null,
      cv_filename: null,
      message: null,
    };
  },
  methods: {
    onChangeFileUpload() {
      this.cv_filename = this.$refs.cv_filename.files[0];
    },
    complete: async function () {
      // Post company data in database
      const formData = new FormData();
      formData.append("cv_filename", this.cv_filename);

      try {
        await axios.post(API_URL, formData, {
          headers: {
            Authorization: localStorage.token,
          },
        });
      } catch (err) {
        console.log(err);
        this.message = "Something went wrong !";
      }

      // Redirect to Home
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style>
</style>
