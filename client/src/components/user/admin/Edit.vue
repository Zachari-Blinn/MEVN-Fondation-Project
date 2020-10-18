<template>
  <div>
    <Navigation />
    <div class="container">
      <div class="row">
        <div class="card">
          <div class="card-content">
            <h1>Edit people</h1>
            <form>
              <div class="row">
                <div class="form-input col s6">
                  <label for="firstname">Firstname</label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    v-model="people.firstname"
                  />
                </div>
                <div class="form-input col s6">
                  <label for="lastname">Lastname</label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    v-model="people.lastname"
                  />
                </div>
                <div class="form-input col s12">
                  <select name="gender" id="gender" v-model="people.gender">
                    <option value="">Unspecified</option>
                    <option value="0">Man</option>
                    <option value="1">woman</option>
                  </select>
                </div>
                <div class="form-input col s12">
                  <label for="birthday">Birthday</label>
                  <input
                    type="date"
                    id="birthday"
                    name="birthday"
                    v-model="people.birthday"
                  />
                </div>
                <div class="form-input col s6">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    v-model="people.email"
                  />
                </div>
                <div class="form-input col s6">
                  <label for="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    v-model="people.phone"
                  />
                </div>
                <div class="form-input col s4">
                  <label for="country">Country</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    v-model="people.country"
                  />
                </div>
                <div class="form-input col s4">
                  <label for="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    v-model="people.city"
                  />
                </div>
                <div class="form-input col s4">
                  <label for="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    v-model="people.address"
                  />
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
      //people: null,

      people: {
        firstname: null,
        lastname: "sqsdsqd",
        email: null,
        country: null,
        city: null,
        address: null,
        phone: null,
        gender: null,
        birthday: null,
      },
    };
  },
  mounted() {
    axios({
      url: `http://localhost:8081/people/${this.id}`,
      method: "get",
    }).then(
      (response) => ((this.people = response.data), console.log(response))
    );
  },
  methods: {
    confirmed: function () {
      console.log("test");
      axios
        .put(`http://localhost:8081/people/${this.id}`, {
          headers: {
            Authorization: localStorage.token,
          },
          firstname: this.people.firstname,
          lastname: this.people.lastname,
          email: this.people.email,
          country: this.people.country,
          city: this.people.city,
          address: this.people.address,
          phone: this.people.phone,
          gender: this.people.gender,
          birthday: this.people.birthday,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

        // Redirect to Home
        this.$router.push({ name: "Admin_people" });
    },
  },
};
</script>

<style>
</style>