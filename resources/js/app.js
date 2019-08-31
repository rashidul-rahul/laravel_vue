require('./bootstrap');

import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'
const VueProgressBarOptions = {
    color: '#8192FA',
    failedColor: '#874b4b',
    thickness: '5px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
}

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.use(VueProgressBar, VueProgressBarOptions);

Vue.component('customer-component', require('./components/CustomerComponent.vue').default);
Vue.component('pagination', require('./components/partial/PaginationComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
