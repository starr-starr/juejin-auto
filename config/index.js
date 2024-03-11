module.exports = {
    url:{
        sign_in:"https://api.juejin.cn/growth_api/v1/check_in",
        free_count:"https://api.juejin.cn/growth_api/v1/lottery_config/get",
        lottery:"https://api.juejin.cn/growth_api/v1/lottery/draw",
        feishu_Robot:process.env.FEISHU_ROBOT,
    },
    Cookie: process.env.COOKIE,
    secret: 'DRg0rFVjiAVRuhsYTDddRb',
}