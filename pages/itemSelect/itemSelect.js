// pages/itemSelect/itemSelect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        itemName: '眼部检查',
        room: '体检中心106',
        queueNum: '0人'
      },
      {
        itemName: '心脏科',
        room: '体检中心108',
        queueNum: '10人'
      },
      {
        itemName: '五官科',
        room: '体检中心210',
        queueNum: '8人'
      },
      {
        itemName: '卡介苗',
        room: '体检中心202',
        queueNum: '9人'
      }
    ],
    result: []
  },

  onChange(event) {
    this.setData({
      result: event.detail
    });
  },

  toggle(event) {
    const { index } = event.currentTarget.dataset;
    const checkbox = this.selectComponent(`.checkboxes-${index}`);
    checkbox.toggle();
  },

  noop() { },
  onClickButton() {
    console.log(this.data.result);
  },


  // 下面是生命周期函数
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})