import Vue from 'vue'
import Index from './components/index'

Vue.config.productionTip = false;

Vue.component('index',Index);

new Vue({

}).$mount('#app');