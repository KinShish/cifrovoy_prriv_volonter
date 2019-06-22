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
    import catsEvents from './components/catsEvents'
    import BootstrapVue from 'bootstrap-vue'
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    Vue.use(VueRouter);
    Vue.use(BootstrapVue);
    const router = new VueRouter({
        mode: 'history',
        routes: [
            {
                path:'/',
                meta:{
                    breadcrumbs: 'Главная'
                },
                component:index,
                name:'index',
            },
            {
                path:'/catsEvents',
                meta:{
                    breadcrumbs: 'Категории'
                },
                component:catsEvents,
                name:'catsEvents',
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
                path:'/event',
                meta:{
                    breadcrumbs: 'Событие'
                },
                component:viewEvent,
                name:'/event',
                children:[
                    {
                        path:'add',
                        component:addEvent,
                        meta:{
                            breadcrumbs: 'Добавить событие'
                        },
                        name:'addEvent'
                    }
                ]
            }
        ]
    });

    export default({
        name: "App",
        router
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