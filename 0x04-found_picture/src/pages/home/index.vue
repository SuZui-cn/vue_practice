<template>
  <view>
    <view class="home_tab">
      <view class="home_tab_title">
        <view class="title_inner">
          <uni-segmented-control
            :current="current"
            :values="items.map((v) => v.title)"
            @clickItem="onClickItem"
            styleType="text"
            activeColor="red"
          ></uni-segmented-control>
        </view>
      </view>
      <view class="home_tab_content">
        <view class="content">
          <view v-if="current === 0">
            <home-recommend></home-recommend>
          </view>
          <view v-if="current === 1">
            <home-category></home-category>
          </view>
          <view v-if="current === 2">
            <home-album></home-album>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import homeAlbum from "./album";
import homeCategory from "./category";
import homeRecommend from "./recommend";
import { uniSegmentedControl } from "@dcloudio/uni-ui";

export default {
  components: {
    homeAlbum,
    homeCategory,
    homeRecommend,
    uniSegmentedControl,
  },
  data() {
    return {
      items: [
        { title: "推荐" },
        { title: "表情包" },
        { title: "专辑" },
      ],
      current: 0,
    };
  },
  methods: {
    onClickItem(e) {
      if (this.current !== e.currentIndex) {
        this.current = e.currentIndex;
      }
    },
  }
  // onLoad(){
  //   this.request({
  //     url:"https://api.ixiaowai.cn/api/api.php?return=json"
  //   })
  //   .then(res=>{
  //     console.log(res);
  //   })
  // }
}
</script>

<style lang="scss">
.home_tab{
    .home_tab_title{
       .title_inner{
          width: 60%;
          margin: 0 auto;
       } 
    }
    .home_tab_content{
        
    }
}

   
</style>