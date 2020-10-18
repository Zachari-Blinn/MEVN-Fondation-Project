<template>
  <div>
    <Navigation />
    <div>
      <div class="row">
        <div class="col s12" style="margin-bottom: 100px">
          <div class="section">
            <!-------------------------------------------------->
            <div class="col s12 m6 l4" v-for="company in companies" :key="company._id">
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <section id="grid">
                    <div class="box">
                      <div class="box-content box-titre">
                        <h4> {{ company.name }} </h4> |
                        <a :href="company_url + company._id">Seen Company</a>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <!-------------------------------------------------->
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
  data() {
    return {
      companies: null,
      company_url: "http://localhost:8080/company/show/",
    };
  },
  mounted() {
    axios
      .get("http://localhost:8081/company")
      .then((response) => (this.companies = response.data));
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
  height: 18vh;
  max-height: 500px;
  background-color: black;
  color: white;
}

#grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
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

.box:nth-child(1) {
  background-color: #008c9e;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 1;
  text-align: center;
}


ul {
  margin-right: 9%;
}
a{
  color: black;
}
</style>