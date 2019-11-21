<template>
  <div class="recommend">
    <div class="recommend-content">
      <div  v-if="sliderList.length" class="slider-wrapper">
        <slider>
            <div v-for="item in sliderList" :key="item.id">
                <a :href="item.linkUrl">
                    <img :src="item.picUrl" alt="">
                </a>
            </div>
        </slider>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul></ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Slider from "../../base/slider/slider";
//引入配置jsonp的函数
import { getRecommend } from "../../api/recommend";
//引入jsonp的配置文件
import { ERR_OK } from "../../api/config";
export default {
    data(){
        return{
            //轮播图数据
            sliderList:[],
        }
    },
    //添加组件
  components: {
    Slider
  },
  created() {
    //   调用轮播图的函数
    this._getRecommend();
  },
  methods: {
    //   获取轮播图的函数
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
            this.sliderList=res.data.slider
          console.log(res.data.slider);
        }
      });
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable.styl';

.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;

  .recommend-content {
    height: 100%;
    overflow: hidden;

    .slider-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }

      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;

        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: $font-size-medium;

          .name {
            margin-bottom: 10px;
            color: $color-text;
          }

          .desc {
            color: $color-text-d;
          }
        }
      }
    }

    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>