// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('semantic-ui-css/semantic.min.css')
require('semantic-ui-css/semantic.min.js')
import Vue from 'vue'
import VueFire from 'vuefire'
import Firebase from 'firebase'
import App from './App'
import router from './router'

import {store} from './store'

// explicit installation required in module environments
Vue.use(VueFire)
Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyDRX_VDIs-sbqeyTF7OazfRzXttag1pEpc",
  authDomain: "kanban-4dff4.firebaseapp.com",
  databaseURL: "https://kanban-4dff4.firebaseio.com",
  storageBucket: "kanban-4dff4.appspot.com",
  messagingSenderId: "316814317733"
};

var app = Firebase.initializeApp(config)
Vue.prototype.$db = app.database()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
