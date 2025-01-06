Page({
  data: {
    continents: [
      {
        name: "亚洲",
        map: "/assets/maps/asia.png",
        "visaFree": [
          { "chinese": "中国", "english": "China", "visaFree": true, "visa": false, "beenHere": true, "want2go": false },
          { "chinese": "阿塞拜疆", "english": "Azerbaijan", "visaFree": true, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "巴林", "english": "Bahrain", "visaFree": true, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "东帝汶", "english": "East Timor", "visaFree": true, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "印度尼西亚", "english": "Indonesia", "visaFree": true, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "卡塔尔", "english": "Qatar", "visaFree": true, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "老挝", "english": "Laos", "visaFree": true, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "黎巴嫩", "english": "Lebanon", "visaFree": true, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "马尔代夫", "english": "Maldives", "visaFree": true, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "缅甸", "english": "Myanmar", "visaFree": true, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "尼泊尔", "english": "Nepal", "visaFree": true, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "斯里兰卡", "english": "Sri Lanka", "visaFree": true, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "泰国", "english": "Thailand", "visaFree": true, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "土库曼斯坦", "english": "Turkmenistan", "visaFree": true, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "文莱", "english": "Brunei", "visaFree": true, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "伊朗", "english": "Iran", "visaFree": true, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "亚美尼亚", "english": "Armenia", "visaFree": true, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "约旦", "english": "Jordan", "visaFree": true, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "越南", "english": "Vietnam", "visaFree": true, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "新加坡", "english": "Singapore", "visaFree": false, "visa": false, "beenHere": false, "want2go": true },
          { "chinese": "格鲁吉亚", "english": "Georgia", "visaFree": true, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "乌兹别克斯坦", "english": "Uzbekistan", "visaFree": true, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "哈萨克斯坦", "english": "Kazakhstan", "visaFree": true, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "巴基斯坦", "english": "Pakistan", "visaFree": true, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "韩国（济州岛）", "english": "South Korea (Jeju Island)", "visaFree": true, "visa": false, "beenHere": false, "want2go": false }
      ],
      "visaRequired": [
          { "chinese": "韩国", "english": "South Korea", "visaFree": false, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "阿富汗", "english": "Afghanistan", "visaFree": false, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "不丹", "english": "Bhutan", "visaFree": false, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "柬埔寨", "english": "Cambodia", "visaFree": false, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "日本", "english": "Japan", "visaFree": false, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "吉尔吉斯斯坦", "english": "Kyrgyzstan", "visaFree": false, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "马来西亚", "english": "Malaysia", "visaFree": false, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "蒙古", "english": "Mongolia", "visaFree": false, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "菲律宾", "english": "Philippines", "visaFree": false, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "台湾省", "english": "Taiwan Province", "visaFree": false, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "塔吉克斯坦", "english": "Tajikistan", "visaFree": false, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "土耳其", "english": "Turkey", "visaFree": false, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "朝鲜", "english": "North Korea", "visaFree": false, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "叙利亚", "english": "Syria", "visaFree": false, "visa": false, "beenHere": false, "want2go": false },
          { "chinese": "以色列", "english": "Israel", "visaFree": false, "visa": false, "beenHere": false, "want2go": false }
      ],
        visaFreeExpanded: true,
        visaRequiredExpanded: false
      },
      {
        name: "欧洲",
        map: "/assets/maps/asia.png",
        "visaRequired": [
            { "chinese": "阿尔巴尼亚", "english": "Albania", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "安道尔", "english": "Andorra", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "亚美尼亚", "english": "Armenia", "visaFree": false, "visa": true, "beenHere": false, "want2go": false }, // 注意：亚美尼亚位于外高加索地区，有时被归类为亚洲。
            { "chinese": "奥地利", "english": "Austria", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "阿塞拜疆", "english": "Azerbaijan", "visaFree": false, "visa": true, "beenHere": false, "want2go": false }, // 注意：阿塞拜疆位于外高加索地区，有时被归类为亚洲。
            { "chinese": "白俄罗斯", "english": "Belarus", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "比利时", "english": "Belgium", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "波斯尼亚和黑塞哥维那", "english": "Bosnia and Herzegovina", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "保加利亚", "english": "Bulgaria", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "克罗地亚", "english": "Croatia", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "塞浦路斯", "english": "Cyprus", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "捷克共和国", "english": "Czech Republic", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "丹麦", "english": "Denmark", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "爱沙尼亚", "english": "Estonia", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "芬兰", "english": "Finland", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "法国", "english": "France", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "格鲁吉亚", "english": "Georgia", "visaFree": false, "visa": true, "beenHere": false, "want2go": false }, // 注意：格鲁吉亚位于外高加索地区，有时被归类为亚洲。
            { "chinese": "德国", "english": "Germany", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "希腊", "english": "Greece", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "匈牙利", "english": "Hungary", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "冰岛", "english": "Iceland", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "爱尔兰", "english": "Ireland", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "意大利", "english": "Italy", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "哈萨克斯坦", "english": "Kazakhstan", "visaFree": false, "visa": true, "beenHere": false, "want2go": false }, // 注意：哈萨克斯坦大部分领土位于亚洲。
            { "chinese": "科索沃", "english": "Kosovo", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "拉脱维亚", "english": "Latvia", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "列支敦士登", "english": "Liechtenstein", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "立陶宛", "english": "Lithuania", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "卢森堡", "english": "Luxembourg", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "马其顿（北马其顿）", "english": "North Macedonia", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "马耳他", "english": "Malta", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "摩尔多瓦", "english": "Moldova", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "摩纳哥", "english": "Monaco", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "黑山", "english": "Montenegro", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "荷兰", "english": "Netherlands", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "挪威", "english": "Norway", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "波兰", "english": "Poland", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "葡萄牙", "english": "Portugal", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "罗马尼亚", "english": "Romania", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "俄罗斯", "english": "Russia", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "圣马力诺", "english": "San Marino", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "塞尔维亚", "english": "Serbia", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "斯洛伐克", "english": "Slovakia", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "斯洛文尼亚", "english": "Slovenia", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "西班牙", "english": "Spain", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "瑞典", "english": "Sweden", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "瑞士", "english": "Switzerland", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "土耳其", "english": "Turkey", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "乌克兰", "english": "Ukraine", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "英国", "english": "United Kingdom", "visaFree": false, "visa": true, "beenHere": false, "want2go": false },
            { "chinese": "梵蒂冈", "english": "Vatican City", "visaFree": false, "visa": true, "beenHere": false, "want2go": false }
        ],
        visaFreeExpanded: true,
        visaRequiredExpanded: false
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
  }
});