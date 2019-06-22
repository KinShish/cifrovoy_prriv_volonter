<template>
    <div>
        <header>
            <component :is="'cats'"></component>
        </header>
        <router-link to="/">Главная</router-link>
        <router-link to="/cats">Категории</router-link>
        <router-link to="/event">Событие</router-link>
        <router-link to="/event/add">Добавить событие</router-link>
        <router-view></router-view>
    </div>

</template>

<script>
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    import index from './components/index2'
    import cats from './components/cats'
    import viewEvent from './components/event/index'
    import addEvent from './components/event/add'
    Vue.use(VueRouter);
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
        router,
        components:{
            'cats':cats
        }
    })
</script>

<style scoped>

</style>