const { Cookie } = require('../config')
const axios = require('axios')
const handle_error_no = async (
    {
        url,
        body = {},
        if_callback = (data) => { },
        else_callback = (data) => { }
    }
) => {
    const { data } = await axios.post(
        url,
        body,
        {
            headers: {
                Cookie
            }
        }
    )
    if (data && data.err_no == 0) {
        return if_callback(data)
    } else {
        return else_callback(data)
    }
}

module.exports = handle_error_no 