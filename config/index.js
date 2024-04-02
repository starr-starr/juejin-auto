module.exports = {
    url:{
        sign_in:"https://api.juejin.cn/growth_api/v1/check_in",
        free_count:"https://api.juejin.cn/growth_api/v1/lottery_config/get",
        lottery:"https://api.juejin.cn/growth_api/v1/lottery/draw",
        recommend_artical:"https://api.juejin.cn/recommend_api/v1/article/recommend_all_feed",
        save_praise:"https://api.juejin.cn/interact_api/v1/digg/save",
        cancel_praise:"https://api.juejin.cn/interact_api/v1/digg/cancel",
        feishu_Robot:process.env.FEISHU_ROBOT,
    },
    Cookie: process.env.COOKIE,
    secret: process.env.SECRET,
}