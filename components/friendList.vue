<!--
 * @Description: 
 * @Author: tiange
 * @Date: 2020-04-11 10:42:09
 * @LastEditTime: 2020-04-11 15:31:00
 * @LastEditors: tiange
 -->
<template>
  <view class="content-bottom">
    <view
      class="bottom-item"
      v-for="item in getFriendsData"
      :key="item.id"
    >
      <view class="item-left itemSon">
        <view class="leftContainer">
          <image :src="`../../static/image/${item.imgURL}`" />
          <text class="tips">{{item.tip}}</text>
        </view>
      </view>
      <view class="item-center">
        <text class="friend-name">{{item.name}}</text>
        <text class="friend-message">{{item.news}}</text>
      </view>
      <view class="item-right itemSon">{{item.time | timeDeal}}</view>
    </view>
  </view>
</template>
<script>
import friends from '../data/friends'
import filterTime from '../utils/filterTime'
export default {
  data () {
    return {

    }
  },
  filters: {
    timeDeal (val) {
      return filterTime(val)
    }
  },
  computed: {
    getFriendsData () {
      return friends
    }
  },
  methods: {

  }
}
</script>
<style lang="scss">
.content-bottom {
  display: flex;
  flex-direction: column;
  .bottom-item {
    display: flex;
    height: 168rpx;
    align-items: center;
    justify-content: space-between;
    .item-left {
      flex: 1;
      .leftContainer {
        position: relative;
        image {
          width: $uni-img-size-base;
          height: $uni-img-size-base;
          border-radius: 16rpx;
        }
        .tips {
          width: 36rpx;
          height: 36rpx;
          background: rgba(255, 93, 91, 1);
          font-size: 24rpx;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          text-align: center;
          line-height: 36rpx;
          position: absolute;
          right: -5rpx;
          top: -5rpx;
          border-radius: 50%;
        }
      }
    }
    .item-center {
      display: flex;
      flex: 2;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      overflow: hidden;
      .friend-name {
        font-size: $uni-font-size-big;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: $uni-text-color;
      }
      .friend-message {
        font-size: $uni-font-size-base;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: $uni-text-color-grey;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
      }
    }
    .item-right {
      flex: 1;
      font-size: $uni-font-size-sm;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: $uni-text-color-disable;
    }
    .itemSon {
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>