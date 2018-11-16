function formatDate(timestamp) {
    let time = new Date(timestamp * 1000), // 转成毫秒数
        month = (time.getMonth() + 1).toString(),
        date = time.getDate().toString();
    month = month.length <= 1 ? "0" + month : month;
    date = date.length <= 1 ? "0" + date : date;

    return month + "月" + date + "日";
}

function formatDate_line(timestamp) {
    let time = new Date(timestamp * 1000), // 转成毫秒数
        month = (time.getMonth() + 1).toString(),
        year = time.getFullYear().toString(),
        date = time.getDate().toString();
    month = month.length <= 1 ? "0" + month : month;
    date = date.length <= 1 ? "0" + date : date;
    return year + "-" + month + "-" + date;
}
export { formatDate, formatDate_line };
