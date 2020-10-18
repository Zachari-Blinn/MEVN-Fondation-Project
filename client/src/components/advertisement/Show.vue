<template>
<div>
  <Navigation />
  <div class="container" style="margin-bottom: 150px;">
    <div class="col s12 m12 l9">
      	<div class="row">
        	<div class="col s12">
        	  <div class="card">
        	    <section id="grid">
                <div class="box">
        	        <div class="box-content box-titre">
        	          <h2>Advertisement show : {{ advertisement.name }}</h2>
        	        </div>
        	      </div>

        	      <div class="box">
        	        <div class="box-content box-info">
        	          <ul class="collection with-header tab">
        	            <li class="collection-header">
        	               <h4>Description : </h4>{{ advertisement.description }}
        	            </li>
                      <li class="collection-header">
        	              <h6> Salary : {{ advertisement.salary }}  / Year</h6>
        	            </li>
                      <li class="collection-header">
        	              <h6> Starting date : {{ advertisement.starting_date }} </h6>
        	            </li>
                      <li class="collection-header">
        	              <h6> Ending date : {{ advertisement.ending_date }} </h6>
        	            </li>
                      <li class="collection-header">
        	              <h6> Contract type : {{ advertisement.contract_type }} </h6>
        	            </li>
                      <li class="collection-header">
        	              <h6> Education : {{ advertisement.education }} </h6>
        	            </li>
                      <li class="collection-header">
        	              <h6> Remote : {{ advertisement.remote }} </h6>
        	            </li>
                      <li class="collection-header">
        	              <h6> Language : {{ advertisement.language }} </h6>
        	            </li>
        	          </ul>
        	        </div>
        	      </div>
        	    </section>
        	  </div>
        	</div>
      	</div>
    </div>
  </div>
</div>
</template>


<!--------------------------------------------------	JS	------------------------------------->
<script>
import Navigation from "../partials/Navigation";
import axios from "axios";
import store from "../../store";

export default {
  props: ["id"],
  data() {
    return {
      store,
      advertisement: null,
      candidacy_url_create: "http://localhost:8080/candidacy/create/",
    };
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
  mounted() {
    axios({
      url: `http://localhost:8081/advertisement/${this.id}`,
      method: "get",
    }).then((response) => (this.advertisement = response.data));
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
  height: 100vh;
  background-color: black;
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
  color: white;
}

.box:nth-child(1) {
  background-color: #008c9e;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  /*text-align: center;*/
}
.box:nth-child(2) {
  background-color: white;
  padding-left: 40px;
  color: black;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
}

ul {
  margin-right: 9%;
}

.centrer {
  display: flex;
  justify-content: center !important;
}
.card {
  width: 100%;
}
</style>


