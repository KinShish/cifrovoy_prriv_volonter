<template>
    <div>
        <div class="col-12 headline">
            <router-link to="/cats" class="back"><span>&#8592;</span></router-link>
            <h1>{{savePoint.name}}</h1>
        </div>

        <div v-if="savePoint">
            <div v-if="workInEvent.length>0">
            <yandex-map
                    :coords="[savePoint.coordLon,savePoint.coordLnd]"
                    style="width: 100%; height: 300px;"
                    :behaviors="['drag']"
                    :controls="['zoomControl']"
                    zoom="14">
                <ymap-marker v-for="(event, index) in workInEvent" :key="index"
                                 :marker-id='event.id'
                                 marker-type="circle"
                                 hint-content="Часть "
                                 :coords="[event.coordLon,event.coordLnd]"
                                 :marker-fill="{color: '#000000', opacity: 0.4}"
                                 :marker-stroke="{color: '#ff0000', width: 2}"
                                 :circle-radius="30"
                    ></ymap-marker>


            </yandex-map>
            </div>
        </div>
        <b-row>
            <b-col cols="12">
                <div class="description">
                    {{savePoint.description}}
                </div>
                <ul class="menu">
                    <a><li><div><img src="/img/addphoto.png"></div>Добавить фото</li></a>
                    <a><li><div><img src="/img/geo.png"></div>Геолокация</li></a>
                    <router-link to="/event/add"><li><div><img src="/img/addgeo.png"></div>Добавить место</li></router-link>
                    <a><li><div><img src="/img/coordinat.png"></div>Координаты</li></a>
                </ul>
            </b-col>
        </b-row>
        <router-view></router-view>
    </div>
</template>

<script>
    import { yandexMap, ymapMarker } from 'vue-yandex-maps'
    import axios from 'axios'
    export default {
        name: "add",
        data(){
            return{
                workInEvent:[],
                savePoint:''
            }
        },
        components:{yandexMap,ymapMarker},
        mounted() {
            axios
                .get(this.$root.server+'/api/event/'+this.$route.params.id)
                .then(res=>{
                    this.savePoint=res.data
                });
            axios
                .get(this.$root.server+'/api/all/workInEvent/'+this.$route.params.id)
                .then(res=>{
                    this.workInEvent=res.data;
                });
            this.$parent.typeView=false;
            this.$getLocation({
                enableHighAccuracy: true, //defaults to false
                timeout: Infinity, //defaults to Infinitydf
                maximumAge: 0 //defaults to 0
            })
                .then(coordinates => {
                    this.geolocation=coordinates;
                });
        },
        destroyed() {
            this.$parent.typeView=true;
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
        margin-top: 10px;
    }
    .menu img{
        max-width: 25px;
        display: block;
        margin: auto;
    }
    .menu a{
        display: block;
    }
    .menu div{
        width: 40px;
        display: inline-block;
    }
    .back{
        display: inline-block;
        margin-top: -19px;
        float: left
    }
    .back:hover{
        text-decoration: none;
    }
    .back span{
        font-size: 50px;
        color: #02248C;
    }
    .headline{
        text-align: center;
        padding-left: 0;
        padding-right: 30px;
    }
    .description{
        text-align: center;
        padding: 10px;
        margin-top: 5px;
        margin-bottom: 5px;
        border: 2px solid #02248C;
        border-radius: 10px;
    }
</style>