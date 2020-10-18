<template>
  <div>
    <Navigation />
    <div class="container">
      <div class="row">
        <div class="col s12">
          <div class="card">
            <div class="card-content">
              <h1 class="center">Candidacy</h1>
              <div class="row">
                <div class="col s12">
                  <form action="">
                    <div class="input-field">
                      <label for="description">Cover letter</label>
                      <textarea
                        class="materialize-textarea"
                        name="description"
                        id="description"
                        v-model="description"
                      ></textarea>
                    </div>
                    <div class="file-field input-field">
                      <div class="btn">
                        <span>FIle</span>
                        <input
                          type="file"
                          name="cv_filename"
                          id="cv_filename"
                          ref="cv_filename"
                          v-on:change="onChangeFileUpload()"
                        />
                      </div>
                      <div class="file-path-wrapper">
                        <input
                          class="file-path validate"
                          type="text"
                          placeholder="Upload one or more files"
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        class="btn"
                        type="submit"
                        @click.prevent="complete()"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../partials/Navigation";
import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      errors: [],
      description: null,
      cover_letter_filename: null,
      cv_filename: null,
      message: null,
      company: this.id,
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
      formData.append("company", this.id);
      formData.append("description", this.description);

      try {
        await axios.post(`http://localhost:8081/candidacy/${this.id}`, formData, {
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
  components: {
    Navigation,
  },
};
</script>

<style>
</style>
