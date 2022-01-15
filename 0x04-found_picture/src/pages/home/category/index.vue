<template>
  <view class="content">
    <swiper
      class="swiper-box"
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
      circular="true"
      previous-margin="20px"
      next-margin="20px"
      >
      <swiper-item v-for="(item, index) in info" :key="index">
        <view :class="item.colorClass" class="swiper-item">
          <navigator url="/pages/bqb/index">
            <image class="image" :src="item.url" mode="aspectFill" />
          </navigator>
        </view>
      </swiper-item>
    </swiper>
    <view class="meinv_content">
      <view class="meinv_item" v-for="item in imgList" :key="item.index">
		    <view class="xingwen">今日新闻{{item.title}}</view>
          <image
            mode="aspectFill"
            :src="item.image"
            @tap="previewImg"
            :data-imgurl="item.url"
            @longtap="Imgsc"
          ></image>
		    <view class="xiangqing">
		  	  时间{{item.passtime}}
			    <navigator :url="item.path">
			      详情请点击
          </navigator >
        </view>  
      </view>
    </view>
  </view>
</template>

<script>
// import uniSwiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue'
export default {
  data() {
    return {
      imgList: [],
      indicatorDots: true,
      autoplay: true,
      interval: 2000, //切换的间隔时间
      duration: 1000, //滑动动画时长

      info: [
        {
          colorClass: "uni-bg-red",
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F14%2F20200214120107_rENUF.thumb.400_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642849795&t=1eed1958cd345d772a18c16670dd14a5",
          content: "靓仔一",
        },
        {
          colorClass: "uni-bg-green",
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fiv.mtyvideo.com%2Fc2020%2F05%2F31%2Fs4bfo0knlnx.gif&refer=http%3A%2F%2Fiv.mtyvideo.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642849800&t=f58910f358d344cdd5c1fae9ad493165",
          content: "靓仔一",
        },
        {
          colorClass: "uni-bg-blue",
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01356c5bdb4008a80121ab5d666f48.gif&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642849795&t=3247adda43aa1301c36d70c3af5725f2",
          content: "靓仔一",
        },
      ],
    };
  },
  onLoad() {},
  mounted() {
    this.request({
      url: "https://api.apiopen.top/getWangYiNews",
    }).then((result) => {
      console.log(result);
      //图片获取
      this.imgList = result.result;
    
    });
  },
};
</script>

<style>
page {
  width: 100%;
  height: 100%;
}

.content {
  /* text-align: center; */
  height: 100vw;
}

.swiper-box {
  /* width: 95%; */
  height: 200px;
}

.swiper-item {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #999;
  color: #fff;
  margin: 10px;
  border-radius: 15upx;
  /* app上运行不显示图片，就需要加下面这行，设置高度 */
  height: 380upx;
}
.image {
  width: 750rpx;
  height: 380upx;
  border-radius: 15upx;
}
.meinv_content image {
  width: 350px;
  height: 500upx;
}
.xingwen {
  font-size: 30rpx;
  color: #666;
  margin-left: 30rpx;
}
.xiangqing{
	 font-size: 30rpx;
          color: #666;
          right:0rpx;
}
</style>

