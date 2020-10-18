<template>
  <div>
    <Navigation />
    <div class="container">
      <div class="row">
        <div class="col s12">
          <section>
            <div class="card">
              <div class="card-content">
                <h1>{{ people.firstname }} {{ people.lastname }}</h1>
                <div class="row">
                  <div class="col s12">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Fugit quisquam sint repellat quis, provident, quod est ex,
                      incidunt maiores quas qui dolores quibusdam nisi
                      temporibus in eaque possimus. Tempore, quidem? Lorem ipsum
                      dolor, sit amet consectetur adipisicing elit. Cum eligendi
                      voluptates inventore error omnis dolore id ad aliquid
                      similique quisquam aut totam, odit dolor tenetur dolorum
                      sequi officiis, cupiditate voluptatum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div class="card">
              <div class="card-content">
                <h3>Candidacy send</h3>
                <div class="row">
                  <div class="col s12">
                    <div
                      v-for="candidacy in people.candidacies"
                      :key="candidacy._id"
                    >
                      <div class="row">
                        <div class="col s4">
                          <div class="card">
                            <div class="card-content center">
                              <p>{{ candidacy.description }}</p>
                              <a
                                class="btn"
                                v-on:click="download(candidacy._id)"
                                >Download pdf</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
  components: {
    Navigation,
  },
  data() {
    return {
      people: "",
    };
  },
  mounted() {
    axios({
      url: `http://localhost:8081/people/dashboard/${this.id}`,
      method: "get",
    })
      .then(
        (response) => ((this.people = response.data), console.log(this.people))
      )
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