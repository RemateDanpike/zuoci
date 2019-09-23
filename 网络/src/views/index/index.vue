<template>
    <div class="index">
        <div class="position center"></div>
        <div class="position type1-common"
             :data-parentangle='0'
             :data-angle='360/typeList.length*index+180+(360/typeList.length)/2'
             v-for="(item,index) in typeList"
             :style="[{transform:'rotate('+(360/typeList.length*index+180+(360/typeList.length)/2)+'deg)'}]"
        >
            <div class="line"></div>
            <div class="circle" :data-index="index">
                <span :style="[{transform:'rotate('+-((360/typeList.length*index+180+(360/typeList.length)/2))+'deg)'}]">{{index}}</span>
            </div>
            <div class="type2-common"
                 :data-parentangle='360/typeList.length*index+180+(360/typeList.length)/2'
                 :data-angle='360/typeList2.length*index2+180+(360/typeList2.length)/2'
                 v-for="(item2,index2) in typeList2"
                 :style="[{transform:'rotate('+(360/typeList2.length*index2+180+(360/typeList2.length)/2)+'deg)'}]"
            >
                <div class="line"></div>
                <div class="circle2" :data-index="index2">
                    <span :style="[{
                    transform:'rotate('+-((360/typeList2.length*index2+180+(360/typeList2.length)/2)+360/typeList.length*index+180+(360/typeList.length)/2)+'deg)'
                    }]">{{index2}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    var dw1 = 500, dw2 = 100, pageCenter;//虚线一变长长度和虚线二变长长度定义，此处为像素，动画修改css要除100,pageCenter为页面中心坐标
    var centerPoint,
        activeNode = -1,
        clickStatus = false//点击状态，防止重复点击
    export default {
        name: "index",
        data() {
            return {
                typeList: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
                typeList2: ['1', '1', '2', '3', '4', '5', '6', '7', '8', '9', '2', '3', '4', '5', '6', '7', '8', '9', '2', '3', '4', '5', '6', '7', '8', '9', '2', '3', '4', '5', '6', '7', '8', '9', '2', '3', '4', '5', '6', '7', '8', '9', '2', '3', '4', '5', '6', '7', '8', '9', '2'],
            }
        },
        components: {},
        created() {

        },
        methods: {
            computedFinal(finalOffset) {
                return [pageCenter[0] - finalOffset[0], pageCenter[1] - finalOffset[1]]
            },
            getLineWH(angle, dLength) {//获取变长后的实际偏移xy距离，用于坐标计算，dLength为虚线伸长距离，angle为当前点击圆的偏移角度
                var finalW, finalH
                if (angle == 0) {
                    finalH = 0
                    finalW = dLength
                } else if (angle > 0 && angle < 90) {
                    var p = angle * Math.PI / 2 / 90
                    var h = Math.abs(Math.sin(p) * dLength)
                    var w = Math.abs(Math.cos(p) * dLength)
                    finalH = h
                    finalW = w
                } else if (angle == 90) {
                    finalH = dLength
                    finalW = 0
                } else if (angle > 90 && angle < 180) {
                    var p = (180 - angle) * Math.PI / 2 / 90
                    var h = Math.abs(Math.sin(p) * dLength)
                    var w = Math.abs(Math.cos(p) * dLength)
                    finalH = h
                    finalW = w
                } else if (angle == 180) {
                    finalH = 0
                    finalW = dLength
                } else if (angle > 180 && angle < 270) {
                    var p = (angle - 180) * Math.PI / 2 / 90
                    var h = Math.abs(Math.sin(p) * dLength)
                    var w = Math.abs(Math.cos(p) * dLength)
                    finalH = h
                    finalW = w
                } else if (angle > 270 && angle < 360) {
                    var p = (360 - angle) * Math.PI / 2 / 90
                    var h = Math.abs(Math.sin(p) * dLength)
                    var w = Math.abs(Math.cos(p) * dLength)
                    finalH = h
                    finalW = w
                }
                return [finalW, finalH]
            },
            getNextOffset(angle, dLength, prevOffset) {
                var lineOffset = this.getLineWH(angle, dLength)//获取变长后的实际偏移xy距离
                // console.log(lineOffset)
                var offsetX, offsetY;
                // console.log(angle)
                if (angle == 0) {
                    offsetX = prevOffset[0] + lineOffset[0]
                    offsetY = prevOffset[1]
                } else if (angle > 0 && angle < 90) {
                    offsetX = prevOffset[0] + lineOffset[0]
                    offsetY = prevOffset[1] + lineOffset[1]
                } else if (angle == 90) {
                    offsetX = prevOffset[0]
                    offsetY = prevOffset[1] + lineOffset[1]
                } else if (angle > 90 && angle < 180) {
                    offsetX = prevOffset[0] - lineOffset[0]
                    offsetY = prevOffset[1] + lineOffset[1]
                } else if (angle == 180) {
                    offsetX = prevOffset[0] - lineOffset[0]
                    offsetY = prevOffset[1]
                } else if (angle > 180 && angle < 270) {
                    offsetX = prevOffset[0] - lineOffset[0]
                    offsetY = prevOffset[1] - lineOffset[1]
                } else if (angle > 270 && angle < 360) {
                    offsetX = prevOffset[0] + lineOffset[0]
                    offsetY = prevOffset[1] - lineOffset[1]
                }
                return [offsetX, offsetY]
            },
            lineChangeAnimate(target, dLength, prevOffset, fn) {
                var that = this
                let nextOffset
                let _node = $(target).parent()//获取当前点击父元素
                let _nodeAngle = _node.data('angle')//获取当前点击父元素的旋转角度
                let _nodeAngleParent = _node.data('parentangle')//获取当前点击父元素的之前旋转角度
                // console.log(_nodeAngle + _nodeAngleParent)
                if (_nodeAngle + _nodeAngleParent < 360) {
                    nextOffset = this.getNextOffset(_nodeAngle + _nodeAngleParent, dLength, prevOffset)
                } else if ((_nodeAngle + _nodeAngleParent >= 360 && _nodeAngle + _nodeAngleParent < 720)) {
                    nextOffset = this.getNextOffset(_nodeAngle + _nodeAngleParent - 360, dLength, prevOffset)
                } else {
                    nextOffset = this.getNextOffset(_nodeAngle + _nodeAngleParent - 720, dLength, prevOffset)
                }
                // let nextOffset = this.getNextOffset(_nodeAngle, _nodeAngleParent, dLength, prevOffset)
                // console.log('偏移后点击中心坐标：' + nextOffset)
                _node.css({width: _node.width() + dLength + 'px'})
                // var lineOffset = this.getLineWH(_nodeAngle, dLength)
                // console.log('当前偏移距离数组：' + this.getLineWH(_nodeAngle, dw1))
                return nextOffset
            },
            scrollCenter() {
                clickStatus = false
                var boxTop = $('.index').offset().top
                var boxLeft = $('.index').offset().left
                var _documentHeight = $(document).height()
                var _documentWidth = $(document).width()
                var percentTop = boxTop / _documentHeight
                var percentLeft = boxLeft / _documentWidth
                this.$nextTick(function () {
                    $('html,body').animate({scrollTop: boxTop, scrollLeft: boxLeft}, 1000);
                })
            },
            getCircle(node) {
                var that = this
                    var ang = (360 / that.typeList2.length) * Math.PI / 180
                    var length = Math.tan(ang/2)*200
                console.log(360 / that.typeList2.length)
                    if(ang>Math.PI/6){
                        return false
                    } else {
                        $('.type2-common').find('.line').next().css({
                            width:length*2*.8,
                            height:length*2*.8
                        })
                    }
            }
        },
        mounted() {
            this.scrollCenter()
            this.getCircle()
            var docEl = document.documentElement
            var clientWidth = docEl.clientWidth;
            var that = this
            pageCenter = [$(window).width() / 2, $(window).height() / 2]
            pageCenter = [$('#app').width() / 2, $('#app').height() / 2]
            // console.log('当前窗口中心坐标：' + pageCenter)
            $('.center').click(function () {
                centerPoint = [$(this).offset().left + $(this).width() / 2, $(this).offset().top + $(this).height() / 2]
                // console.log('当前点击中心坐标：' + centerPoint)
            })

            $('.circle').click(function () {
                // that.scrollCenter()
                var _this = this
                if (!clickStatus) {
                    clickStatus = true
                    // console.log($(this).data('index'))
                    var circlePoint = [$(this).offset().left + $(this).width() / 2, $(this).offset().top + $(this).height() / 2]
                    // console.log('当前点击中心坐标：' + circlePoint)
                    if ($(_this).hasClass('active')) {
                        $(_this).removeClass('active').nextAll().removeClass('active')
                        setTimeout(function(){
                            $('.type2-common').css({
                                overflow:'hidden'
                            })
                        },800)
                        setTimeout(function () {
                            $(_this).parent().css({width: $(_this).parent().width() - dw1 + 'px'})
                            centerPoint = [$('.center').offset().left + $('.center').width() / 2, $('.center').offset().top + $('.center').height() / 2]
                            var finalMove = that.computedFinal(centerPoint)
                            $('.position').animate({
                                top: '+=' + finalMove[1],
                                left: '+=' + finalMove[0]
                            }, 1000)
                            that.scrollCenter()
                        }, 1000)
                        activeNode = -1
                    } else {
                        if (activeNode !== -1) {
                            $('.type1-common').eq(activeNode).find('.circle').removeClass('active').nextAll().removeClass('active')
                            setTimeout(function(){
                                $('.type2-common').css({
                                    overflow:'hidden'
                                })
                            },800)
                            setTimeout(function () {
                                $('.type1-common').eq(activeNode).css({width: $('.type1-common').eq(activeNode).width() - dw1 + 'px'})
                                activeNode = $(_this).data('index')
                                // console.log('偏移后点击中心坐标：' + finalOffset)
                                var finalOffset = that.lineChangeAnimate(_this, dw1, circlePoint, function () {
                                })
                                var finalMove = that.computedFinal(finalOffset)
                                $('.position').animate({
                                    top: '+=' + finalMove[1],
                                    left: '+=' + finalMove[0]
                                }, 1500, function () {
                                    $(_this).nextAll().css('display', 'flex')
                                })
                                that.scrollCenter()
                                setTimeout(function(){
                                    $('.type2-common').css({
                                        overflow:'inherit'
                                    })
                                },800)
                                setTimeout(function () {
                                    $(_this).addClass('active').nextAll().addClass('active')
                                    // that.scrollCenter()
                                }, 1600)
                            }, 1000)
                            return false
                        } else {
                            activeNode = $(this).data('index')
                            var finalOffset = that.lineChangeAnimate(this, dw1, circlePoint, function () {
                            })
                            // console.log('偏移后点击中心坐标：' + finalOffset)
                            var finalMove = that.computedFinal(finalOffset)
                            $('.position').animate({
                                top: '+=' + finalMove[1],
                                left: '+=' + finalMove[0]
                            }, 1000, function () {
                                $(_this).nextAll().css('display', 'flex')
                            })
                            that.scrollCenter()
                            setTimeout(function(){
                                $('.type2-common').css({
                                    overflow:'inherit'
                                })
                            },800)
                            setTimeout(function () {
                                $(_this).addClass('active').nextAll().addClass('active')
                            }, 1050)
                        }
                    }
                }
            })
            $('.circle2').click(function (e) {
                // e.stopPropagation()
                console.log($(this).data('index'))
                // var circle2Point = [$(this).offset().left + $(this).width() / 2, $(this).offset().top + $(this).height() / 2]
                // // console.log('当前点击中心坐标：' + circle2Point)
                // var finalOffset1 = that.lineChangeAnimate(this, dw2, circle2Point,function(){})
                // // console.log('偏移后点击中心坐标：' + finalOffset1)
                // var finalMove = that.computedFinal(finalOffset1)
                // setTimeout(function () {
                //     $('.position').animate({
                //         top: '+=' + finalMove[1],
                //         left: '+=' + finalMove[0]
                //     }, 2000)
                // }, 2000)
            })
            // setTimeout(function(){
            //     console.log(12)
            //     $('.type1-common').eq(1).find('.circle').trigger('click')
            //     setTimeout(function(){
            //         $('.type1-common').eq(1).find('.circle').trigger('click')
            //         setTimeout(function(){
            //             console.log(12)
            //             $('.type1-common').eq(2).find('.circle').trigger('click')
            //         },3000)
            //     },3000)
            // },3000)
        }
    };
</script>
<style scoped lang="scss">
    $oneWidth: vwMax(220); //一级圆直径
    $twoWidth: vwMax(400); //一级虚线长度
    $threeWidth: vwMax(200); //二级圆直径
    $fiveWidth: 200px; //二级虚线长度
    $sixWidth: 1px; //三级圆直径
    .index {
        /*background: #bfc0ae;*/
        position: relative;
        width: vwMax(3840);
        height: vh(1080);

        .center {
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: 1000000;
            width: $oneWidth;
            height: $oneWidth;
            background: salmon;
            border-radius: 50%;
            margin-top: -$oneWidth/2;
            margin-left: -$oneWidth/2;
        }

        .type1-common {
            position: absolute;
            top: 50%;
            left: 50%;
            width: $twoWidth;
            height: $oneWidth;
            margin-left: $oneWidth/2;
            margin-top: -$oneWidth/2;
            transform-origin: -$oneWidth/2 $oneWidth/2;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: width 1s;

            .circle {
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                width: $threeWidth;
                height: $threeWidth;
                border-radius: 50%;
                background: darkcyan;
                position: relative;
            }
        }

        .type2-common {
            position: absolute;
            top: 50%;
            left: 100%;
            width: 0;
            height: 0;
            margin-left: 0;
            margin-top: -$sixWidth/2;
            transform-origin: -$threeWidth/2 $sixWidth/2;
            /*display: flex;*/
            display: none;
            justify-content: center;
            align-items: center;
            opacity: 0;
            &.active {
                width: $fiveWidth;
                height: $sixWidth;
                opacity: 1;
            }

            transition: all 1s;

            .circle2 {
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                width: $sixWidth;
                height: $sixWidth;
                border-radius: 50%;
                background: red;
                position: relative;
            }
        }


        .line {
            flex: 1;
            height: 1px;
            border-top: 1px dotted #666;
        }

    }
</style>
