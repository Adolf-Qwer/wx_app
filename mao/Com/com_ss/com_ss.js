// Com/com_ss/com_ss.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
click:function(){
  wx.navigateBack({
    delta:1
  })

}
  }
})
