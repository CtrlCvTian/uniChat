<!--
 * @Description: 
 * @Author: tiange
 * @Date: 2020-04-11 15:57:40
 * @LastEditTime: 2020-04-11 16:55:47
 * @LastEditors: tiange
 -->
<template>
  <view class="login-content">
    <view class="login-top">
      <view class="top-left">×</view>
      <view class="top-right">注册</view>
    </view>
    <view class="login-article">
      <view class="center-logo">
        <image src="../../static/image/index_logo.png" />
      </view>
      <view class="article">
        <view class="login-title">登录</view>
        <view class="login-welcome">您好，欢迎来到 yike！</view>
        <view class="username">
          <input
            class="input"
            placeholder="用户名"
          />
        </view>
        <view class="password">
          <input
            password
            placeholder='密码'
          />
        </view>
        <view class="login_button">
          <button class="login_submit">登录</button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {

    };
  }
}
</script>

<style lang="scss">
.login-content {
  background-color: $uni-bg-color;
  .login-top {
    height: 88rpx;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 64rpx;
    box-sizing: border-box;
    .top-left {
      font-size: 36rpx;
      color: #000000;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
    }
    .top-right {
      font-size: 36rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
    }
  }
  .login-article {
    .center-logo {
      padding: 80rpx 0 54rpx 0;
      box-sizing: border-box;
      height: 226rpx;
      display: flex;
      justify-content: center;
      image {
        width: 194rpx;
        height: 92rpx;
      }
    }
    .article {
      padding: 0px 64rpx;
      box-sizing: border-box;
      .login-title {
        font-size: 56rpx;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(39, 40, 50, 1);
        margin-bottom: 14rpx;
      }
      .login-welcome {
        font-size: 40rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(39, 40, 50, 0.5);
        margin-bottom: 50rpx;
      }
      .username {
        height: 44rpx !important;
        border-bottom: 1px solid #272832;
        padding: 20rpx 0;
        .uni-input-wrapper {
          height: 44rpx !important;
          border: none !important;
          .uni-input-placeholder.input-placeholder {
            height: 44rpx !important;
            border: none !important;
          }
          .uni-input-input {
            height: 44rpx !important;
            line-height: 44rpx !important;
            border: none !important;
          }
        }
      }
      .password {
        height: 44rpx !important;
        border-bottom: 1px solid #272832;
        padding: 20rpx 0;
        margin-top: 10rpx;
        .uni-input-wrapper {
          height: 44rpx !important;
          .uni-input-placeholder.input-placeholder {
            height: 44rpx !important;
          }
          .uni-input-input {
            height: 44rpx !important;
            line-height: 44rpx !important;
          }
        }
      }
      .login_button {
        margin-top: 120rpx;
        display: flex;
        justify-content: center;
        .login_submit {
          width: 520rpx;
          height: 96rpx;
          background: rgba(255, 228, 49, 1);
          box-shadow: 0rpx 50rpx 32rpx -36rpx rgba(255, 228, 49, 0.4);
          border-radius: 48rpx;
        }
      }
    }
  }
}
</style>
