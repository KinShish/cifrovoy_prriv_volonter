<template>
    <div>
        <header>
            <comHeader></comHeader>
        </header>
        <router-link to="/">Главная</router-link>

        <router-link to="/event">Событие</router-link>
        <router-link to="/event/add">Добавить событие</router-link>
    </div>
</template>

<script>

    import comHeader from './comHeader'
    export default {
        name: "index2",
        components:{
            'comHeader':comHeader,
        }
    }
</script>

<style scoped>

</style>