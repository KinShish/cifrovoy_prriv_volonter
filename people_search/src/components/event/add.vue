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
    export default {
        name: "add"
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