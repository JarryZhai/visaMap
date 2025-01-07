Page({
  data: {
    userInfo: {
      avatarUrl: '', // 用户头像
      nickName: '',  // 用户昵称
    },
    visas: [], // 签证列表
    isFormVisible: false, // 是否显示新增表单
    newVisa: {
      country: '',
      issueDate: '2025-01-01',  // 默认签发日期
      expiryDate: '2025-12-31', // 默认时效日期
      type: '',
    },
    touchStartX: 0, // 记录触摸开始的X坐标
    touchMoveX: 0, // 记录滑动过程中的X坐标
    activeIndex: null, // 当前处于活动状态的签证卡片索引
  },

  // 页面加载时
  onLoad() {
    this.checkUserInfo();
    this.fetchVisas();
  },

  // 检查用户是否已授权
  checkUserInfo() {
    const that = this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: (res) => {
              that.setData({ userInfo: res.userInfo });
            },
          });
        } else {
          that.setData({
            userInfo: {
              avatarUrl: '/assets/default-avatar.png',
              nickName: '游客',
            },
          });
        }
      },
    });
  },

  // 获取签证列表并处理签证状态
  fetchVisas() {
    const visas = wx.getStorageSync('visas') || [];
    visas.forEach(visa => {
      // 计算签证状态
      const status = this.getVisaStatusText(visa.expiryDate);
      const statusClass = this.getVisaStatusClass(visa.expiryDate);
      visa.status = status;
      visa.statusClass = statusClass;
    });
    this.setData({ visas });
  },

  // 获取签证状态文本
  getVisaStatusText(expiryDate) {
    const currentDate = new Date();
    const expiryDateObj = new Date(expiryDate);
    const threeMonthsLater = new Date(currentDate);
    threeMonthsLater.setMonth(currentDate.getMonth() + 3);

    if (expiryDateObj < currentDate) {
      return '过期';
    } else if (expiryDateObj <= threeMonthsLater) {
      return '即将过期';
    } else {
      return '有效';
    }
  },

  // 获取签证状态的CSS类
  getVisaStatusClass(expiryDate) {
    const currentDate = new Date();
    const expiryDateObj = new Date(expiryDate);
    const threeMonthsLater = new Date(currentDate);
    threeMonthsLater.setMonth(currentDate.getMonth() + 3);

    if (expiryDateObj < currentDate) {
      return 'status-expiring';  // 过期
    } else if (expiryDateObj <= threeMonthsLater) {
      return 'status-expiring';  // 即将过期
    } else {
      return 'status-valid';  // 有效
    }
  },

  // 显示新增签证表单
  showAddVisaForm() {
    this.setData({ isFormVisible: true });
  },

  // 隐藏新增签证表单
  hideAddVisaForm() {
    this.setData({
      isFormVisible: false,
      newVisa: { country: '', issueDate: '2025-01-01', expiryDate: '2025-12-31', type: '' },
    });
  },

  // 处理日期选择
  handleDateChange(e) {
    const { field } = e.currentTarget.dataset;
    const value = e.detail.value;
    this.setData({
      newVisa: { ...this.data.newVisa, [field]: value }
    });
  },

  // 表单输入处理
  handleInput(e) {
    const { field } = e.currentTarget.dataset;
    this.setData({
      newVisa: { ...this.data.newVisa, [field]: e.detail.value },
    });
  },

  // 提交签证信息
  submitVisa() {
    const { newVisa } = this.data;
    const requiredFields = ['country', 'issueDate', 'expiryDate', 'type'];
    const missingFields = [];
    requiredFields.forEach(field => {
        if (!newVisa[field]) {
            missingFields.push(field);
        }
    });
    if (missingFields.length > 0) {
        wx.showToast({ 
            title: `请填写完整${missingFields.join('、')}信息`, 
            icon: 'none' 
        });
        return;
    }
    const { visas } = this.data;
    // 为新签证生成唯一 ID
    const newVisaWithId = { ...newVisa, id: visas.length };
    // 计算新签证的状态
    const status = this.getVisaStatusText(newVisa.expiryDate);
    const statusClass = this.getVisaStatusClass(newVisa.expiryDate);
    newVisaWithId.status = status;
    newVisaWithId.statusClass = statusClass;
    visas.push(newVisaWithId);
    wx.setStorageSync('visas', visas);
    this.fetchVisas();
    this.hideAddVisaForm();
    wx.showToast({ title: '签证新增成功' });
  },

  // 删除签证
  deleteVisa(e) {
    const id = e.currentTarget.dataset.id;
    const visas = this.data.visas.filter(visa => visa.id !== id);
    wx.setStorageSync('visas', visas);
    this.setData({ visas });
    wx.showToast({ title: '签证已删除' });
  },

  // 触摸事件开始时记录触摸起始位置
  touchStart: function (e) {
    this.setData({
      touchStartX: e.changedTouches[0].clientX
    });
  },

  // 触摸事件滑动时记录滑动的X坐标
  touchMove: function (e) {
    this.setData({
      touchMoveX: e.changedTouches[0].clientX
    });
  },

  // 触摸事件结束时判断是否为左滑
  touchEnd: function (e) {
    const { touchStartX, touchMoveX } = this.data;
    const threshold = 100; // 设置触发删除的滑动距离
    if (touchStartX - touchMoveX > threshold) {
      const index = e.currentTarget.dataset.index;
      const visas = this.data.visas;
      visas[index].showDelete = true; // 显示删除按钮
      this.setData({
        visas: visas,
        activeIndex: index // 设置当前活动的签证卡片索引
      });
    } else if (touchMoveX - touchStartX > threshold) {
      const index = e.currentTarget.dataset.index;
      const visas = this.data.visas;
      visas[index].showDelete = false; // 隐藏删除按钮
      this.setData({
        visas: visas
      });
    }
  },

  // 隐藏删除按钮（用于恢复状态）
  hideDelete: function (e) {
    const index = e.currentTarget.dataset.index;
    const visas = this.data.visas;
    visas[index].showDelete = false; // 隐藏删除按钮
    this.setData({
      visas: visas
    });
  }
});
