<template>
  <div>
    <Navigation />
    <div class="container">
      <div class="row">
        <div class="col s12">
          <section>
            <div class="card">
              <div class="card-content">
                <h1>Your companies:</h1>
                <div class="row">
                  <div class="col s12">
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Fugit quisquam sint repellat quis, provident, quod
                        est ex, incidunt maiores quas qui dolores quibusdam nisi
                        temporibus in eaque possimus. Tempore, quidem? Lorem
                        ipsum dolor, sit amet consectetur adipisicing elit. Cum
                        eligendi voluptates inventore error omnis dolore id ad
                        aliquid similique quisquam aut totam, odit dolor tenetur
                        dolorum sequi officiis, cupiditate voluptatum.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <router-link class="btn" to="/company/create"
                    >Add Company</router-link
                  >
                </div>
              </div>
            </div>
          </section>
          <section>
            <div v-for="company in companies" :key="company._id">
              <div class="card">
                <div class="card-content">
                  <span class="card-title">{{ company.name }}</span>
                  <p>
                    {{ company.description }}
                  </p>
                  <br />
                  <div
                    v-for="advertisement in company.advertisements"
                    :key="advertisement._id"
                  >
                    <div v-if="advertisement">
                      <ul class="collection with-header">
                        <li class="collection-header">
                          <h6>{{ advertisement.name }}</h6>
                        </li>
                        <!-- TODO afficher candidature -->
                        <li
                          v-for="candidacy in advertisement.candidacies"
                          :key="candidacy._id"
                        >
                          <div class="row">
                            <div class="col s12">
                              <h6>Candidacies:</h6>
                              <table class="center">
                                <tbody>
                                  <tr>
                                    <td>{{ candidacy.people.firstname }}</td>
                                    <td>{{ candidacy.people.lastname }}</td>
                                    <td>{{ candidacy.description }}</td>
                                    <td>
                                      <a
                                        class="btn"
                                        v-on:click="download(candidacy._id)"
                                        >Download</a
                                      >
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card-action">
                  <a :href="url + company._id">Add Advertisement</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <!-- TODO Affiche toute les infos de l'entreprise -->
    <!-- Advertisement | Candidacy -->
  </div>
</template>

<script>
import Navigation from "../partials/Navigation";
import axios from "axios";

export default {
  props: ["id"],
  components: {
    Navigation,
  },
  data() {
    return {
      companies: "",
    };
  },
  mounted() {
    //get all company with all candidacy
    axios({
      url: `http://localhost:8081/company/dashboard/${this.id}`,
      method: "get",
    })
      .then((response) => (this.companies = response.data))
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
    download(id) {
      axios({
        url: `http://localhost:8081/candidacy/download/${id}`,
        method: "get",
        responseType: "blob",
      })
        .then((response) => {
          let fileUrl = window.URL.createObjectURL(new Blob([response.data]));
          let fileLink = document.createElement("a");

          fileLink.href = fileUrl;
          fileLink.setAttribute("download", "file.pdf");
          document.body.appendChild(fileLink);

          fileLink.click();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>