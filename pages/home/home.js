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
      issueDate: '',
      validity: 0,
      type: '',
    },
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
          // 已授权，直接获取用户信息
          wx.getUserInfo({
            success: (res) => {
              that.setData({ userInfo: res.userInfo });
            },
          });
        } else {
          // 未授权，显示默认头像和提示
          that.setData({
            userInfo: {
              avatarUrl: '/assets/default-avatar.png', // 默认头像
              nickName: '游客',                       // 默认昵称
            },
          });
        }
      },
    });
  },

  // 用户点击获取头像和昵称按钮
  getUserProfile(descText) {
    const defaultDesc = '用于完善个人信息';
    const actualDesc = descText || defaultDesc;
    wx.getUserProfile({
        desc: actualDesc, // 获取授权时的说明，可传入自定义描述，不传则用默认
        success: (res) => {
            this.setData({ userInfo: res.userInfo });
            wx.showToast({ title: '授权成功', icon: 'success' });
        },
        fail: () => {
            wx.showToast({ title: '授权失败', icon: 'none' });
        },
    });
  },

  // 获取签证列表（从本地存储）
  fetchVisas() {
    const visas = wx.getStorageSync('visas') || [];
    const now = new Date();
    const processedVisas = visas.map((visa) => {
      const issueDate = new Date(visa.issueDate);
      const expiryDate = new Date(issueDate);
      expiryDate.setDate(expiryDate.getDate() + parseInt(visa.validity, 10));
      return {
        ...visa,
        isExpiring: (expiryDate - now) / (1000 * 60 * 60 * 24) <= 30, // 判断是否即将过期
      };
    });
    this.setData({ visas: processedVisas });
  },

  // 计算签证到期日期并判断是否即将过期
  processVisaDate(visa) {
    const now = new Date();
    const issueDate = new Date(visa.issueDate);
    const expiryDate = new Date(issueDate);
    expiryDate.setDate(expiryDate.getDate() + parseInt(visa.validity, 10));
    return {
      ...visa,
        isExpiring: (expiryDate - now) / (1000 * 60 * 60 * 24) <= 30, // 判断是否即将过期
    };
  },

  // 显示新增签证表单
  showAddVisaForm() {
    this.setData({ isFormVisible: true });
  },

  // 隐藏新增签证表单
  hideAddVisaForm() {
    this.setData({
      isFormVisible: false,
      newVisa: { country: '', issueDate: '', validity: 0, type: '' },
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
    const requiredFields = ['country', 'issueDate', 'validity', 'type'];
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
    visas.push(newVisa);
    wx.setStorageSync('visas', visas);
    this.fetchVisas();
    this.hideAddVisaForm();
    wx.showToast({ title: '签证新增成功' });
  },
});
