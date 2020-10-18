<template>
<body style="margin-bottom: 150px;">
  <div id="app">
    <Navigation />
	<section class="container">
		<section>
			<div class="titre">
				<h1>{{ page_name }} page</h1>
			</div>

			<div>
				<h5 class="titre">Your future is in our hands</h5>
				<nav class="couleur">
					<div class="nav-wrapper">
						<form>
							<div class="input-field">
								<input id="search" type="search" required>
								<label class="label-icon" for="search"><i class="material-icons">search</i></label>
								<i class="material-icons">close</i>
							</div>
						</form>
					</div>
				</nav>
			</div>
		</section>
<!--------------------------------------------------------------------->
		<section>
			<div>
				<h5 class="left-align text">Here are some job postings</h5>
			</div>
			<div class="carouselAnnonce carousel carousel-slider center">
				<div class="carousel-item couleurCarou white-text" href="#">
					<h2>Web Developer</h2>
					<h3>Atos</h3>
					<div class="tableauEntreprise">
						<table class="striped centered responsive-table">
							<thead>
								<tr>
									<th>Place</th>
									<th>Education</th>									
									<th>Type of contract</th>
									<th>Salary</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Silicon Valley</td>
									<td>Level 5</td>
									<td>CDI</td>
									<td>2800 € / year</td>

								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="carousel-item couleurCarou white-text" href="#">
					<h2>Web Developer</h2>
					<h3>Atos</h3>
					<div class="tableauEntreprise">
						<table class="striped centered responsive-table">
							<thead>
								<tr>
									<th>Place</th>
									<th>Education</th>									
									<th>Type of contract</th>
									<th>Salary</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Silicon Valley</td>
									<td>Level 5</td>
									<td>CDI</td>
									<td>2800 € / year</td>

								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="carousel-item couleurCarou white-text" href="#">
					<h2>Web Developer</h2>
					<h3>Atos</h3>
					<div class="tableauEntreprise">
						<table class="striped centered responsive-table">
							<thead>
								<tr>
									<th>Place</th>
									<th>Education</th>									
									<th>Type of contract</th>
									<th>Salary</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Silicon Valley</td>
									<td>Level 5</td>
									<td>CDI</td>
									<td>2800 € / year</td>

								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="carousel-item couleurCarou white-text" href="#">
					<h2>Web Developer</h2>
					<h3>Atos</h3>
					<div class="tableauEntreprise">
						<table class="striped centered responsive-table">
							<thead>
								<tr>
									<th>Place</th>
									<th>Education</th>									
									<th>Type of contract</th>
									<th>Salary</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Silicon Valley</td>
									<td>Level 5</td>
									<td>CDI</td>
									<td>2800 € / year</td>

								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	</section>
    </div>
</body>
</template>


<!----------------------------------------------------	SCRIPT ----------------------------------------->
<script>
import Navigation from "./partials/Navigation";

export default {

  data() {
    return {
      page_name: "Home controller",
    };
  },
  components: {
    Navigation,
  },
<<<<<<< HEAD
  mounted () {
      M.AutoInit();
  },
=======

  mounted() {
    	M.AutoInit();
  }
>>>>>>> a7a9a89971a3b90153883ecc5d45cfd8f61cd8fc
};
</script>



<!-------------------------------------------------------	CSS	------------------------------------->
<style>
*{
    font-family: 'Poppins', sans-serif;
    padding: 0px;
    margin: 0px;
}


h1{
    font-family: 'Song Myung', serif;
    text-align: center;
    margin: 50px;
}
h5{
    font-family: 'Song Myung', serif;
    text-align: center;
    margin: 50px;
}

.titre{
	display: flex;
	justify-content: center;
}

.text{
	margin: 0px;
	padding-top: 100px;
}

.couleur{
	background-color: #004e66;
}
.couleurCarou{
	background-color: #008c9e;
}

.carouselAnnonce{
    margin-top: 10px;
	margin-bottom: 50px;
}


/***************** Gestion Carousel **************/
.offre{
    display: flex;
    flex-wrap: wrap;
    position: absolute;
}
/*************************************************/

.titreAnnonce{
    text-align: center;
}

</style>