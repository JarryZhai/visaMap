Page({
  data: {
    statistics: {
      unlockRate: 0,
      reachRate: 0,
      wantToGo: 0
    },
    showCountryModal: false, // 控制弹窗显示
    currentCountry: {}, // 存储选中的国家信息
    continents: [
      {
        "name": "南极洲",
        "map": "https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/travelling-to-antarctica-1518684083-785X440.jpg",
        "visaRequired": [],
        "visaFree": [
          { "chinese": "南极洲", "english": "Antarctica", "visaFree": false, "visa": false, "beenHere": false, "want2go": false }
        ],
        "visaFreeExpanded": false,
        "visaRequiredExpanded": false
      }
    ]
  },

  // 切换免签列表的展开状态
  toggleVisaFree(e) {
    const index = e.currentTarget.dataset.index;
    const key = `continents[${index}].visaFreeExpanded`;
    this.setData({
      [key]: !this.data.continents[index].visaFreeExpanded
    });
  },

  // 切换需签证列表的展开状态
  toggleVisaRequired(e) {
    const index = e.currentTarget.dataset.index;
    const key = `continents[${index}].visaRequiredExpanded`;
    this.setData({
      [key]: !this.data.continents[index].visaRequiredExpanded
    });
  },

  onShow() {
    this.updateStatistics();
  },

  showCountryModal(e) {
    const country = e.currentTarget.dataset.country;
    
    // 查找并设置当前选中的国家
    let selectedCountry = null;
    this.data.continents.forEach(continent => {
      selectedCountry = continent.visaFree.find(item => item.chinese === country.chinese) ||
                        continent.visaRequired.find(item => item.chinese === country.chinese);
    });
  
    if (selectedCountry) {
      this.setData({
        showCountryModal: true,
        currentCountry: selectedCountry
      });
    }
  },  

  closeCountryModal() {
    this.setData({
      showCountryModal: false
    });
  },

  // 更新国家状态
  updateCountryStatus(e) {
    const status = e.currentTarget.dataset.status; // 'want2go', 'beenHere', 'visa'
    const currentCountry = this.data.currentCountry;
  
    // 确保 currentCountry 存在
    if (!currentCountry) {
      console.error('currentCountry is undefined');
      return;
    }
  
    // 切换相应的状态
    currentCountry[status] = !currentCountry[status];
  
    // 更新数据
    this.setData({
      currentCountry: currentCountry
    });
  
  
    // 更新统计数据
    this.updateStatistics();
  },
  

  // 更新统计数据
  updateStatistics() {
    let totalCountries = 0;
    let unlockedCountries = 0;
    let visitedCountries = 0;
    let wantedCountries = 0;

    // 遍历大洲数据并更新统计
    this.data.continents.forEach(continent => {
      totalCountries += continent.visaFree.length + continent.visaRequired.length;

      // 统计免签国家
      continent.visaFree.forEach(item => {
        if (item.visaFree || item.visa) unlockedCountries++; // 如果免签或者有签证
        if (item.beenHere) visitedCountries++; // 如果去过
        if (item.want2go) wantedCountries++; // 如果想去
      });

      // 统计需签证国家
      continent.visaRequired.forEach(item => {
        if (item.visa || item.visaFree) unlockedCountries++; // 如果有签证或免签
        if (item.beenHere) visitedCountries++; // 如果去过
        if (item.want2go) wantedCountries++; // 如果想去
      });
    });

    // 更新统计数据
    this.setData({
      statistics: {
        unlockRate: (unlockedCountries / totalCountries * 100).toFixed(2), // 解锁率
        reachRate: (visitedCountries / totalCountries * 100).toFixed(2), // 到达率
        wantToGo: wantedCountries // 想去的国家数
      }
    });
  }
});
