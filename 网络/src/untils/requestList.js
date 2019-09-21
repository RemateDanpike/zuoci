import request from './request'

const thisUrl = 'https://172.18.109.110/'

export default {
  methods: {

    // 智安小区
    getZaHhData: function(params, url = `${thisUrl}api/v1/data/10000007768`) {
      return request({
        url,
        method: 'get',
        params
      })
    },

    // 消防警情列表-今日警情
    getJqData: function(params, url = `${thisUrl}api/v1/data/10000007769`) {
      return request({
        url,
        method: 'get',
        params
      })
    },

    // 消防警情列表-以街道为单位
    getJqJdData: function(params, url = `${thisUrl}api/v1/data/10000007770`) {
      return request({
        url,
        method: 'get',
        params
      })
    },

    // 个小时火灾报警数量，形成趋势图
    getMapData: function(params, url = `${thisUrl}api/v1/data/10000007771`) {
      return request({
        url,
        method: 'get',
        params
      })
    },

    // 环保运行列表
    getHuanBaoData: function(params, url = `${thisUrl}/api/v1/data/10000007772`) {
      return request({
        url,
        method: 'get',
        params
      })
    },

    // 市民垃圾分类情况列表
    getParkListData: function(params, url = `${thisUrl}api/v1/data/10000007773`) {
      return request({
        url,
        method: 'get',
        params
      })
    },

    // 城管-泊位介入、停车总数
    getBerthListData: function(params, url = `${thisUrl}api/v1/data/10000006630`) {
      return request({
        url,
        method: 'get',
        params
      })
    },

    // 城管-今日停车泊位占用
    getBerthParkListData: function(params, url = `${thisUrl}api/v1/data/10000006645`) {
      return request({
        url,
        method: 'get',
        params
      })
    },

    // 城管-先离场后付费未支付金额
    getexitPayListData: function(params, url = `${thisUrl}api/v1/data/10000006675`) {
      return request({
        url,
        method: 'get',
        params
      })
    },
    // 城管-先离场后付费泊位次数、无杆场库、泊位
    getexitPayBerthListData: function(params, url = `${thisUrl}api/v1/data/10000006660`) {
      return request({
        url,
        method: 'get',
        params
      })
    },
    //先看病后付款
    gethospitalListData: function(params, url = `${thisUrl}/api/v1/source/10000006842`) {
      return request({
        url,
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        method: 'post',
        data: params
      })
    },
    //畅快出行
    gettripListData: function(params, url = `${thisUrl}api/v1/data/10000007749`) {
      return request({
        url,
        method: 'get',
        params
      })
    },
  //多游一小时
    gettourListData: function(params, url = `${thisUrl}api/v1/data/10000006608`) {
      return request({
        url,
        method: 'get',
        params
      })
    },

    //交警在途量
    getZtlData: function(params, url = `${thisUrl}api/v1/data/1212`) {
      return request({
        url,
        method: 'get',
        params
      })
    },

    //交警主干道均速
    getYsData: function(params, url = `${thisUrl}api/v1/data/1214`) {
      return request({
        url,
        method: 'get',
        params
      })
    },

    // 交警延误指数
    getYwData: function(params, url = `${thisUrl}api/v1/data/1205`) {
      return request({
        url,
        method: 'get',
        params
      })
    },
    // 视频在线
    getToyxgaData: function(params, url = `${thisUrl}api/v1/source/10000007992`) {
      return request({
        url,
        method: 'get',
        params
      })
    },
    //共计节约时间 平均节约时间 提升效率
    getSpecialTimeTotal: function(params, url = `${thisUrl}api/v1/source/10000007991`) {
      return request({
        url,
        method: 'get',
        params
      })
    },

    //地图打点
    getMapPointData: function(params, url = `${thisUrl}api/v1/source/10000007988`) {
      return request({
        url,
        method: 'get',
        params
      })
    },
    //按时间筛选申请信息列表
    getListByTime: function(params, url = `${thisUrl}api/v1/source/10000007985`) {
      return request({
        url,
        method: 'get',
        params
      })
    },
    // 获取呼救量(起)
    getAllFourData: function(params, url = `${thisUrl}api/v1/source/10000007984`) {
      return request({
        url,
        method: 'get',
        params
      })
    },

    getMapXY: function(params, url = `${thisUrl}api/v1/source/10000007988`) {
      return request({
        url,
        method: 'get',
        params
      })
    },

    getStatusStatistic: function(params, url = `${thisUrl}api/v1/source/10000007980`) {
      return request({
        url,
        method: 'get',
        params
      })
    },
  }
}
