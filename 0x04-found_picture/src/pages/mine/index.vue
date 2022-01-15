<template>
    <view class="wrapper">
        <!-- 个人资料 -->
        <view class="profile">
            <view class="meta">
                
                <open-data class="avatar" type="userAvatarUrl"></open-data>
                
                <open-data class="nickname" type="userNickName"></open-data>
            </view>
        </view>
        <!-- 统计 -->
        <view class="count">
            <view class="cell"> 1 <text>我的收藏</text> </view>
            <view class="cell"> 1 <text>我的下载</text> </view>
            <view class="cell"> 2 <text>原创专栏</text> </view>
            <view class="cell"> 3 <text>我发布的</text> </view>
        </view>
        <!-- 我的圈子 -->
        <view class="circle">
            <view class="title">我的圈子</view>
            <view class="sorts">
                <text class="icon-nearby">附近</text>
                <text class="icon-wallet">钱包</text>
                <text class="icon-heart">直播</text>
                <text class="icon-run">运动</text>
            </view>
        </view>
        <!-- 壁纸管理 -->
        <view class="wallpaper icon-arrow">
            上传壁纸
        </view>
        <!-- 其它 -->
        <view class="extra">
            <view class="item icon-people">关于我们</view>
            <button open-type="feedback" class="item icon-people">意见反馈</button>
        </view>
    </view>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="scss">
    .wrapper {
        position: absolute;
        top: 0;
        bottom: 0;

        width: 100%;
        background-color: #f4f4f4;
    }

    .profile {
        height: 375rpx;
        background-color: #9edadd;
        display: flex;
        justify-content: center;
        align-items: center;

        .meta {
            .avatar {
                display: block;
                width: 140rpx;
                height: 140rpx;
                border-radius: 50%;
                border: 2rpx solid #fff;
                overflow: hidden;
            }

            .nickname {
                display: block;
                text-align: center;
                margin-top: 20rpx;
                font-size: 30rpx;
                color: #fff;
            }
        }
    }

    .count {
        display: flex;
        margin: 0 20rpx;
        height: 100rpx;
        text-align: center;
        border-radius: 4rpx;
        background-color: #fff;

        position: relative;
        top: -27rpx;

        .cell {
            flex: 1;
            padding-top: 16rpx;
            font-size: 27rpx;
            color: #333;
        }

        text {
            display: block;
            font-size: 24rpx;
        }
    }

    .circle {
        margin: -17rpx 20rpx 0 20rpx;
        padding: 20rpx 0;
        background-color: #fff;
        border-radius: 4rpx;

        .title {
            padding-left: 20rpx;
            font-size: 30rpx;
            color: #333;
            padding-bottom: 20rpx;
            border-bottom: 1rpx solid #eee;
        }

        .sorts {
            padding-top: 30rpx;
            text-align: center;
            display: flex;
        }

        [class*="icon-"] {
            flex: 1;
            font-size: 24rpx;

            &::before {
                display: block;
                font-size: 48rpx;
                margin-bottom: 8rpx;
                color: #ea4451;
            }
        }
    }

    .wallpaper {
        line-height: 1;
        background-color: #fff;
        font-size: 30rpx;
        padding: 25rpx 0 25rpx 20rpx;
        margin: 10rpx 20rpx;
        color: #333;
        border-radius: 4rpx;
    }

    .extra {
        margin: 0 20rpx;
        background-color: #fff;
        border-radius: 4rpx;

        .item {
            line-height: 1;
            padding: 25rpx 0 25rpx 20rpx;
            border-bottom: 1rpx solid #eee;
            font-size: 30rpx;
            color: #333;
        }

        button {
            text-align: left;
            background-color: #fff;

            &::after {
                border: none;
                border-radius: 0;
            }
        }
    }

    .icon-people {
        position: relative;

        &::before {
            position: absolute;
            top: 50%;
            right: 20rpx;
            transform: translateY(-50%);
        }
    }
</style>