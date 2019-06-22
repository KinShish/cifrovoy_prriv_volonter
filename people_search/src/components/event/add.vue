<template>
    <div>
        <h1>Укажите точку на карте</h1>
        <div style="height: 300px;background: red"></div>
        <textarea class="col-12 message" placeholder="Введите текст"></textarea>
        <br>
        <button class="createEventsBtn">Отправить</button>
    </div>
</template>

<script>
    import { yandexMap, ymapMarker } from 'vue-yandex-maps'
    import axios from 'axios'
    export default {
        name: "add",
        components:{yandexMap,ymapMarker},
        mounted() {
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