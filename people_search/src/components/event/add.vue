<template>
    <div>
        <div class="col-12 headline">
            <router-link to="/cats" class="back"><span>&#8592;</span></router-link>
            <h3>Добавить событие</h3>
            <p>Укажите точку на карте</p>
        </div>


        <div v-if="coords">
            <yandex-map
                    :coords="coords"
                    style="width: 100%; height: 400px;"
                    zoom="10"
                    :behaviors="['drag']"
                    :controls="['zoomControl']"
            >
                <ymap-marker
                        marker-id="1"
                        marker-type="circle"
                        :coords="coords"
                        :circle-radius="radius"
                        hint-content="Зона происшествия"
                        :marker-fill="{color: '#000000', opacity: 0.4}"
                        :marker-stroke="{color: '#ff0000', width: 5}"
                ></ymap-marker>
            </yandex-map>
        </div>
        <p>Введите данные для изменения зоны ЧС</p>
        <label class=col-12 for=inputCoordin >Координаты</label>
        <input class=col-6 id=inputCoordin type=text @keydown="onChenge()" ref="inputCoords0" :value="coords[0]"><input class=col-6 type=text @keydown="onChenge()" ref="inputCoords1" :value="coords[1]">
        <label for=inputRadius class=col-6>Радиус</label>
        <input class=col-6 id=inputRadius type=text @keydown="onChenge()" ref="inputRadius" :value="radius">
        <label for="name">Название:</label>
        <input id="name" placeholder="Введите название события" class="col-12" @keydown="onChenge()" ref="inputName" :value="name">
        <br>
        <label for="message">Описание:</label>
        <textarea id="message" class="col-12" placeholder="Введите текст" @keydown="onChenge()" ref="inputDescription" >{{description}}</textarea>
        <button class="createEventsBtn" @click="save()">Добавить</button>
        <router-link class="createEventsBtn" to="/cats">Отмена</router-link>
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
                name:'',
                description:'',
                radius:'1000',
                savePoint:'',
            }
        },
        components:{yandexMap,ymapMarker},
        methods:{
            onChenge(){
                this.coords=[];
                this.coords.push(this.$refs.inputCoords0.value);
                this.coords.push(this.$refs.inputCoords1.value);
                this.radius=this.$refs.inputRadius.value;
                this.name=this.$refs.inputName.value;
                this.description=this.$refs.inputDescription.value;
            },
            save(){
                axios
                    .post(this.$root.server+'/api/save/event',{params:{coords:this.coords,name:this.name,radius:this.radius,description:this.description}})
                    .then(res=>{
                        this.$router.push({ path: '/event/'+res.data.id });
                    })
            }
        },
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
                    this.coords.push(coordinates.lng);
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
    .back{
        display: inline-block;
        margin-top: -26px;
        margin-left: 0;
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
    a.createEventsBtn {
        width: 80px;
        text-align: center;
        line-height: 30px;
    }

</style>