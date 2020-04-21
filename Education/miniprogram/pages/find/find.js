// miniprogram/pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lesson: [{ id: 1, name: 'asd', price: 0 },
    { id: 2, name: 'qwe', price: 1 }]
  },

  lessonShow: function () {
    wx.navigateTo({
      url: '../find/lesson/lesson'
    })
  }, //点击进入该课程，查看详细信息

  searchButtonShow: function () {
    
  }, //输入完毕开始搜索

  classifyShow: function () {
    wx.navigateTo({
      url: '../find/classify/classify'
    })
  }, //展开分类页面
})