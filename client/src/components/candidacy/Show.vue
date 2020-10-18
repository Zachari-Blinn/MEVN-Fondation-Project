<template>
  <div>
    <Navigation />

    <div>
        <div class="container">
          <div class="col s12 m12 l9 xl9 centrer">
            <div class="card">
              <div class="card-content">
                <h3 class="center">Candidacy show</h3>
                <div class="row">
                  <form class="col s12">
                      <div>
                        <!------------------------- DESCRIPTION ------------------------->
                        <div class="row center">
                          <div class="input-field col s12">
                            <p class="left">Cover letter</p>
                            <textarea
                              class="materialize-textarea"
                              maxlength="2370" minlength="50"
                            >{{candidacy.description}}</textarea>
                          </div>
                        </div>
                        <!-------------------------------------------------->

                        <!-- CV file -->
                        <div class="row">
                          <div class="file-field input-field col s12">
                            <button class="btn">
                              <a :href="pdfLink" download="Curriculum Vitae" style="color:white">Curriculum Vitae</a>
                            </button>              
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
import Navigation from "../partials/Navigation";

export default {
  props: ["id"],
  data() {
    return {
      candidacy: null,
      pdfLink: require("@/assets/job-search.png"),
    };
  },
  mounted() {
    axios({
      url: `http://localhost:8081/candidacy/${this.id}`,
      method: "get",
    }).then((response) => (this.candidacy = response.data));
  },
  components: {
    Navigation,
  },

};
</script>


<!--------------------------------------------------	CSS	------------------------------------->
<style scoped>
main {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.page {
  display: flex;
  justify-content: center;
}

section {
  width: 100%;
  max-width: 862px;
  height: 100vh;
  max-height: 500px;
  background-color: black;
  color: white;
}

#grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 100%;
}

.box {
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
}
.box-content {
  width: 100%;
}
.box-info {
  width: 100%;
  margin: 0;
  padding: 0;
}

.box-titre {
  text-align: left;
  padding-left: 50px;
}

textarea{
  width: 98%;
  resize:none;
}
.box:nth-child(1) {
  background-color: white;
  padding-left: 40px;
  color: black;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 4;
}

ul {
  margin-right: 9%;
}
</style>