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
        width: vwMax(4440);
        height: vh(1680);
    }
</style>
