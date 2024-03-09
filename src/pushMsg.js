const axios = require('axios')

const { url,secret } = require('../config/index.js')

const timestamp = Math.floor(Date.now() / 1000);
const algorithm = 'sha256';

export const  pushMsg = async (text) => {
    const sign = getSign(timestamp,secret,algorithm)
    
    const res = await axios.post(
        url.feishu_Robot,
        {
            timestamp,
            sign,
            msg_type: "text",
            content: {
                    text
            }
    }
    )

    if(res.msg.code === 0){
        console.log('推送成功')
    }else{
        console.log('推送失败')
    }
}