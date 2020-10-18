<template>
  <div>
    <Navigation />
    <div class="container">
      <div class="row">
        <div class="card">
          <div class="card-content">
            <h1>Edit advertisement</h1>
            <form>
              <div class="row">
                <div class="form-input col s12">
                  <label for="name">name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    v-model="advertisement.name"
                  />
                </div>
                <div class="form-input col s12">
                  <label for="description">Description</label>
                  <textarea class="materialize-textarea" name="description" id="description" cols="30" rows="10" v-model="advertisement.description"></textarea>
                </div>
                <div>
              <button class="btn" type="button" @click.prevent="confirmed()">Confirm</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../../partials/Admin_Navigation";
import axios from "axios";

export default {
  props: ["id"],
  components: {
    Navigation,
  },
  data() {
    return {
      advertisement: {
        name: null,
        description: null,
      },
    };
  },
  mounted() {
    axios({
      url: `http://localhost:8081/advertisement/${this.id}`,
      method: "get",
    }).then(
      (response) => ((this.advertisement = response.data), console.log(response))
    );
  },
  methods: {
    confirmed: function () {
      console.log("test");
      axios
        .put(`http://localhost:8081/advertisement/${this.id}`, {
          headers: {
            Authorization: localStorage.token,
          },
          name: this.advertisement.name,
          description: this.advertisement.description,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

        // Redirect to Home
        this.$router.push({ name: "Admin_advertisement" });
    },
  },
};
</script>

<style>
</style>