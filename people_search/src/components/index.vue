<template>
    <div>
        <header v-if="!typeView">
            <comHeader></comHeader>
        </header>
        <div v-if="typeView">
            <b-container>
                <b-row>
                    <b-col cols="12" class="divName">
                        <p class="name">People search</p>
                    </b-col>
                    <b-col cols="12" class="logo">
                        <img src="/img/logo.png">
                    </b-col>
                    <b-col cols="12" class="divVxod">
                        <b-button class="button">Регистрация</b-button>
                    </b-col>
                    <b-col cols="12" class="divVxod">
                        <router-link to="/cats"><b-button class="button">Вход</b-button></router-link>
                    </b-col>
                    <b-col cols="12" class="divVxodBez">
                        <b-button class="button" to="/cats">Вход без регистрации</b-button>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

    import comHeader from './comHeader'
    export default {
        name: "index",
        data(){
            return{
                typeView:true
            }
        },
        components:{
            'comHeader':comHeader,
        },
    }
</script>

<style scoped>
    body{
        font-family: Roboto;
    }
    .divName{
        text-align: center;
        margin-top: 20px;
    }
    .name{
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;
        color: #02248C;
    }
    .logo{
        text-align: center;
        margin-top: 90px;
        margin-bottom: 40px;
    }
    .logo img{
        width: auto;
        height: auto;
    }
    .divVxod .button{
        width: 200px;
        margin: auto auto 20px auto;
        display: block;
        background-color: #177ED8;
        border-radius: 13px;
    }
    .divVxod .button:active{
        background-color: #177ED8;
        border-radius: 13px;
    }
    .divVxodBez .button{
        width: 200px;
        margin: auto auto 20px auto;
        display: block;
        background: none;
        border-radius: 13px;
        color: black;
        border: 2px solid #007bff;
    }
    .divVxodBez .button:active{
        background: none;
        border-radius: 13px;
        color: black;
        border: 2px solid #007bff;
    }
</style>