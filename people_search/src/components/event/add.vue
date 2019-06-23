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
                        :balloonTemplate="'<p>Введите данные для изменения зоны ЧС</p><label class=col-12 for=inputCoordin >Координаты</label> <input class=col-6 id=inputCoordin type=text><input class=col-6 type=text><label for=inputRadius class=col-6>Радиус</label> <input class=col-6 id=inputRadius type=text value='+radius+'>'"
                ></ymap-marker>
            </yandex-map>
        </div>
        <label for="name">Название:</label>
        <input id="name" placeholder="Введите название события" class="col-12">
        <br>
        <label for="message">Описание:</label>
        <textarea id="message" class="col-12" placeholder="Введите текст"></textarea>
        <button class="createEventsBtn">Добавить</button>
        <router-link class="createEventsBtn" to="/cats">Отмена</router-link>
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
    input.col-5{
        border: 1px solid black;
        margin: 0 auto;
    }
    .createEventsBtn{
        background: black;
        border:black;
        color: white;
        height: 30px;
        margin-bottom: 50px;
        float: right;
        margin-right: 20px;
        margin-top: 20px;
    }
    a.createEventsBtn {
        width: 80px;
        text-align: center;
        line-height: 30px;
    }

</style>