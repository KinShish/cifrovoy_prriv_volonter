import Vue from 'vue'
import ComHeader from './components/comHeader'

Vue.config.productionTip = false;
Vue.component('comHeader', ComHeader);
new Vue({
}).$mount('#app');
