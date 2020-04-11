<!--
 * @Description: 
 * @Author: tiange
 * @Date: 2020-04-11 09:35:59
 * @LastEditTime: 2020-04-11 16:08:45
 * @LastEditors: tiange
 -->
<template>
  <view class="content">
    <view class="content-top">
      <view class="top-icon">
        <image src="../../static/image/index_gougou.jpg" />
      </view>
      <view class="top-logo content-son">
        <image src="../../static/image/index_logo.png" />
      </view>
      <view class="top-operation content-son last-son">
        <image src="../../static/image/index_search.png" />
        <image src="../../static/image/index_add.png" />
      </view>
    </view>
    <FriendList></FriendList>
  </view>
</template>

<script>
import FriendList from '../../components/friendList'
export default {
  data () {
    return {
      title: 'Hello'
    }
  },
  components: {
    FriendList
  },
  onLoad () {

  },
  methods: {

  }
}
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: var(--status-bar-height);
  .content-top {
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 1px 0px 0px $uni-border-color;
    height: 88rpx;
    padding-top: var(--status-bar-height);
    box-sizing: border-box;
    .top-icon {
      display: flex;
      flex: 1;
      justify-content: flex-start;
      padding-left: 32rpx;
      box-sizing: border-box;
      align-items: center;
      image {
        width: 68rpx;
        height: 68rpx;
        border-radius: $uni-border-radius-sm;
      }
    }
    .top-logo {
      image {
        width: 88rpx;
        height: 42rpx;
      }
    }
    .top-operation {
      image {
        width: 48rpx;
        height: 48rpx;
      }
      image:nth-child(1) {
        margin-right: 20rpx;
      }
      image:nth-child(2) {
        margin-left: 20rpx;
      }
    }
    .content-son {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
