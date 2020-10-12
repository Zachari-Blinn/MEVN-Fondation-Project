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
        <label for="cover_letter_filename">Cover letter</label>
        <input
          id="cover_letter_filename"
          name="cover_letter_filename"
          accept=".pdf, .doc, docx"
          type="file"
        />
      </div>
      <div>
        <label for="cv_filename">CV</label>
        <input
          id="cv_filename"
          name="cv_filename"
          accept=".pdf, .doc, docx"
          type="file"
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
  data () {
    return {
      errors: [],
      description: null,
      cover_letter_filename: null,
      cv_filename: null
    }
  },
  methods: {
    complete: function () {
      // Post company data in database
      axios
        .post(API_URL, {
          headers: {
            'Authorization': localStorage.token
          },
          name: this.name,
          description: this.description,
          cover_letter_filename: this.salary,
          cv_filename: this.starting_date
        })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })

      // Redirect to Home
      this.$router.push({ name: "Home" })
    }
  }
}
</script>

<style>
</style>
