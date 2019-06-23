<template>
    <div>
        <div class="col-10 headline">
            <router-link to="/" class="back"><span>&#60;</span></router-link>
            <p>События</p>
        </div>
        <template>
            <Slide right noOverlay>
                <router-link class="dropA" to="/cats">
                    <span class="drop">События</span>
                </router-link>
                <router-link class="dropA" to="/add/event">
                    <span class="drop">Добавить событие</span>
                </router-link>
            </Slide>
        </template>

        <div class="row" style="margin-right: 0;" v-for="event in events">
            <router-link :to="'/event/'+event.id" class="col-10 tabsSobityi">
                <div>
                    <p>{{event.name}}</p>
                    <div class="rectangle">> </div>
                </div>
            </router-link>
            <!--<router-link to="/event" class="col-10 tabsSobityi">
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
            </router-link>-->
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import axios from 'axios'
    import { Slide } from 'vue-burger-menu'
    export default {
        name: "events",
        components: {
            Slide
        },
        data(){
            return{
                events:[]
            }
        },
        mounted() {
            axios
                .get(this.$root.server+'/api/all/events')
                .then(res=>{
                    this.events=res.data
                });
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
    .headline p{
        font-weight: 500;
        font-size: 18px;
        color: white;
        display: block;
    }
    .tabsSobityi{
        width: 50px;
        background: white;
        margin: 0 auto;
        padding-top: 10px;
        margin-bottom: 20px;
        border-radius: 30px;
        color: black;
    }
    .tabsSobityi:hover{
        text-decoration: none;
    }
    .tabsSobityi p{
        font-size: 19px;
        font-style: normal;
        font-weight: normal;
        color: black;
    }
    .rectangle{
        color: #BDBDBD;
        font-size: 30px;
        margin-top: -50px;
        float: right;
    }
    .back{
        display: block;
        margin-left: 0;
        float: left;
        color:white;
        width: 100%;
    }
    .back:hover{
        text-decoration: none;
    }
    .back span{
        font-size: 30px;
        color: white;
        line-height: 40px;
    }
    .headline{
        padding-left: 15px;
        padding-right: 30px;
        padding-top: 20px;
    }
    .dropA:hover{
        text-decoration: none;
    }
</style>