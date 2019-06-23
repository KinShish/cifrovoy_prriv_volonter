<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    import index from './components/index'
    //import cats from './components/cats'
    import viewEvent from './components/event/index'
    import addEvent from './components/event/add'
    //import events from './components/events'
    import comHeader from './components/comHeader'
    import catsEvents from './components/catsEvents'
    import BootstrapVue from 'bootstrap-vue'
    import VueGeolocation from 'vue-browser-geolocation';
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    Vue.use(VueGeolocation);
    Vue.use(VueRouter);
    Vue.use(BootstrapVue);
    Vue.use(comHeader);
    const router = new VueRouter({
        mode: 'history',
        routes: [
            {
                path:'/',
                component:index,
                name:'index',
                meta:{
                    breadcrumbs: 'Главная'
                },
                children:[
                    {
                        path:'cats',
                        meta:{
                            breadcrumbs: 'Категории'
                        },
                        component:catsEvents,
                        name:'cats',
                        /*children:[
                            {
                                path:'events',
                                component:events,
                                meta:{
                                    breadcrumbs: 'События'
                                },
                                name:'events'
                            }
                        ]*/
                    },
                    {
                        path:'event/:id',
                        meta:{
                            breadcrumbs: 'Событие'
                        },
                        component:viewEvent,
                        name:'event'
                    },
                    {
                        path:'add/event',
                        component:addEvent,
                        meta:{
                            breadcrumbs: 'Добавить событие'
                        },
                        name:'addEvent'
                    }
                ]
            },

        ]
    });
    export default({
        data(){
            return{
                href:'/',
                view:true
            }
        },
        name: "App",
        router:router
    })
</script>

<style scoped>
    header{
        background-color:  #A7A7A7;
        height: 120px;
    }
    .logo{
        width: 70px;
        margin-top: 10px;
    }
    .buttonregistration a{
        background: none;
        border:none;
        color: white;
        font-style: normal;
        font-weight: normal;
        font-size: 19px;
        line-height: 16px;
    }
    .buttonregistration li{
        list-style-type: none;
        display: inline-block;
        margin-top: 15px;
    }
    .menu{
        border-radius: 25px;
        width: 50px;
        height: 50px;
        border: 1px solid black;
        float:right;
        margin-top: 5px;
    }
</style>