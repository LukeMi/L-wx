// pages/index/index.js
var menu = require("../../../res/js/menu-widget.js");

Page({
  data: {
    menu: menu.homeMenu
  },
  onLoad: function (options) {

  },

  onPullDownRefresh: function () {
    wx.stopPullDownRefresh();
  },

  onShareAppMessage() {

  },
  
})