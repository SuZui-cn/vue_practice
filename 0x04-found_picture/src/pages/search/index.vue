<template>
    <view class="category">
      <view class="category_item">
        <navigator url="./meinv/index">
          <view class="img" style="background-image: url('../../static/img/category/01.jpg');background-size: 100% auto; margin-top: 10rpx;">
           美女
          </view>
        </navigator>
        <navigator url="./car/index">
          <view class="img" style="background-image:url('../../static/img/category/04.png');background-size:100% auto; margin-top: 10rpx;">
          汽车
          </view>
        </navigator>
        <navigator url="./fengjing/index">
          <view class="img" style="background-image:url('../../static/img/category/02.png');background-size:100% auto">
          风景
          </view>
        </navigator>
        <navigator url="./dongman/index">
          <view class="img" style="background-image:url('../../static/img/category/03.png');background-size:100% auto">
          动漫
          </view>
        </navigator>
        <navigator url="./word/index">
          <view class="img" style="background-image:url('../../static/img/category/05.png');background-size:100% auto">
          文字
          </view>
        </navigator>
        <navigator url="./movement/index">
          <view class="img" style="background-image:url('../../static/img/category/06.png');background-size:100% auto">
          汽车
          </view>
        </navigator>
         <navigator url="./animal/index">
          <view class="img" style="background-image:url('../../static/img/category/02.png');background-size:100% auto">
          明宠
          </view>
        </navigator>
        <navigator url="./star/index">
          <view class="img" style="background-image:url('../../static/img/category/03.png');background-size:100% auto">
          明星风尚
          </view>
        </navigator>
        <navigator url="./gaoqing/index">
          <view class="img" style="background-image:url('../../static/img/category/05.png');background-size:100% auto">
          4K
          </view>
        </navigator>
        <navigator url="./game/index">
          <view class="img" style="background-image:url('../../static/img/category/06.png');background-size:100% auto">
          游戏
          </view>
        </navigator>
      </view>   
    </view>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.category{
  background-color: aquamarine;
  .category_item{
    // background-color: darkseagreen;
    .img{
      width: 47%;
      height: 100px;
      float: left;
      font-size: 20px;
      color:#fff;
      text-align: center;
      line-height: 100px;
      border-radius: 30rpx;
      margin: 10rpx;
    }
  }
}
</style>