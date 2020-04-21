
Page({

  data: {
    user: {
      name: '',
      id: '',
      imageUrl: ''
    }
  },

  onLoad: function (options) {
    
  },

  accountIconShow: function () {

  }, //账户信息展示

  teachShow: function () {

  }, //如果已经成为教师直接进入教师端，否则完善相应信息再进入教师端

  personalOrderFormShow: function () {
    wx.navigateTo({
      url: '../mine/orderForm/orderForm'
    })
  }, //订单信息展示

  personalCollectShow: function () {
    wx.navigateTo({
      url: '../mine/collect/collect'
    })
  }, //收藏信息展示

  personalRecentBrowseShow: function () {
    wx.navigateTo({
      url: '../mine/recentBrowse/recentBrowse'
    })
  }, //最近浏览信息展示

  aboutUsShow: function () {
    wx.navigateTo({
      url: '../mine/aboutUs/aboutUs'
    })
  }, //关于开发团队的信息

  feedbackShow: function () {
    wx.navigateTo({
      url: '../mine/feedback/feedback'
    })
  }, //bug反馈

  settingShow: function () {
    wx.navigateTo({
      url: '../mine/setting/setting'
    })
  }, //设置，主要是播放
})