<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
    export default {
        name: "home",
        data() {
            return {
            }
        },
        components: {},
        methods:{

        },
        mounted() {

        }
    };
</script>
<style lang="scss" scoped>
    #app{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height:100%;
    }
</style>
