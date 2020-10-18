<template>
  <div>
    <Navigation />
    <!-- Search -->
    <section>
      <div class="container">
        <h1>People</h1>
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
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Role(s)</th>
                <th>Status</th>
                <th>Action(s)</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="people in peoples" :key="people._id">
                <td>{{ people.firstname }}</td>
                <td>{{ people.lastname }}</td>
                <td>{{ people.email }}</td>
                <td>
                  <span
                    v-if="people.isAdmin"
                    class="new badge red"
                    data-badge-caption="ADMIN"
                  ></span>
                  <span
                    v-if="people.isAdmin == false || people.isAdmin == null"
                    class="new badge blue"
                    data-badge-caption="USER"
                  ></span>
                </td>
                <td>
                  <span
                    v-if="people.isActive"
                    class="new badge"
                    data-badge-caption="ACTIVE"
                  ></span>
                  <span
                    v-if="people.isActive == false || people.isActive == null"
                    class="new badge red"
                    data-badge-caption="INACTIVE"
                  ></span>
                </td>
                <!-- Button -->
                <td>
                  <span>
                    <a
                      :href="edit_people_url + people._id"
                      class="btn-floating amber accent-4"
                      ><i class="material-icons">build</i></a
                    >
                  </span>
                  <span>

                    <button class="btn-floating red darken-1" @click.prevent="deleteThis(people._id)">
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
      show_people_url: "http://localhost:8080/admin/people/show/",
      edit_people_url: "http://localhost:8080/admin/people/edit/",
      delete_people_url: "http://localhost:8080/admin/people/delete/",
      peoples: null,
      firstname: null,
      lastname: null,
      email: null,
    };
  },
  mounted() {
    this.search();
  },
  methods: {
    search: function () {
      axios
        .post("http://localhost:8081/people/search", {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
        })
        .then(
          (response) => (
            (this.peoples = response.data), console.log(response.data)
          )
        );
    },
    deleteThis: function (deleteId) {
      console.log("test " + deleteId);
      axios
        .delete(`http://localhost:8081/people/${deleteId}`)
        .then(
          (response) => (
            (this.peoples = response.data), this.search()
          )
        );
    },
  },
};
</script>

<style>
</style>