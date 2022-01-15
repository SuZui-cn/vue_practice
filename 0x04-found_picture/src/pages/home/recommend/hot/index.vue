<template>
  <view>
    <view class="hots_wrap">
      <!-- 头部 -->
      <view class="hots_title">
        <text> 热门</text>
      </view>
      <!-- 主题 -->
      <view class="hots_content">
        <view class="hot_item" v-for="item in imgList" :key="item.id">
          <image mode="aspectFill" :src="item.url"></image>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      imgList: [],
    };
  },
  mounted() {
    this.request({
      url: "http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAppsByCategory&cid=7&count=60&from=360chrome ",
    }).then((result) => {
    //   console.log(result);
      //图片获取
      this.imgList = result.data;
    //   console.log(this.imgList);
    });
  },
};
</script>

<style lang="scss">
.hots_wrap {
  padding-top: 10px;
  
  .hots_title {
    padding: 25rpx;
    text {
      
        border-left: 15rpx #fab27b solid;
        font-size: 30rpx;
        font-weight: 600;
    }
  }

  .hots_content {
    .hot_item {
      image {
        width: 33.3%;
        height: 180px;
        border: 3rpx #fff solid;
        float: left;
      }
    }
  }
}
</style>>

</style>