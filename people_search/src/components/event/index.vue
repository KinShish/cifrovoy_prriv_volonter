<template>
    <div>
        <router-link to="/">Главная</router-link>
        <router-link to="/event">Событие</router-link>
        <router-link to="/event/add">Добавить событие</router-link>{{savePoint}}
        <div v-if="coords">
            <yandex-map
                    :coords="coords"
                    style="width: 100%; height: 300px;"
            >
                <ymap-marker
                        marker-id="1"
                        marker-type="placemark"
                        :coords="coords"
                ></ymap-marker>
                <ymap-marker
                        marker-id="1"
                        marker-type="circle"
                        :coords="coords"
                        :circle-radius="geolocation.altitude"
                        hint-content="Hint content 1"
                        :marker-fill="{color: '#000000', opacity: 0.4}"
                        :marker-stroke="{color: '#ff0000', width: 5}"
                ></ymap-marker>
            </yandex-map>
        </div>
        <b-row>
            <b-col cols="12">
                <ul class="menu">
                    <li><img src="/img/addphoto.png">Добавить фото</li>
                    <li><img src="/img/geo.png">Геолокация</li>
                    <li><img src="/img/addgeo.png">Добавить место</li>
                    <li><img src="/img/coordinat.png">Координаты</li>
                </ul>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import { yandexMap, ymapMarker } from 'vue-yandex-maps'
    import axios from 'axios'
    export default {
        name: "add",
        data(){
            return{
                geolocation:'',
                coords:[],
                savePoint:''
            }
        },
        components:{yandexMap,ymapMarker},
        mounted() {
            console.log(this.$root)
            axios
                .get(this.$root.server+'/api/event')
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
    .menu li{
        list-style: none;
        height: 25px;
        line-height: 25px;
        display: block;
        font-size: 16px;
    }
    .menu{
        padding-inline-start: 15px;
    }
    .menu img{
        margin-right: 10px;
    }
</style>