<template>
  <!--<div>
    <footer class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Footer Content</h5>
            <p class="grey-text text-lighten-4">
              You can use rows and columns here to organize your footer content.
            </p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Links</h5>
            <ul>
              <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2014 Copyright Text
          <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
      </div>
    </footer>
  </div>-->
  <footer>
		<div class="nav-wrapper couleur">
          <a href="#">Contact</a>
          <a href="#">RGPD</a>
          <a><img :src="require('../../assets/job-search.png')"/></a>
          <a href="#">Information Legal</a>
          <a href="#">F.A.Q</a>
        </div>
</footer>
</template>

<script>
export default {

};
</script>

<style scoped>
html, body{
  position: relative;
  height: 100% !important;
  width: 100% !important;
}

footer{
  margin-top: 100px;
  width: 100% !important;
  bottom: 0 !important;
  text-align: center !important;
  background-color: #004e66 !important;
  padding: 1% 1% 1% 1% !important;
  /*position: fixed !important;*/

}
.couleur{
	background-color: #004e66 !important;
}
a{
	margin: 15px;
  width: 150px !important;
  display: inline-block;
  color: white;
}

</style>