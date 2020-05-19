import 'font-awesome/css/font-awesome.css';
import Vue from 'vue';

import App from './App';

import './config/bootstrap';
import './config/notificationtoast';
import store from './config/store';
import router from './routes/routes';

Vue.config.productionTip = false

//temp

require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IktvWm9vIiwiZW1haWwiOiJ3ZWJkZXNpZ25lci5nb3ZAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTU4OTIxMDc0MX0.L9zskKjOxjZmv-hLx41Gcj1-eo9aU9AmXkDKWJR4ajY'
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')