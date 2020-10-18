<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="admin-panel">Admin Panel</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/admin/people">People</router-link></li>
          <li><router-link to="/admin/company">Company</router-link></li>
          <li>
            <router-link to="/admin/advertisement">advertisement</router-link>
          </li>
          <li><router-link to="/admin/candidacy">Candidacy</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  mounted() {
    M.AutoInit();
  },
};
</script>

<style>
footer {
  position: absolute;
  bottom: 0 !important;
}
nav {
  margin-bottom: 75px;
}
</style>