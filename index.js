const axios = require('axios')

const { url } = require('./config/index.js')

const config = {
    'cookie': process.env.COOKIE
}

const signIn = async () => {
    const res = await axios.post(
        url.sign_in, 
        {
           headers: {
               'Cookie': config['cookie'],
        }
    }
)
    if (res && res.data) {
        if (res.data.err_no == 0) {
            console.log(`掘金签到结果,获得': ${res.data.data.incr_point} 矿石`)
            setTimeout(() => {
                lotteryFreeCheck();
              }, Math.random() * 5 * 1000)
        } else {
            console.log(`掘金签到结果`, { '签到失败': res.data });
        }
    }
}

const lotteryFreeCheck = async () => {
    const res = await axios.get(
        url.freeCheck,
        {
            headers: {
                'Cookie': config['cookie'],
            }
        }
    );
    if (res && res.data) {
        if (res.data.data.free_count > 0) {
            lotteryDraw();
        }
    }
}

const lotteryDraw = async () => {
    const res = await axios.post(
        url.lottery,
        {
            headers: {
                'Cookie': config['cookie'],
            }
        }
    );
    if (res && res.data) {
        console.log(`抽奖成功，获得：${res.data.data.lottery_name}`);
    } else {
        console.log(res);
        console.log(`抽奖失败 `);
    }
}

signIn();