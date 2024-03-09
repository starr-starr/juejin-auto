const axios = require('axios')
const getSign = require('./crypto.js')
const { url, secret } = require('../config/index.js')
const timestamp = Math.floor(Date.now() / 1000);
const algorithm = 'sha256';

async function pushMsg(text){
    const sign = getSign(timestamp,secret,algorithm)
    
    await axios.post(
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
}
module.exports = pushMsg