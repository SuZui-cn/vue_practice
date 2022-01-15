import Vue from 'vue'
import App from './App'
import request from './utils/request'
import axios from 'axios'
import Viewer from 'v-viewer'


Vue.use(Viewer, {
    defaultOptions: {
        zIndex: 9999
    }
})


Vue.config.productionTip = false
Vue.prototype.request = request;
Vue.prototype.$axios = axios

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
