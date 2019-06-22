<template>
    <div>
        <h1>События</h1>
        <div class="row">
            <router-link to="/event">
                <div class="col-10 tabsSobityi">
                    <p>Транспортные</p>
                    <div class="rectangle">> </div>
                </div>
            </router-link>
            <div class="col-10 tabsSobityi">
                <p>Пожары</p>
                <div class="rectangle">> </div>
            </div>
            <div class="col-10 tabsSobityi">
                <p>Обрушение зданий</p>
                <div class="rectangle">> </div>
            </div>
            <div class="col-10 tabsSobityi">
                <p>Гедрогеологические</p>
                <div class="rectangle">> </div>
            </div>
            <div class="col-10 tabsSobityi">
                <p>Наводнения</p>
                <div class="rectangle">> </div>
            </div>
            <div class="col-10 tabsSobityiRed">
                <p>Обрушение зданий</p>
                <div class="rectangle">> </div>
            </div>
            <div class="col-10 tabsSobityiRed">
                <p>Выброс АХОВ</p>
                <div class="rectangle">> </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "events",
        mounted() {
            this.$parent.typeView=false;
        },
        destroyed() {
            this.$parent.typeView=true;
        }
    }
</script>

<style scoped>
    h1{
        color: #02248C;
        text-align: center;
    }
    .tabsSobityi{
        width: 50px;
        background: rgba(83, 189, 0, 0.3);
        border-radius: 10px;
        margin: 0 auto;
        padding-top: 10px;
        margin-bottom: 20px;
    }
    .tabsSobityiRed{
        width: 50px;
        background: rgba(216, 42, 4, 0.3);
        border-radius: 10px;
        margin: 0 auto;
        padding-top: 10px;
        margin-bottom: 20px;
    }
    .tabsSobityiRed p{
        font-size: 19px;
        font-style: normal;
        font-weight: normal;
    }
    .tabsSobityi p{
        font-size: 19px;
        font-style: normal;
        font-weight: normal;
    }
    .rectangle{
        font-size: 30px;
        margin-top: -50px;
        float: right;
    }
</style>