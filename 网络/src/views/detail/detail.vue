<template>
    <div class="detail">
        <div class="left">
            <div class="leftItem fl">
                <div class="lf_title">
                    <div class="lf_title1">萧山2018年GDPqwqwqwqwqwq </div>
                    <div class="lf_title2"></div>
                </div>
            </div>
        </div>
        <div class="center"></div>
        <div class="right"></div>
    </div>
</template>

<script>
    export default {
        name: "detail",
        data() {
            return {}
        },
        created() {

        },
        methods: {},
        mounted() {

        }
    }
</script>

<style scoped lang="scss">
    .detail{
        width: vwMax(3840);
        height: vh(1080);
        background: #133594;
        .left{
            //设置外部宽高
            width: vwMax(668);
            height: vh(937);
            margin-left: vwMax(20);
            display: flex;
            justify-content: center;
            align-items: center;
            .leftItem{
                height: vh(937);
                width: vwMax(668);
                border:1px solid rgba(3,146,255,1);
                &.fl{
                    background:linear-gradient(180deg,rgba(0,17,94,0.24) 0%,rgba(0,38,163,0.24) 97%) rgba(0,0,0,0.24);
                    box-shadow:0px 0px 16px 0px rgba(7,95,255,1) inset,0px 0px 8px 0px rgba(80,112,255,1) inset;
                    border-radius:16px;
                    background-image: url(../../assets/img/bgline.png);
                    background-size: 10px 10px;
                }
                .lf_title {
                    width: vwMax(668);
                    height: vh(56);
                    line-height: vh(56);
                    overflow: hidden;
                    display: flex;
                    justify-content: flex-start;

                    div {
                        font-size: vh(27);
                        display: inline-block;
                        font-family: PingFangSC-Semibold;
                        font-weight: 600;
                        padding-left: vh(20);
                        color: rgba(0, 198, 255, 1);
                        opacity: 1;
                    }

                    .lf_title1 {
                        width: vwMax(297);
                        background: url('../../assets/img/topline1.png') no-repeat;
                        /*background-position: 0 vh(-4);*/
                        background-position: 0 -2px;
                        background-size: 100% 100%;
                    }

                    .lf_title2 {
                        width: vwMax(371);
                        background: url('../../assets/img/topline2.png');
                        background-position: 0 vh(-4);
                    }
                }
            }
        }
    }
</style>
