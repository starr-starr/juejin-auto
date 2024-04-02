const axios = require('axios')
const { url } = require('../config')
const handle_error_no = require('../server/error_no')

const getArtical = async () => {
    try {
        const data = await handle_error_no({
            url: url.recommend_artical,
            if_callback: (data) => {
                return {
                    item_type: data.data[0].item_type,
                    article_id: data.data[0].item_info.article_id,
                };
            },
            else_callback: (data) => {
                console.log(data);
            }
        });
        return data

    } catch (error) {
        throw error;
    }
};


module.exports = getArtical