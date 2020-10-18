// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'



/********************************************************* */
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'
import 'material-design-icons/iconfont/material-icons.css'
/********************************************************* */


Vue.prototype.$http = Axios

const token = localStorage.getItem('token')

if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



////////////////////  Allow to cut the text if it's too longer  //////////////////////
var filter = function(text, length, clamp){
  clamp = clamp || '...';
  var node = document.createElement('div');
  node.innerHTML = text;
  var content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
};

Vue.filter('truncate', filter);
//////////////////////////////////////////////////////////////////////////////////////


chainWebpack: config => {
  config.module
    .rule("pdf")
    .test(/\.pdf$/)
    .use("file-loader")
    .loader("file-loader");
}
