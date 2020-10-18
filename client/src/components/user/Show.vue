<!-- TODO IF currentuserpage THEN allow to edit candidacy -->
    <!-- user candidacy | edition du profile -->
<template>
  <div>
    <Navigation />

    <div class="container" style="margin-bottom: 150px;">
    <div class="col s12 m12 l9">
      	<h3 class="center">{{ title }}</h3>
      	<div class="row">
        	<div class="col s12">
        	  <div class="card">
        	    <section id="grid">
        	      <div class="box">
        	        <div class="box-content box-titre">
        	          <h2>{{ people.firstname }} {{ people.lastname }}</h2>
        	        </div>
        	      </div>

        	      <div class="box">
        	        <div class="box-content box-info">
        	          <ul class="collection with-header tab">
        	            <li class="collection-header">
        	              <h6>Address : {{ people.address }}</h6>
        	            </li>
                      <li class="collection-header">
        	              <h6>City : {{ people.city }}</h6>
        	            </li>
                      <li class="collection-header">
        	              <h6>Email : {{ people.email }}</h6>
        	            </li>
                      <li class="collection-header">
        	              <h6>Birthday : {{ people.birthday }}</h6>
                      </li>  
                      <li class="collection-header">
        	              <h6>Gender : {{ people.gender }}</h6>
        	            </li>

                      <li class="collection-header">
        	              <h6>My candidacies : {{ people.candidacies }}</h6>
        	            </li>
                      <li class="collection-header">
        	              <h6>My company : {{ people.companies }}</h6>
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

<script>
import axios from "axios";
import Navigation from "../partials/Navigation";

export default {
  title: "Your Profile",
  props: ["id"],
  data() {
    return {
      people: null,
    };
  },
  mounted() {
    axios({
      url: `http://localhost:8081/people/${this.id}`,
      method: "get",
    })
      .then((response) => (this.people = response.data))
      .catch(function (error) {
      });
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
  max-height: 700px;
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

.box:nth-child(1) {
  background-color: #008c9e;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  text-align: center;
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
