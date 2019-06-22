<template>
    <div class="container headerBlock">
        <div class="row">
            <div class="col-10">
                <router-link to="/"><img src="/img/logo.png" class="logo"></router-link>
            </div>
            <div class="col-2">
                <template>
                    <Slide right noOverlay>
                        <router-link class="dropA" to="/cats">
                            <span class="drop">Государственные события</span>
                        </router-link>
                        <router-link class="dropA" to="/cats">
                            <span class="drop">Муниципальные события</span>
                        </router-link>
                        <router-link class="dropA" to="/cats">
                            <span class="drop">Гражданские события</span>
                        </router-link>
                        <router-link class="dropA" to="/cats">
                            <span class="drop">События в моей зоне</span>
                        </router-link>
                    </Slide>
                </template>
            </div>
                <div class="col-12">
                    <router-link to="/" class="back"><span>&#8592;</span></router-link>
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
        background: linear-gradient(180deg, rgba(2, 36, 140, 0.3) 0%, rgba(23, 126, 216, 0.3) 100%);;
        height: 120px;
    }
    .logo{
        width: 70px;
        margin-top: 10px;
    }
    .buttonregistration{
        margin-top: -15px;
        text-align: right;
        float: right;
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
    .menu{
        border-radius: 25px;
        width: 50px;
        height: 50px;
        border: 1px solid black;
        float:right;
        margin-top: 5px;
    }
    .drop{
        font-size: 15px;
    }
    .cross-style{
        left: 10px;
    }
    .bm-burger-button {
        position: fixed;
        width: 36px;
        height: 20px;
        left: 36px;
        top: 36px;
        cursor: pointer;
    }
    .bm-menu {
        height: 100%; /* 100% Full-height */
        width: 0; /* 0 width - change this with JavaScript */
        position: fixed; /* Stay in place */
        z-index: 1000; /* Stay on top */
        top: 0;
        left: 0;
        background-color: rgb(63, 63, 65); /* Black*/
        overflow-x: hidden; /* Disable horizontal scroll */
        padding-top: 60px; /* Place content 60px from the top */
        transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }
    .dropA:hover{
        text-decoration: none;
        background-color: #303032;
    }
    .back{
        display: inline-block;
        margin-top: -30px;
        margin-left: -15px;
    }
    .back:hover{
        text-decoration: none;
    }
    .back span{
        font-size: 50px;
        color: white;
    }
</style>