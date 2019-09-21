import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import qs from 'qs'
import axios from 'axios'
import './assets/css/reset.scss'
import './assets/css/component.scss'

const loginUrl = process.env.VUE_APP_API_CONFIG === "production" ? 'https://172.18.109.110/api/v1/login' : 'https://172.18.109.110/api/v1/login'
Vue.config.productionTip = false;
const init = function() {
  new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");
}
const getAuthorizion = () => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: loginUrl,
      data: qs.stringify({
        'username': '9FAB40082F564E75AE3C10DDA69715F9',
        'password': '03818B6ADD9D4F648BFB588E7A6BF88E'
      })
    }).then((res) => {
      // console.log(res, 'res::::::::::: login')
      if (!res.data) {
        // reject()
        window.accesstoken = res
        // setUserInfo({
        //   accesstoken: res
        // })
      } else {
        window.accesstoken = res.data
        // setUserInfo({
        //   accesstoken: res.data
        // })
        resolve(res.data)
      }
    }).catch(() => {
      reject()
    })
  })
}

// getAuthorizion().then(() => {
//   init()
// }).catch(() => {
//   init()
// })
init()
