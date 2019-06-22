<template>
    <div class="container headerBlock">
        <div class="row">
            <div class="col-10">
                <router-link to="/"><img src="/img/logo.png" class="logo"></router-link>
            </div>
            <div class="col-2">
                <template>
                    <Slide right width="250">
                        <router-link to="/cats">
                            <span>Государственные события</span>
                        </router-link>
                        <router-link to="/cats">
                            <span>Муниципальные события</span>
                        </router-link>
                        <router-link to="/cats">
                            <span>Гражданские события</span>
                        </router-link>
                        <router-link to="/cats">
                            <span>События в моей зоне</span>
                        </router-link>
                    </Slide>
                </template>
            </div>
            <div class="col-12">
                <ul class="buttonregistration">
                    <li><a href="#">Регистрация /</a></li>
                    <li><a href="#">Вход</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import { Slide } from 'vue-burger-menu'
    export default {
        name: "comHeader",
        components: {
            Slide
        }
    }
</script>

<style scoped>
    .headerBlock{
        background: grey;
        height: 120px;
    }
    .logo{
        width: 70px;
        margin-top: 10px;
    }
    .buttonregistration{
        margin-top: 70px;
        text-align: right;
    }
    .buttonregistration a{
        background: none;
        border:none;
        color: white;
        font-style: normal;
        font-weight: normal;
        font-size: 17px;
        line-height: 16px;
    }
    .buttonregistration li{
        list-style-type: none;
        display: inline-block;
        margin-top: 15px;
    }
</style>