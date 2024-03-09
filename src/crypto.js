const crypto = require('crypto')

export function getSign(timestamp,secret,algorithm){
    // timestamp + "\n" + 密钥
    const msg = `${timestamp}\n${secret}`
    const actual = crypto
                    .createHmac(algorithm, msg)
                    .digest();
    const sign = Buffer.from(actual, 'utf-8').toString('base64');
    return sign
}

