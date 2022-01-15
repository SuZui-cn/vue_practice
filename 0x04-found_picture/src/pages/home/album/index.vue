<template>
  <view>
    <view
      class="news"
      v-for="(item,index) in newslist"
      :key="index"
    >
      <img
        class="news-Pic"
        :src="item.picUrl"
      />
      <view class="news-title">{{item.title}}</view>
      <view class="news-description">{{item.description}}</view>
      <!-- <view class="news-ctime">{{item.ctime}}</view>
      <view class="news-source">{{item.source}}</view> -->
    </view>
  </view>
</template>

<script>

export default {
  data () {
    return {
      // api: {
      //   key: '408e7129d54845b36e3c1b75c8d162e3',
      //   num: 10
      // },
      newslist: [
        // {
        //   "id": "e0b9638ae82dae48ef286d14dfb6c4d7",
        //   "ctime": "2021-03-18 16:35",
        //   "title": "《Apex英雄》封禁700多个高段位开挂者隔热板Bug目前正在修复",
        //   "description": "在对抗作弊和开挂的永无止境的战争中，重生娱乐采取了又一轮措施，其最新一轮封禁已经奏效。继去年11月419名顶级分段的《Apex英雄》玩...",
        //   "source": "新浪电竞",
        //   "picUrl": "//n.sinaimg.cn/games/639/w400h239/20210318/c25b-kmkptxe6554750.jpg",
        //   "url": "//dj.sina.com.cn/article/kknscsi7936390.shtml"
        // },
        // {
        //   "id": "a8aa36675df83fee7b43c4730515754d",
        //   "ctime": "2021-03-18 16:35",
        //   "title": "2021LCK春季赛季后赛晋级形势：T1惊险晋级",
        //   "description": "2021年LCK春季常规赛的赛程已经进入尾声，对于正在冲击季后赛的队伍来说只剩最后两周的时间。今年LCK赛区完成了联盟化改革，首次将季...",
        //   "source": "新浪电竞",
        //   "picUrl": "//n.sinaimg.cn/games/639/w400h239/20210318/65f4-kmkptxe6613024.jpg",
        //   "url": "//dj.sina.com.cn/article/kknscsi7939778.shtml"
        // },
        // {
        //   "id": "49714f4a573af0de61b94923f29c5302",
        //   "ctime": "2021-03-18 16:35",
        //   "title": "ENCE、G2锁定出线Vitality需险中求生",
        //   "description": "ESLProLeagueS13的小组赛正在如火如荼的进行，目前B组还有最后一轮比赛，比赛将于3月19日的凌晨2点钟开赛三场同开。",
        //   "source": "新浪电竞",
        //   "picUrl": "//n.sinaimg.cn/games/639/w400h239/20210312/0d54-kmeeiut0904585.jpg",
        //   "url": "//dj.sina.com.cn/article/kknscsi7942016.shtml"
        // }
      ]
    }
  },
  methods: {
    loadNews () {
      // this.request({
      //   url: 'http://api.tianapi.com/esports/index',
      //   method: 'get'
      // }).then((res) => {
      //   console.log(res.data.newslist);
      //   this.newslist = res.data.newslist
      // })
      wx.request({
        url: 'https://api.tianapi.com/esports/index',
        data: {
          key: '408e7129d54845b36e3c1b75c8d162e3',
          num: 10
        },
        success: (res) => {
          console.log(res.data)
          this.newslist = res.data.newslist
        },
        error: (res) => {
          console.log("请求发出失败")
        }
      })
    }
  },
  mounted () {
    this.loadNews()
  }
}
</script>

<style scoped>
.news {
  margin-top: 20px;
}
.news-Pic {
  margin: 0 auto;
  width: 80%;
}
.news-title {
  margin: 0 auto;
  width: 75%;
  font-size: larger;
}
.news-description {
  margin-top: 5px;
  height: 50px;
  text-indent: 20px;
}
.news-ctime {
  margin: 0 auto;
}
</style>