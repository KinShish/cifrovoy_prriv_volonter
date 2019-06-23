<template>
    <div class="container headerBlock">
        <div class="row">
            <div class="col-2">
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
            </div>
        </div>
    </div>
</template>

<script>
    import { Slide } from 'vue-burger-menu'
    export default {
        name: "comHeader",
        components: {
            Slide
        }
    }
</script>

<style scoped>
    .headerBlock{
        height: 120px;
        margin-bottom: 10px;
    }
    .logo{
        width: 70px;
        margin-top: 10px;
    }
    .menu{
        border-radius: 25px;
        width: 50px;
        height: 50px;
        border: 1px solid black;
        float:right;
        margin-top: 5px;
    }
    .drop{
        font-size: 15px;
    }
    .cross-style{
        left: 10px;
    }
    .bm-burger-button {
        position: fixed;
        width: 36px;
        height: 20px;
        left: 36px;
        top: 36px;
        cursor: pointer;
    }
    .bm-menu {
        height: 100%; /* 100% Full-height */
        width: 0; /* 0 width - change this with JavaScript */
        position: fixed; /* Stay in place */
        z-index: 1000; /* Stay on top */
        top: 0;
        left: 0;
        background-color: ; /* Black*/
        overflow-x: hidden; /* Disable horizontal scroll */
        padding-top: 60px; /* Place content 60px from the top */
        transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }
    .dropA:hover{
        text-decoration: none;
        background-color: #02248C;
    }
    .back{
        display: inline-block;
        margin-top: -30px;
        margin-left: -15px;

    }
    .back:hover{
        text-decoration: none;
    }
    .back span{
        font-size: 50px;
        color: black;
    }

</style>