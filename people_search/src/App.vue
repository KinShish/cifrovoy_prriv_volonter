<template>
    <div>
        <router-view></router-view>
    </div>

</template>

<script>
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    import index from './components/index'
    import cats from './components/cats'
    import viewEvent from './components/event/index'
    import addEvent from './components/event/add'
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
                path:'/cats',
                meta:{
                    breadcrumbs: 'Категории'
                },
                component:cats,
                name:'cats',
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

</style>