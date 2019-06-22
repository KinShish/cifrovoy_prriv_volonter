<template>
    <div>
        <header>
            <comHeader></comHeader>
        </header>
        <router-link to="/">Главная</router-link>
        <router-link to="/event">Событие</router-link>
        <router-link to="/event/add">Добавить событие</router-link>
        <b-row>
            <b-col cols="12">
                <ul class="menu">
                    <li><img src="/img/addphoto.png">Добавить фото</li>
                    <li><img src="/img/geo.png">Геолокация</li>
                    <li><img src="/img/addgeo.png">Добавить место</li>
                    <li><img src="/img/coordinat.png">Координаты</li>
                </ul>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import comHeader from '../comHeader'
    export default {
        name: "add",
        components:{
            'comHeader':comHeader,
        }
    }
</script>

<style scoped>
    .menu li{
        list-style: none;
        height: 25px;
        line-height: 25px;
        display: block;
        font-size: 16px;
    }
    .menu{
        padding-inline-start: 15px;
    }
    .menu img{
        margin-right: 10px;
    }
</style>