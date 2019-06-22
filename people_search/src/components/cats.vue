<template>
    <div>
        <header>
            <comHeader></comHeader>
        </header>
        <div class="col-12">
            <router-link to="/" class="back"><span>&#8592;</span></router-link>
            <h1>Меню</h1>
        </div>
        <div class="container">
            <div class="row">
                <router-link to="cats/events" class="col-5 cardsEvents">
                    <img src="/img/municipal.png">
                    <p>Муниципальниые события</p>
                </router-link>
                <router-link to="cats/events" class="col-5 cardsEvents">
                    <img src="/img/Gosudrastv.png">
                    <p>Государственные события</p>
                </router-link>
                <router-link to="cats/events" class="col-5 cardsEvents">
                    <img src="/img/Grazhdansty.png">
                    <p>Гражданские события</p>
                </router-link>
                <router-link to="cats/events" class="col-5 cardsEvents">
                    <img src="/img/inMyArea.png">
                    <p>События в моей зоне</p>
                </router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

    import comHeader from './comHeader'
    export default {
        name: "index2",
        components:{
            'comHeader':comHeader,
        },
        mounted() {
            this.$parent.typeView=false;
        },
        deactivated() {
            this.$parent.typeView=true;
        }
    }
</script>

<style scoped>
    h1{
        color: #02248C;
        text-align: center;
        margin-bottom: 60px;
    }
    .cardsEvents img{
        display: block;
        margin: 0 auto;
        margin-top: 10px;
    }
    .cardsEvents p{
        font-size: 14px;
        text-align: center;
    }
    .cardsEvents{
        margin: 0 auto;
        border: 1px solid red;
        border-radius: 15px;
        margin-bottom: 25px;
    }
</style>