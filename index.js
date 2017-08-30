/**
 * Created by Phoenix on 2017/01/01.
 */
const ELFIN = {};
/**
 * 日期格式化函数
 * @param date
 * @param mark  连接符号默认“-”
 * @returns {string}
 */
let formatTime = (date, mark = '-') => {
    let year = date.getFullYear();
    let mouth = date.getMonth() + 1;
    let day = date.getDate();

    let hour = date.getHours();
    let minut = date.getMinutes();
    let second = date.getSeconds();

    return [year, mouth, day].map(formatNumber).join(mark) + ' ' + [hour, minut, second].map(formatNumber).join(':');
}
/**
 * 获取当前日期
 * @param mark  连接符号默认“-”
 * @returns {string}
 */
let getNowDate = (mark = '-') => {
    let date = new Date();
    formatTime(date, mark);
}
/**
 * 格式化年月日
 * @param date
 * @param mark  连接符号默认“-”
 * @returns {string}
 */
let formatYMD = (date, mark = '-') => {
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
/**
 * 千分位显示
 * @method toThousands
 * @param {String} or {Number} num 需要转换的对象可以是数字字符串或数字
 * @param {Number} cent 需要保留的小数点后的位数，默认2
 * @param {Number} isThousand 是否以千分位显示，默认1，只有两个值1、0
 * @returns {string}
 * @author: Phoenix ZZ
 * @date: 2016.7.18
 */
let toThousands = (num) => {
    var cent = arguments[1] ? arguments[1] : 2;
    var isThousand = arguments[2] ? arguments[2] : 1;
    if (!num) {
        num = 0;
    }
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num))
        num = "0";
    if (isNaN(cent))
        cent = 0;
    cent = parseInt(cent);
    cent = Math.abs(cent);
    if (isNaN(isThousand))
        isThousand = 0;
    isThousand = parseInt(isThousand);
    if (isThousand < 0)
        isThousand = 0;
    if (isThousand >= 1)
        isThousand = 1;
    var sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * Math.pow(10, cent) + 0.50000000001);
    var cents = num % Math.pow(10, cent);
    num = Math.floor(num / Math.pow(10, cent)).toString();
    cents = cents.toString();
    while (cents.length < cent) {
        cents = "0" + cents;
    }
    if (isThousand == 0)
        return (((sign) ? '' : '-') + num + '.' + cents);
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
        num = num.substring(0, num.length - (4 * i + 3)) + ',' +
            num.substring(num.length - (4 * i + 3));
    return (((sign) ? '' : '-') + num + '.' + cents);
}
/**
 * 18位身份证号码转生日日期信息
 * @method reBirtyhday
 * @param {idNum} idNum 身份证信息
 * @param mark  连接符号默认“-”
 * @returns {string}
 */
let reBirtyhday = (idNum, mark = '-') => {
    if (idNum.length != 18) {
        var birthday = idNum.substring(6, 15);
        var year = birthday.substring(0, 4);
        var mouth = birthday.substring(4, 6);
        var date = birthday.substring(6, 8);
        return [year, mouth, date].join(mark);
    } else {
        return "身份证不正确";
    }
}
/**
 * localStorage相关操作
 * @param key是要存得值得名称，
 * @param value是要存得值
 */
//存储localStorage
let setLocal = (key, value) => {
    if (typeof value == 'string') {
        return localStorage.setItem(key, value);
    } else if (typeof value == "undefined") {
        return localStorage.setItem(key, '');
    } else if (typeof value == 'number') {
        return localStorage.setItem(key, value.toString());
    } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == 'object') {
        return localStorage.setItem(key, JSON.stringify(value));
    }
}
//获取localStorage
function getLocal(key) {
    return localStorage.getItem(key);
}
//删除localStorage
function delLocal(key) {
    return localStorage.removeItem(key);
}
//存储sessionStorage
function setSession(key, value) {
    if (typeof value == 'string') {
        return sessionStorage.setItem(key, value);
    } else if (typeof value == "undefined") {
        return sessionStorage.setItem(key, '');
    } else if (typeof value == 'number') {
        return sessionStorage.setItem(key, value.toString());
    } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == 'object') {
        return sessionStorage.setItem(key, JSON.stringify(value));
    }
}
//获取sessionStorage
function getSession(key) {
    return sessionStorage.getItem(key);
}
//获取存储的sessionStorage对象
function getSessionObj(key) {
    return JSON.parse(sessionStorage.getItem(key));
}
//删除
function delSession(key) {
    return sessionStorage.removeItem(key);
}
//全部删除
function delAllSession() {
    return sessionStorage.clear();
}
/**
 * 数组相关操作
 */
//判断数组中是否包含元素
function arrIn(arr, value) {
    var index = arr.findIndex(function (value, index, arr) {
        return value == value;
    });
    if (index == -1) {
        return false;
    } else {
        return true;
    }
}
//删除数组中得第一个出现得
function arrDel(arr, value) {
    var index = arr.findIndex(function (value, index, arr) {
        return value == value;
    });
    if (index !== -1) {
        arr.splice(index, 1);
    }
    return arr;
}
//输入数组，会随机抽取数组中得一个值输出
function arrRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
//数组去除重复
function arrRepeat(arr) {
    var result = [],
        json = {};
    for (var i = 0, len = arr.length; i < len; i++) {
        if (!json[arr[i]]) {
            json[arr[i]] = 1;
            result.push(arr[i]); //返回没被删除的元素
        }
    }
    return result;
};
//取最大值
function arrMax(arr) {
    return Math.max.apply(Math, arr);
}

//取最小值
function arrMin(arr) {
    return Math.min.apply(Math, arr);
}

/**
 * 数组排序
 * @param arr 排序数组
 * @param order 顺序  1：小小到大  2：从大到小 3：随机
 */
function arrSort(arr) {
    var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
    arr.sort(function (a, b) {
        if (order == 1) {
            return a - b;
        } else if (order == 2) {
            return b - a;
        } else {
            return Math.random() - 0.5;
        }
    });
    return arr;
}
/**
 * 字符串相关操作函数
 */
//截取字符串，超出部分显示"..."
function strCut(str, length) {
    var len = length * 2;
    var temp;
    var icount = 0;
    var patrn = /[^\x00-\xff]/;
    var strre = "";
    for (var i = 0; i < str.length; i++) {
        if (icount < len - 1) {
            temp = str.substr(i, 1);
            if (patrn.exec(temp) == null) {
                icount = icount + 1;
            } else {
                icount = icount + 2;
            }
            strre += temp;
        } else {
            break;
        }
    }
    return strre + "...";
}

//清除句子中包含得空格
function strTrim(str) {
    var result = str.replace(/(^\s+)|(\s+$)/g, "");
    return result.replace(/\s/g, "");
}
//日期函数操作
ELFIN.formatTime = formatTime;
ELFIN.getNowDate = getNowDate;
ELFIN.formatYMD = formatYMD;
ELFIN.formatHMS = formatHMS;
ELFIN.formatWeek = formatWeek;
ELFIN.formatNumber = formatNumber;
//localStorage、sessionStorage存储操作
ELFIN.setLocal = setLocal;
ELFIN.getLocal = getLocal;
ELFIN.delLocal = delLocal;
ELFIN.setSession = setSession;
ELFIN.getSession = getSession;
ELFIN.getSessionObj = getSession;
ELFIN.delSession = delSession;
ELFIN.delAllSession = delAllSession;
//数组相关操作
ELFIN.arrIn = arrIn;
ELFIN.arrDel = arrDel;
ELFIN.arrRandom = arrRandom;
ELFIN.arrRepeat = arrRepeat;
ELFIN.arrMax = arrMax;
ELFIN.arrMin = arrMin;
ELFIN.arrSort = arrSort;
//字符串相关操作
ELFIN.strCut = strCut;
ELFIN.strTrim = strTrim;
//其他操作
ELFIN.getSumFunc = getSumFunc;
ELFIN.toThousands = toThousands;
ELFIN.reBirtyhday = reBirtyhday;


export default {
    install: function (Vue, options) {
        //添加注册实例函数
        Object.defineProperty(Vue.prototype, '$elfin', {value: ELFIN});
    }
}

