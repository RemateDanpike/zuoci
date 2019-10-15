<template>
    <div class="detail">
        <div class="wrap">
            <div id="container">
                <div class="grid">
                    <div class="imgholder">
                    </div>
                    <strong>Sunset Lake</strong>
                    <p>A peaceful sunset view...</p>
                    <div class="meta">by j osborn</div>
                </div>
                <div class="grid">
                    <div class="imgholder">
                    </div>
                    <strong>Bridge to Heaven</strong>
                    <p>Where is the bridge lead to?</p>
                    <div class="meta">by SigitEko</div>
                </div>
                <div class="grid">
                    <div class="imgholder">
                    </div>
                    <strong>Autumn</strong>
                    <p>The fall of the tree...</p>
                    <div class="meta">by Lars van de Goor</div>
                </div>
                <div class="grid">
                    <div class="imgholder">
                    </div>
                    <strong>Winter Whisper</strong>
                    <p>Winter feel...</p>
                    <div class="meta">by Andrea Andrade</div>
                </div>
                <div class="grid">
                    <div class="imgholder">
                    </div>
                    <strong>Light</strong>
                    <p>The only shinning light...</p>
                    <div class="meta">by Lars van de Goor</div>
                </div>
                <div class="grid">
                    <div class="imgholder">
                    </div>
                    <strong>Rooster's Ranch</strong>
                    <p>Rooster's ranch landscape...</p>
                    <div class="meta">by Andrea Andrade</div>
                </div>
                <div class="grid">
                    <div class="imgholder">
                    </div>
                    <strong>Autumn Light</strong>
                    <p>Sun shinning into forest...</p>
                    <div class="meta">by Lars van de Goor</div>
                </div>
                <div class="grid">
                    <div class="imgholder">
                    </div>
                    <strong>Yellow cloudy</strong>
                    <p>It is yellow cloudy...</p>
                    <div class="meta">by Zsolt Zsigmond</div>
                </div>
                <div class="grid">
                    <div class="imgholder">
                    </div>
                    <strong>Herringfleet Mill</strong>
                    <p>Just a herringfleet mill...</p>
                    <div class="meta">by Ian Flindt</div>
                </div>
                <div class="grid">
                    <div class="imgholder">
                    </div>
                    <strong>Battle Field</strong>
                    <p>Battle Field for you...</p>
                    <div class="meta">by Andrea Andrade</div>
                </div>
                <div class="grid">
                    <div class="imgholder">
                    </div>
                    <strong>Sundays Sunset</strong>
                    <p>Beach view sunset...</p>
                    <div class="meta">by Robert Strachan</div>
                </div>
                <div class="grid">
                    <div class="imgholder">
                    </div>
                    <strong>Sun Flower</strong>
                    <p>Good Morning Sun flower...</p>
                    <div class="meta">by Zsolt Zsigmond</div>
                </div>
                <div class="grid">
                    <div class="imgholder">
                    </div>
                    <strong>Beach</strong>
                    <p>Something on beach...</p>
                    <div class="meta">by unknown</div>
                </div>
                <div class="grid">
                    <div class="imgholder">
                    </div>
                    <strong>Flowers</strong>
                    <p>Hello flowers...</p>
                    <div class="meta">by R A Stanley</div>
                </div>
                <div class="grid">
                    <div class="imgholder">
                    </div>
                    <strong>Alone</strong>
                    <p>Lonely plant...</p>
                    <div class="meta">by Zsolt Zsigmond</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    var col = '';
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
            },
            animate() {
                var currentWidth = 1100;
                var winWidth = $(window).width();
                var conWidth;
                if (winWidth < 660) {
                    conWidth = 440;
                    col = 2
                } else if (winWidth < 880) {
                    conWidth = 660;
                    col = 3
                } else if (winWidth < 1100) {
                    conWidth = 880;
                    col = 4;
                } else {
                    conWidth = 1100;
                    col = 5;
                }

                    currentWidth = conWidth;
                    $('#container').width(conWidth);
                    $('#container').BlocksIt({
                        numOfCol: col,
                        offsetX: 8,
                        offsetY: 8
                    });
            }
        },
        mounted() {
            var that = this;
                setTimeout(function(){
                    $(window).trigger("resize");
                })

            $(window).resize(function () {
                that.animate()
            });
            $('.grid').click(function () {
                $(this).remove()
                setTimeout(function () {
                    that.animate()
                })
            })
        },
        activated() {
            console.log(0)
            var that = this
            // setTimeout(function () {
            //     that.back()
            // }, 2000)
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
        }
    }

    body {
        margin: 0;
        padding: 0;
        /*background:url(bg.gif) 0 0 repeat #f7f5f5;*/
        color: #333;
        font-family: Cambria, Georgia, serif;
        font-size: 15px;
        overflow-x: hidden;
    }

    hgroup {
        display: block;
    }

    a {
        color: #35BFFF;
        text-decoration: none;
    }

    a:hover, a:active {
        color: #91DCFF;
    }

    /* clearfix */
    .clearfix {
        clear: both;
    }

    /* wrapper css */
    #wrapper {
        margin-top: 70px;
        width: 100%;
    }

    #wrapper hgroup {
        text-align: center;
    }

    #wrapper h2 {
        margin: 5px 0;
        color: #FF6D99;
        text-shadow: 1px 1px 2px #A50031;
        font-size: 33px;
        font-family: Arial Narrow, Arial, sans-serif;
    }

    #wrapper h3 {
        font-style: italic;
        font-weight: normal;
        font-size: 18px;
        text-shadow: 1px 1px 0 #fff;
        color: #888;
        margin: 5px 0;
    }

    #container {
        position: relative;
        width: 1100px;
        margin: 0 auto 25px;
        padding-bottom: 10px;

    }

    .grid {
        width: 188px;
        min-height: 100px;
        padding: 15px;
        background: #fff;
        margin: 8px;
        font-size: 12px;
        float: left;
        box-shadow: 0 1px 3px rgba(34, 25, 25, 0.4);
        -moz-box-shadow: 0 1px 3px rgba(34, 25, 25, 0.4);
        -webkit-box-shadow: 0 1px 3px rgba(34, 25, 25, 0.4);

        -webkit-transition: top 1s ease, left 1s ease;
        -moz-transition: top 1s ease, left 1s ease;
        -o-transition: top 1s ease, left 1s ease;
        -ms-transition: top 1s ease, left 1s ease;
    }

    .grid2 {
        width: 300px !important;
    }

    .grid strong {
        border-bottom: 1px solid #ccc;
        margin: 10px 0;
        display: block;
        padding: 0 0 5px;
        font-size: 17px;
    }

    .grid .meta {
        text-align: right;
        color: #777;
        font-style: italic;
    }

    .grid .imgholder img {
        max-width: 100%;
        background: #ccc;
        display: block;
    }

    @media screen and (max-width: 1240px) {
        body {
            overflow: auto;
        }
    }

    @media screen and (max-width: 900px) {
        #backlinks {
            float: none;
            clear: both;
        }
        #backlinks a {
            display: inline-block;
            padding-right: 20px;
        }
        #wrapper {
            margin-top: 90px;
        }
    }

</style>
