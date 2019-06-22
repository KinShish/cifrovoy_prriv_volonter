<template>
    <div>
        <header>
            <comHeader></comHeader>
        </header>
        <h1>Меню</h1>
        <div class="containerCards">
            <div class="row col-12">
                <router-link to="cats/events" class="col-6 cardsEvents">
                    <img src="/img/municipal.png">
                    <p>Муниципальниые события</p>
                </router-link>
                <router-link to="cats/events" class="col-6 cardsEvents">
                    <img src="/img/Gosudrastv.png">
                    <p>Государственные события</p>
                </router-link>
                <router-link to="cats/events" class="col-6 cardsEvents">
                    <img src="/img/Grazhdansty.png">
                    <p>Гражданские события</p>
                </router-link>
                <router-link to="cats/events" class="col-6 cardsEvents">
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
        }
    }
</script>

<style scoped>
    .containerCards{
        width: 100%;
        padding-right: 15px;
        padding-left: 20px;
        margin-right: auto;
        margin-left: auto;

    }
    h1{
        color: #02248C;
        text-align: center;
        margin-bottom: 60px;
    }
    .cardsEvents img{
        display: block;
        margin: 0 auto
    }
    .cardsEvents p{
        text-align: center;
    }
    .cardsEvents{
        margin: 0 auto;
        border: 1px solid red;
        border-radius: 15px;
        margin-left: 10px;
    }
</style>