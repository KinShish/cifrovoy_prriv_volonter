import Vue from 'vue'
import App from './App'

new Vue({render: h => h(App),data(){return {server:'http://212.192.146.239:3000'}}}).$mount('#app');
