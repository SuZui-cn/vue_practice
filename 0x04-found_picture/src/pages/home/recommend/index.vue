<template>
 <view>
   <!-- 推荐开始 -->
   <view class="recommend_warp">
     <view class="recommend_item" v-for="(item,index) in imgList.slice(0,4)" :key="index" >
       <image mode="aspectFill" :src="item.thumb"  bindtap="imgYu"></image>
     </view>
   </view>
   <!-- 推荐结束 -->
   <!-- 月份开始 -->
   <view class="months_warp">
     <view class="months_title">
       <view class="months_title_info">
         <view class="months_info">
           <text>12/</text>
            01日
           <view class="months_text">
             你负责美，我负责看
           </view>
         </view>
       </view>
       <view class="months_title_more">更多》</view>
     </view>
      <view class="months_content">
         <view class="months_item" v-for="(item,index) in imgList.slice(4,13)" :key="index" >
       <image mode="aspectFill" :src="item.thumb"></image>
     </view>
      </view>
   </view>
    <!-- 月份结束 -->
    <view class="hot">
      <recommend-hot></recommend-hot>
    </view>
 </view>
</template>

<script>
import recommendHot from "./hot";

export default {
  components:{
    recommendHot
  },
  data() {
    return {
      imgList:[],
    }
  },
  previewImage: function (e) {
    console.log(e)
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: this.data.images // 需要预览的图片http链接列表
    })
  },
  mounted() {
    this.request({
      url:"http://service.picasso.adesk.com/v1/vertical/vertical",
      // data:{
      //   //要获取几条
      //   // limit:4,
      //   //要跳过几条
      //   // skip:0,
      //   //关键字
      // }
    })
    .then(result=>{
      // console.log(result);
      //图片获取
      this.imgList = result.res.vertical;
      console.log(this.imgList);
    })
  }
}
</script>

<style lang="scss" scoped>

.recommend_warp{

 .recommend_item{
   height: 50%;
   background-color: red;
  
   image{
    width: 50%;
    height: 100px;
    border: 7rpx #fff solid;
    float: left;}
  }
}
.months_warp {
   clear: both; 
  .months_title {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 20rpx;
    vertical-align:bottom; 
    .months_title_info {
     
      color:#fab27b;
      font-weight: 600;
      font-size: 30rpx;
      
      .months_info {
           display: flex;
           align-items:flex-end;
        text {

          font-size: 36rpx;
        }

        .months_text {
          font-size: 30rpx;
          color: #666;
          margin-left: 30rpx;
          
        }
      }
    }

    .months_title_more {
      padding-top: 10rpx;
      font-size: 26rpx;
      color: #fab27b;
    
    }
  }

  .months_content {
    .months_item{
      image{
        width: 33.3%;
        height: 180px;
        border: 3rpx #fff solid;
        float: left;
        }
   }
  }
  
}

</style>