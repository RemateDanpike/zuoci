<template>
    <div class="detail">
        <div class="wrap">
            <div class="left">
                <div class="leftItem fl">
                    <div class="lf_title">
                        <div class="lf_title1">萧山2018年GDP</div>
                        <div class="lf_title2"></div>
                    </div>
                    <div class="leftTop">
                        <div class="common leftTop-left">
                            <h2>萧山GDP</h2>
                            <span>2018年</span>
                        </div>
                        <div class="common leftTop-right">
                            <h2>
                                2106
                            </h2>
                            <span>萧山2018年GDP
<br/>（亿元）</span>
                        </div>
                    </div>
                    <div class="leftMid">
                        <div class="leftMid-common">
                            <h2>
                                2106
                            </h2>
                            <span>萧山2018年GDP
<br/>（亿元）</span>
                        </div>
                        <div class="leftMid-common">
                            <h2>
                                2106
                            </h2>
                            <span>萧山2018年GDP
<br/>（亿元）</span>
                        </div>
                        <div class="leftMid-common">
                            <h2>
                                2106
                            </h2>
                            <span>萧山2018年GDP
<br/>（亿元）</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="center">
                <div class="leftItem fl">
                    <div class="lf_title">
                        <div class="lf_title1">2018年各乡镇(街道)GDP情况</div>
                        <div class="lf_title2"></div>
                    </div>
                    <div class="center-main">
                        <div class="center-left">
                            <div class="list firstline">
                                <div>乡镇</div>
                                <div>GDP</div>
                                <div>同比</div>
                            </div>
                            <div class="list">
                                <div>城厢</div>
                                <div>86</div>
                                <div class="green">2.1%</div>
                            </div>
                            <div class="list" v-for="i in 13">
                                <div>城厢</div>
                                <div>86</div>
                                <div class="red">2.1%</div>
                            </div>
                        </div>
                        <div class="center-right">
                            <div class="list firstline">
                                <div>乡镇</div>
                                <div>GDP</div>
                                <div>同比</div>
                            </div>
                            <div class="list">
                                <div>城厢</div>
                                <div>86</div>
                                <div class="green">2.1%</div>
                            </div>
                            <div class="list" v-for="i in 13">
                                <div>城厢</div>
                                <div>86</div>
                                <div class="red">2.1%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="leftItem fl">
                    <div class="lf_title">
                        <div class="lf_title1">萧山特色小镇近一年GDP贡献情况</div>
                        <div class="lf_title2"></div>
                    </div>
                    <div class="right-main">
                        <div class="box" v-for="i in 8">

                        </div>
                    </div>

                </div>
            </div>
        </div>
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
        methods: {
            back() {
                this.$router.go(-1);
            }
        },
        activated() {
            console.log(0)
            var that = this
            setTimeout(function () {
                that.back()
            }, 2000)
        }
    }
</script>

<style scoped lang="scss">
    .detail {
        width: vwMax(3840);
        height: vh(1080);
        background: #133594;

        .wrap {
            width: 100%;
            height: 100%;

            .left, .center, .right {
                float: left;
                margin-left: vwMax(20);
            }
        }

        .leftItem {
            height: vh(935);
            border: 1px solid rgba(3, 146, 255, 1);

            &.fl {
                background: linear-gradient(180deg, rgba(0, 17, 94, 0.24) 0%, rgba(0, 38, 163, 0.24) 97%) rgba(0, 0, 0, 0.24);
                box-shadow: 0px 0px 16px 0px rgba(7, 95, 255, 1) inset, 0px 0px 8px 0px rgba(80, 112, 255, 1) inset;
                border-radius: 16px;
                background-image: url(../../assets/img/bgline.png);
                background-size: 10px 10px;
            }

            .lf_title {
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
                    /*width: vwMax(297);*/
                    display: inline-block;
                    background: url('../../assets/img/topline1.png') no-repeat;
                    /*background-position: 0 vh(-4);*/
                    background-position: 0 -2px;
                    background-size: 100% 100%;
                }

                .lf_title2 {
                    flex: 1;
                    background: url('../../assets/img/topline2.png');
                    background-position: 0 vh(-4);
                }
            }
        }

        .left {
            //设置外部宽高
            margin-left: 0 !important;
            width: vwMax(668);
            height: vh(937);
            margin-left: vwMax(20);
            display: flex;
            justify-content: center;
            align-items: center;

            .leftTop {
                width: vwMax(588);
                height: vh(231);
                background: linear-gradient(90deg, rgba(121, 247, 255, 0.24) 0%, rgba(68, 235, 255, 0) 100%);
                margin: vh(30) vwMax(40);
                display: flex;
                flex-direction: row;

                .common {
                    flex: 1;
                    width: 1%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }

                .leftTop-left {
                    color: #44EBFF;

                    h2 {
                        font-size: vwMax(44);
                    }

                    span {
                        display: inline-block;
                        margin-top: vh(2);
                        font-size: vwMax(24);
                    }
                }

                .leftTop-right {
                    color: #44EBFF;

                    h2 {
                        font-size: vwMax(100);
                    }

                    span {
                        text-align: center;
                        display: inline-block;
                        margin-top: vh(2);
                        color: #fff;
                        font-size: vwMax(24);
                    }
                }
            }

            .leftMid {
                width: vwMax(588);
                height: vh(180);
                margin: 0 vwMax(40);
                display: flex;
                flex-direction: row;

                .leftMid-common {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    flex-direction: column;
                    color: #44EBFF;

                    h2 {
                        font-size: vwMax(80);
                    }

                    span {
                        color: #fff;
                        font-size: vwMax(22);
                    }
                }
            }
        }

        .center {
            width: vwMax(1053);
            height: vh(937);

            .center-main {
                height: vh(820);
                width: vwMax(1003);
                margin-left: vwMax(25);
                display: flex;
                justify-content: space-between;
                flex-direction: row;
                margin-top: vh(30);

                .center-left {
                    width: vwMax(495);
                    background: rgba(0, 0, 0, .2);
                }

                .center-right {
                    width: vwMax(480);
                    background: rgba(0, 0, 0, .2);
                }

                .list {
                    display: flex;
                    flex-direction: row;
                    height: vh(52);
                    font-size: vwMax(22);
                    color: #fff;

                    &.firstline {
                        font-size: vwMax(20);
                        height: vh(60);
                        color: #44EAFD;
                        background: rgba(0, 198, 255, .2);
                    }

                    .red {
                        color: #EF4864;
                    }

                    .green {
                        color: #2FC25B;
                    }

                    div {
                        flex: 1;
                        width: 1%;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                    }
                }
            }
        }

        .right {
            width: vwMax(668);
            height: vh(937);
            overflow-y: scroll;

            .right-main {
                height: vh(850);
                overflow-y: scroll;
            }

            .box {
                width: vwMax(618);
                height: vh(232);
                background: darkcyan;
                margin: vh(30) auto 0;
            }
        }
    }
</style>
