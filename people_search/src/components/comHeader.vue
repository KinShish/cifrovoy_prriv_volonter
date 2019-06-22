<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <img src="public/img/logo.png" class="logo">
            </div>
            <div class="col-6">
                <ul class="buttonregistration">
                    <li><a href="#">Регистрация /</a></li>
                    <li><a href="#">Вход</a></li>
                </ul>
                <button class="menu"></button>
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