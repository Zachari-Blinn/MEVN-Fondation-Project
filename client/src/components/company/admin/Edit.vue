<template>
  <div>
    <Navigation />
    <div class="container">
      <div class="row">
        <div class="card">
          <div class="card-content">
            <h1>Edit company</h1>
            <form>
              <div class="row">
                <div class="form-input col s12">
                  <label for="name">name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    v-model="company.name"
                  />
                </div>
                <div class="form-input col s12">
                  <label for="description">Description</label>
                  <textarea class="materialize-textarea" name="description" id="description" cols="30" rows="10" v-model="description"></textarea>
                </div>
                <div class="form-input col s4">
                  <label for="country">Country</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    v-model="company.country"
                  />
                </div>
                <div class="form-input col s4">
                  <label for="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    v-model="company.city"
                  />
                </div>
                <div class="form-input col s4">
                  <label for="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    v-model="company.address"
                  />
                </div>
                <div class="form-input col s12">
                  <select name="size" id="size" v-model="size">
                    <option value=""></option>
                    <option value="TPE">TPE</option>
                    <option value="PE">PE</option>
                    <option value="ME">ME</option>
                    <option value="ETI">ETI</option>
                    <option value="GE">GE</option>
                  </select>
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
      company: {
        name: null,
        country: null,
        city: null,
        address: null,
        description: null,
      },
    };
  },
  mounted() {
    axios({
      url: `http://localhost:8081/company/${this.id}`,
      method: "get",
    }).then(
      (response) => ((this.company = response.data), console.log(response))
    );
  },
  methods: {
    confirmed: function () {
      console.log("test");
      axios
        .put(`http://localhost:8081/company/${this.id}`, {
          headers: {
            Authorization: localStorage.token,
          },
          name: this.company.name,
          country: this.company.country,
          city: this.company.city,
          address: this.company.address,
          description: this.company.description,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

        // Redirect to Home
        this.$router.push({ name: "Admin_company" });
    },
  },
};
</script>

<style>
</style>