import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/index2'
import Index from './components/index'

Vue.use(VueRouter);
Vue.components('index',Index);
Vue.config.productionTip = false;
const router = new VueRouter([
  {
    path:'',
    meta:{
      breadcrumbs:'Главная'
    },
    name:'index',
    component:'./components/index2',
    children:[
      {
        path:'cats',
        meta:{
          breadcrumbs: 'Категории'
        },
        name:'cats',

      },
      {
        path:'event',
        meta:{
          breadcrumbs: 'Событие'
        },
        name:'event'
      }
    ]
  }

]);


new Vue({
  render: h => h(App),
  router
}).$mount('#app');
