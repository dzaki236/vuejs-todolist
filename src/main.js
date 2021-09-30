import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faEye, faListAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTrash, faEye, faListAlt, faCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false;
import "bootstrap/dist/css/bootstrap.min.css";
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");