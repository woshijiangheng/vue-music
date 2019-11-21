<template>
  <!-- 轮播图组件 -->
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots"></div>
  </div>
</template>

<script type="text/ecmascript-6">
// 引入轮播图插件
import Bscoll from "better-scroll";
//添加class
import { addClass } from "../../common/js/dom";
export default {
  //轮播图配置项
  props: {
    //是否循环  默认是
    loop: {
      type: Boolean,
      default: true
    },
    //自动播放
    autoPlay: {
      type: Boolean,
      default: true
    },
    //   循环时间
    interval: {
      type: Number,
      default: 3000
    }
  },
  mounted() {
    //   浏览器默认17毫秒刷新一次
    setTimeout(() => {
      this.setSliderWidth();
      this.initSlider();
    }, 20);
  },
  methods: {
    //设置轮播图宽度
    setSliderWidth() {
        
      //获取子元素  轮播图
      this.children = this.$refs.sliderGroup.children;
      let width = 0;
      console.log(this.children);

      //   获取盒子宽
      let sliderWidth = this.$refs.slider.clientWidth;
      console.log(sliderWidth);
      
      //遍历轮播图的张数
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i];
        //添加样式
        addClass(child, 'slider-item')
        child.style.width = sliderWidth+'px';
        width += sliderWidth;
      }
      if (this.loop) {
        width += 2 * sliderWidth
        this.$refs.sliderGroup.style.width=width+'px'
      }
    },
    initSlider() {
        this.slider=new Bscoll(this.$refs.slider,{
           scrollX: true,
          scrollY: false,
          momentum: false,
          snap: true,
          snapLoop: this.loop,
          snapThreshold: 0.3,
          snapSpeed: 400
        })
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable.styl';

.slider {
  min-height: 1px;

  .slider-group {
    position: relative;
    overflow: hidden;
    white-space: nowrap;

    .slider-item {
      float: left;
      box-sizing: border-box;
      overflow: hidden;
      text-align: center;

      a {
        display: block;
        width: 100%;
        overflow: hidden;
        text-decoration: none;
      }

      img {
        display: block;
        width: 100%;
      }
    }
  }

  .dots {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 12px;
    text-align: center;
    font-size: 0;

    .dot {
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: $color-text-l;

      &.active {
        width: 20px;
        border-radius: 5px;
        background: $color-text-ll;
      }
    }
  }
}
</style>