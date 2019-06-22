<template>
    <div class="container headerBlock">
        <div class="row">
            <div class="col-3">
                <router-link to="/"><img src="/img/logo.png" class="logo"></router-link>
            </div>
            <div class="col-9">
                <ul class="buttonregistration">
                    <li><a href="#">Регистрация /</a></li>
                    <li><a href="#">Вход</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "comHeader"
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
    .menu{
        border-radius: 25px;
        width: 50px;
        height: 50px;
        border: 1px solid black;
        float:right;
        margin-top: 5px;
    }
</style>