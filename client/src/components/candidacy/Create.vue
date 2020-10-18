<template>
  <div>
    <Navigation />

    <div>
        <div class="container">
          <div class="col s12 m12 l9 xl9 centrer">
            <div class="card">
              <div class="card-content">
                <h3 class="center">Candidacy create</h3>
                <div class="row">
                  <form class="col s12">
                      <div>
                        <!-- Description -->
                        <div class="row center">
                          <div class="input-field col s12">
                            <label for="description">Cover letter</label>
                            <textarea
                              class="materialize-textarea"
                              maxlength="2370" minlength="50"
                              name="description"
                              id="description"
                              v-model="description"
                            ></textarea>
                          </div>
                        </div>

                        <!-- CV file -->
                        <div class="row">
                          <div class="file-field input-field col s12">
                            <div class="btn">
                              <p for="cv_filename">Currucilum Vitae</p>
                              <input type="file">
                            </div>
                            <div class="file-path-wrapper">
                              <input
                              class="file-field"
                              type="file"
                              name="cv_filename"
                              id="cv_filename"
                              ref="cv_filename"
                              v-on:change="onChangeFileUpload()"
                              />
                            </div>                        
                          </div>
                        </div>
                      </div>


                      <!-- Button -->
                      <div>
                        <button class="btn" type="submit" @click.prevent="complete()"> Send </button>
                      </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from "axios";
const API_URL = "http://localhost:8081/candidacy";
import Navigation from "../partials/Navigation";

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
  components: {
    Navigation,
  },
};
</script>

<style scoped>
.centrer {
  display: flex;
  justify-content: center;
}

.card {
  width: 80%;
}
textarea{
  width: 80%;
  resize:none;
}
</style>