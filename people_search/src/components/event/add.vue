<template>
    <div>
        <h1>Добавить событие</h1>
        <p>Укажите точку на карте</p>
        <div v-if="coords">
            <yandex-map
                    :coords="coords"
                    style="width: 100%; height: 300px;"
                    zoom="10"
            >
                <ymap-marker
                        marker-id="3"
                        marker-type="circle"
                        :coords="coords"
                        :circle-radius="radius"
                        hint-content="Hint content 1"
                        :marker-fill="{color: '#000000', opacity: 0.4}"
                        :marker-stroke="{color: '#ff0000', width: 5}"
                        :balloonTemplate="'<p>Введите данные для изменения зоны ЧС</p><label for=inputCoordin>Координаты</label> <input id=inputCoordin type=text><input type=text><label for=inputRadius>Радиус</label> <input id=inputRadius type=text value='+radius+'>'"
                ></ymap-marker>
            </yandex-map>
        </div>
        <textarea class="col-12 message" placeholder="Введите текст"></textarea>
        <br>
        <button class="createEventsBtn">Отправить</button>
    </div>
</template>

<script>
    import { yandexMap, ymapMarker } from 'vue-yandex-maps'
    //import axios from 'axios'
    export default {
        name: "add",
        data(){
            return{
                geolocation:'',
                coords:[],
                radius:'1000',
                savePoint:''
            }
        },
        components:{yandexMap,ymapMarker},
        mounted() {
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
    .message{
        margin-top: 30px;
    }
    .createEventsBtn{
        background: black;
        border:black;
        color: white;
        height: 30px;
        margin-bottom: 50px;
    }
</style>