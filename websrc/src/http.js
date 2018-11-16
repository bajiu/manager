import axios from "axios";
import qs from "./utils/queryString";
import { PAY_API } from "./constants/api";
import pingpp from "pingpp-js";

let token = qs.getValue("token") || "";
token = decodeURIComponent(token);
console.log(token);

let axiosIns = axios.create({});

axiosIns.defaults.timeout = 5000;
axiosIns.defaults.baseURL = "";

// http request 拦截器
axiosIns.interceptors.request.use(
    config => {
        switch (config.method.toLocaleUpperCase()) {
            case "GET":
                config.params.token = token;
                config.headers = {
                    "Content-Type": "application/x-www-form-urlencoded"
                };
                break;
            case "POST":
                config.data.token = token;
                config.headers = {
                    "Content-Type": "application/json"
                };
                break;
            default:
                config.data.token = token;
                for (let v in config.data) {
                    config.data[v] = config.data[v];
                }
                break;
        }

        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

// http response 拦截器
axiosIns.interceptors.response.use(
    res => {
        return res;
    },
    err => {
        return Promise.reject(err);
    }
);
// 导出方法
export { fetch, post, patch, put, createBill, dot };

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

function fetch(url, params = {}) {
    return new Promise((resolve, reject) => {
        axiosIns
            .get(url, {
                params: params
            })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
            });
    });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axiosIns
            .post(url, data)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
            });
    });
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axiosIns.patch(url, data).then(
            res => {
                resolve(res.data);
            },
            err => {
                reject(err);
            }
        );
    });
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axiosIns.put(url, data).then(
            res => {
                resolve(res.data);
            },
            err => {
                reject(err);
            }
        );
    });
}

async function createBill(billInfo = {}, successCallBack, otherCallBack) {
    let billData = await post(PAY_API.CREATE_BILL, {
        token: token,
        identity: "student",
        userSource: "WX-SPOKEN-ENG",
        productID: billInfo.productId,
        openID: billInfo.openId,
        activity: JSON.stringify(billInfo.activity),
        payChannel: "wx_pub",
        bill: "1",
        charge: "1",
        clientChannel: "wx",
        clientVersion: "wx",
        deviceBrand: "wx",
        deviceModel: "wx",
        OSName: "wx",
        OSVersion: "wx"
    });
    let charge = JSON.parse(billData.resp);
    await otherCallBack(charge);
    pingpp.createPayment(charge, async res => {
        if (res == "success") {
            // 只有微信公众账号 (wx_pub)、QQ 公众号 (qpay_pub)、支付宝口碑 (alipay_qr)
            // 支付成功的结果会在这里返回，其他的支付结果都会跳转到 extra 中对应的 URL。
            let verifyData = await post(PAY_API.PAY_VERIFY, {
                token: token,
                identity: "student",
                chargeId: charge.id,
                chargeContent: "",
                type: "pingxx"
            });
            successCallBack(verifyData);
        }
    });
}

function dot(code) {
    window.h5Record.send(
        {
            token: token,
            source: "",
            version: ""
        },
        code
    );
}
