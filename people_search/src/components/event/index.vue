<template>
    <div>
        <div class="col-10 headline">
            <router-link to="/cats" class="back"><span>&#60;</span></router-link>
            <p class="pone">{{savePoint.name}}</p>
            <p class="pTwo">Укажите точку на карте</p>
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
        <div v-if="savePoint">
            <yandex-map
                    :coords="[savePoint.coordLon,savePoint.coordLnd]"
                    style="width: 100%; height: 300px;"
                    :behaviors="['drag']"
                    :controls="['zoomControl']"
                    zoom="14"
            >
                <ymap-marker
                        marker-id="1"
                        marker-type="placemark"
                        :coords="coords"
                ></ymap-marker>
                <ymap-marker
                        marker-id="1"
                        marker-type="circle"
                        :coords="[savePoint.coordLon,savePoint.coordLnd]"
                        :circle-radius="savePoint.radius"
                        hint-content="Hint content 1"
                        :marker-fill="{color: '#000000', opacity: 0.4}"
                        :marker-stroke="{color: '#ff0000', width: 5}"
                ></ymap-marker>
            </yandex-map>
        </div>
        <div class="col-12">
            <div class="description">
                {{savePoint.description}}
            </div>
        </div>
        <div class="col-12 menu">
            <a>
                    <img src="/img/addphoto.png">Добавить фото
            </a>
        </div>
        <div class="col-12 menu"><a><img src="/img/geo.png">Геолокация</a></div>
        <div class="col-12 menu"><router-link to="/event/add"><img src="/img/addgeo.png">Добавить место</router-link></div>
        <div class="col-12 menu"><a><img src="/img/coordinat.png">Координаты</a></div>
        <router-view></router-view>
    </div>
</template>

<script>
    import { yandexMap, ymapMarker } from 'vue-yandex-maps'
    import axios from 'axios'
    import { Slide } from 'vue-burger-menu'
    export default {
        name: "add",
        data(){
            return{
                geolocation:'',
                coords:[],
                savePoint:''
            }
        },
        components:{yandexMap,ymapMarker,Slide},
        mounted() {
            axios
                .get(this.$root.server+'/api/event/'+this.$route.params.id)
                .then(res=>{
                    this.savePoint=res.data
                });
            this.$parent.typeView=false;
            this.$getLocation({
                enableHighAccuracy: true, //defaults to false
                timeout: Infinity, //defaults to Infinitydf
                maximumAge: 0 //defaults to 0
            })
                .then(coordinates => {
                    this.geolocation=coordinates;
                    this.coords.push(coordinates.lat);
                    this.coords.push(coordinates.lng)
                });
        },
        destroyed() {
            this.$parent.typeView=true;
        }
    }
</script>

<style scoped>
    .menu{
        height: 65px;
        line-height: 65px;
        font-size: 16px;
        text-align: center;
        margin-bottom: 15px;
        border-radius: 27px;
        margin-top: 10px;
    }
    .menu img{
        max-width: 25px;
        float: left;
        display: inline-block;
        margin-top: 20px;
        margin-left: 15px;
    }
    .menu a{
        display: block;
        background-color: white;
        border-radius: 27px;
    }
    .back{
        display: inline-block;
        margin-left: 0;
        float: left;
    }
    .back:hover{
        text-decoration: none;
    }
    .back span{
        font-size: 50px;
        color: #02248C;
    }
    .pone{
        font-weight: 500;
        font-size: 18px;
        color: white;
        display: block;
    }
    .pTwo{
        color: white;
        display: block;
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
    .description{
        text-align: center;
        padding: 10px;
        margin-top: 5px;
        margin-bottom: 5px;
        background: #DFE8F0;
        border-radius: 12.5px;
        font-style: italic;
    }
</style>