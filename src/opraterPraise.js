const { url } = require("../config");
const handle_error_no = require("../server/error_no");
const getArtical = require("./getArtical");
const pushMsg = require("./pushMsg");

let item_type, item_id;

const operatePraise = async ({
    otherOperateFunc = async () => {},
    url,
    status
}) => {
    await otherOperateFunc();
    console.log(item_type);
    handle_error_no({
        url,
        body: {
            item_type,
            item_id
        },
        if_callback: (_) => {
            console.log("执行");
            if (status === "save") {
                console.log("点赞成功");
                pushMsg("点赞成功!")
            } else {
                console.log("取消点赞成功!");
                pushMsg("取消点赞成功!")
            }
        },
        else_callback: (_) => {
            if (status === "save") {
                console.log("点赞失败");
                pushMsg("点赞失败!")
            } else {
                console.log("取消点赞失败!");
                pushMsg("取消点赞失败!")
            }
        }
    });
};

const savePraise = async () => {
    try {
        await operatePraise({
            otherOperateFunc: async () => {
                const { item_type: item_type_server, article_id } = await getArtical();
                item_type = item_type_server;
                item_id = article_id;
            },
            url: url.save_praise,
            status: "save"
        });
        setTimeout(()=>{
            cancelPraise();
        },2000)
    } catch (error) {
        console.error("savePraise 错误", error);
    }
};

const cancelPraise = async () => {
    try {
        await operatePraise({
            url: url.cancel_praise,
            status: "cancel"
        });
    } catch (error) {
        console.error("cancelPraise 错误:", error);
    }
};

module.exports = savePraise
