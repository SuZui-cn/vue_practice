<template>
  <view>
      <view class="meinv_content">
        <view class="meinv_item" v-for="item in imgList" :key="item.index">
          <image mode="aspectFill" :src="item.url" @tap="previewImg" :data-imgurl="item.url" @longtap="Imgsc"></image>
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
  methods: {
    
//预览单张图片
  previewImg(e){
        //urls为数组，数据里有多少图片链接则显示多少张，若只想预览一张的话，直接传只有一个图片地址的数组即可
    let imgurl=e.currentTarget.dataset.imgurl
    let imgArr=[]
    imgArr[0] = imgurl
    uni.previewImage({
      current:0,
      urls: imgArr
    })
  },
  Imgsc(){
    uni.showToast({
      title:"收藏成功",
      icon:"none",
      duration:5000
    })
  }
  },
  mounted() {
    this.request({
      url: "http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAppsByCategory&cid=35&count=90&from=360chrome ",
    }).then((result) => {
      // console.log(result);
      //图片获取
      // this.imgList = result.data;
      // console.log(this.imgList);
       for (let index = 0; index < result.data.length; index++) {
          let img  = {}
          img.url=result.data[index].url_thumb
          this.imgList.push(img)
      }
      console.log(this.imgList);
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