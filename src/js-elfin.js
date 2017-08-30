/**
 * Created by zhangzhan on 2017/8/30.
 */
/**
 * 日期格式化函数
 * @param date
 * @param mark  连接符号默认“/”
 * @returns {string}
 */
let formatTime = (date, mark = '/') => {
    let year = date.getFullYear();
    let mouth = date.getMonth() + 1;
    let day = date.getDate();

    let hour = date.getHours();
    let minut = date.getMinutes();
    let second = date.getSeconds();

    return [year, mouth, day].map(formatNumber).join(mark) + ' ' + [hour, minut, second].map(formatNumber).join(':');
}
/**
 * 格式化年月日
 * @param date
 * @param mark  连接符号默认“/”
 * @returns {string}
 */
let formatYMD = (date, mark = '/') => {
    var year = date.getFullYear();
    let mouth = date.getMonth() + 1;
    let day = date.getDate();
    return [year, mouth, day].map(ELFIN.formatNumber).join(mark)
}
/**
 * 格式化时分秒
 * @param date
 * @param mark  连接符号默认“:”
 * @returns {string}
 */
let formatHMS = (date, mark = ':') => {
    let hour = date.getHours();
    let minut = date.getMinutes();
    let second = date.getSeconds();
    [hour, minut, second].map(ELFIN.formatNumber).join(mark);
}
/**
 * 返回星期
 * @param date
 * @returns {string}
 */
let formatWeek = date => {
    let num = date.getDay();
    let week = '星期日';
    switch (num) {
        case 0:
            week = '星期日';
            break;
        case 1:
            week = '星期一';
            break;
        case 2:
            week = '星期二';
            break;
        case 3:
            week = '星期三';
            break;
        case 4:
            week = '星期四';
            break;
        case 5:
            week = '星期五';
            break;
        case 6:
            week = '星期六';
            break;
        default:
            week = '星期日';
    }
    return week;
}
//个位数显示补0显示，用于显示日期时间函数实用
let formatNumber = (num) => {
    num = num.toString();
    return num[1] ? num : '0' + num;
}
/**
 * 不定参数求和
 */
let getSumFunc = (...nums) => {
    return nums.reduce((prev, curr) => {
        return prev + curr;
    }, 0)
}