<template>
  <div>
    <Navigation />
    <!-- Search -->
    <section>
      <div class="container">
        <h1>advertisement</h1>
        <div class="card">
          <div class="row">
            <form class="col s12">
              <div class="input-field col s11">
                <input id="icon_prefix" type="text" class="validate" />
                <label for="icon_prefix">Search</label>
              </div>
              <div class="input-field col s1">
                <a
                  class="btn-floating waves-effect waves-light right light-blue darken-3"
                  style="top: 7px"
                  ><i class="material-icons">search</i></a
                >
              </div>
            </form>
          </div>
          <ul
            class="collapsible z-depth-0"
            style="border: 0 !important; box-shadow: none !important"
          >
            <li>
              <div class="collapsible-header z-depth-0">
                <i class="material-icons">dashboard</i>Filter
              </div>
              <div class="collapsible-body z-depth-0">
                <span>TODO FILTER</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <br />

    <!-- Content -->
    <section>
      <div class="container">
        <div class="card">
          <table class="highlight centered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Action(s)</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="advertisement in advertisements" :key="advertisement._id">
                <td>{{ advertisement.name }}</td>
                <td>
                  <span
                    v-if="advertisement.isActive || advertisement.isActive==null"
                    class="new badge"
                    data-badge-caption="ACTIVE"
                  ></span>
                  <span
                    v-if="advertisement.isActive == false"
                    class="new badge red"
                    data-badge-caption="INACTIVE"
                  ></span>
                </td>
                <!-- Button -->
                <td>
                  <span>
                    <a
                      :href="edit_advertisement_url + advertisement._id"
                      class="btn-floating amber accent-4"
                      ><i class="material-icons">build</i></a
                    >
                  </span>
                  <span>
                    <button
                      class="btn-floating red darken-1"
                      @click.prevent="deleteThis(advertisement._id)"
                    >
                      <i class="material-icons">delete</i>
                    </button>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="card-action">
            <a class="waves-effect waves-light btn">Add</a>
            <a class="waves-effect waves-light btn red">Purge</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navigation from "../../partials/Admin_Navigation";
import axios from "axios";

export default {
  components: {
    Navigation,
  },
  data() {
    return {
      show_advertisement_url: "http://localhost:8080/admin/advertisement/show/",
      edit_advertisement_url: "http://localhost:8080/admin/advertisement/edit/",
      delete_advertisement_url: "http://localhost:8080/admin/advertisement/delete/",
      advertisements: null,
      name: null,
      description: null,
    };
  },
  mounted() {
    this.search();
  },
  methods: {
    search: function () {
      axios
        .post("http://localhost:8081/advertisement/search", {
          name: this.name,
        })
        .then(
          (response) => (
            (this.advertisements = response.data), console.log(response.data)
          )
        );
    },
    deleteThis: function (deleteId) {
      console.log("test " + deleteId);
      axios
        .delete(`http://localhost:8081/advertisement/${deleteId}`)
        .then((response) => ((this.advertisements = response.data), this.search()));
    },
  },
};
</script>

<style>
</style>