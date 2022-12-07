require('./bootstrap');


import { createApp } from 'vue';
import AppComponent from './AppComponent';
import router from './router';
import store from './store';
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Toaster from "@meforma/vue-toaster";


import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
const options = {
    confirmButtonColor: '#309255',
    cancelButtonColor: '#ff7674',
  };

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import Select2 from 'vue3-select2-component';
import VueClipboard from 'vue3-clipboard'


import middleware from "@grafikri/vue-middleware";


router.beforeEach(middleware({ store }))

const app = createApp({});

app.component("font-awesome-icon", FontAwesomeIcon);
app.component('app-component', AppComponent);
app.component('Datepicker', Datepicker);
app.component('Select2', Select2);
app.use(Toaster, {
    position: "top",
  });
app.use(router);
app.use(store);
app.use(BootstrapIconsPlugin);
app.use(VueSweetalert2, options);
app.use(VueClipboard, {
    autoSetContainer: true,
    appendToBody: true,
  })

app.mount('#app');



