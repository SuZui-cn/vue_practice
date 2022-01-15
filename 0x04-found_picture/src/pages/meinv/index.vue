<template>
  <view>
      <view class="meinv_content">
        <view class="meinv_item" v-for="item in imgList" :key="item.id">
          <image mode="aspectFill" :src="item.url_thumb"></image>
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
      url: "http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAppsByCategory&cid=6&count=90&from=360chrome ",
    }).then((result) => {
    //   console.log(result);
      //图片获取
      this.imgList = result.data;
      // console.log(this.imgList);
    });
  },
};
</script>

<style lang="scss">
  .meinv_content {
    .meinv_item {
      image {
        width: 50%;
        border: 5rpx solid #fff;
        float: left;
      }
    }
  }

</style>>

</style>