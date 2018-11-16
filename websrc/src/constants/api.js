/** @module constants/api */

/**
 * 服务端API接口
 * @readonly
 * @enum {string}
 */
let HOST = "";
let PAY_HOST = "";
switch (process.env.VUE_APP_CURRENTMODE) {
    case "production":
        HOST = "";
        PAY_HOST = "";
        break;
    case "development":
        HOST = "";
        PAY_HOST = "";
        break;
    default:
        HOST = "";
        PAY_HOST = "";
        break;
}
export const WEB_API = {
    /**
     * 获取微信配置
     */
    WX_CONFIG_URL: "",
    /**
     * 服务端域名配置
     */
    HOST,
    /**
     * 示例接口地址
     */
    EXAMPLE_DATA_URL: HOST + "/list"
};
