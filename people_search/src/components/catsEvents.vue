<template>
    <div>
        <div class="col-12 headline">
            <router-link to="/" class="back"><span>&#8592;</span></router-link>
            <h1>События</h1>
        </div>

        <div class="row" style="margin-right: 0">
            <router-link to="/event" class="col-10 tabsSobityi">
                <div>
                    <p>Транспортные</p>
                    <div class="rectangle">> </div>
                </div>
            </router-link>
            <router-link to="/event" class="col-10 tabsSobityi">
                <div>
                    <p>Пожары</p>
                    <div class="rectangle">> </div>
                </div>
            </router-link>
            <router-link to="/event" class="col-10 tabsSobityi">
                <div>
                    <p>Обрушение зданий</p>
                    <div class="rectangle">> </div>
                </div>
            </router-link>
            <router-link to="/event" class="col-10 tabsSobityi">
                <div>
                    <p>Гедрогеологические</p>
                    <div class="rectangle">> </div>
                </div>
            </router-link>
            <router-link to="/event" class="col-10 tabsSobityi">
                <div>
                    <p>Наводнения</p>
                    <div class="rectangle">> </div>
                </div>
            </router-link>
            <router-link to="/event" class="col-10 tabsSobityi">
                <div>
                    <p>Обрушение зданий</p>
                    <div class="rectangle">> </div>
                </div>
            </router-link>
            <router-link to="/event" class="col-10 tabsSobityi">
                <div>
                    <p>Выброс АХОВ</p>
                    <div class="rectangle">> </div>
                </div>
            </router-link>
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

    }
    .headline{
        text-align: center;
    }
    .tabsSobityi{
        width: 50px;
        background: #177ED8;
        margin: 0 auto;
        padding-top: 10px;
        margin-bottom: 20px;
    }
    .tabsSobityi p{
        font-size: 19px;
        font-style: normal;
        font-weight: normal;
        color: white;
    }
    .rectangle{
        color: white;
        font-size: 30px;
        margin-top: -50px;
        float: right;
    }
    .back{
        display: inline-block;
        margin-top: -19px;
        margin-left: -15px;
        float: left
    }
    .back:hover{
        text-decoration: none;
    }
    .back span{
        font-size: 50px;
        color: #02248C;
    }
</style>