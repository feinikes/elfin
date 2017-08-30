## 安装
    npm install elfin
## 使用方式
  在vue项目main.js中使用：
  
    import Vue from 'vue';
    import elfin from 'elfin';
    
    Vue.use(elfin);
    this.$elfin.getNowDate();
  
### 日期函数操作
formatTime(date, mark)<br/>
　　date：Date参数；<br/>
　　mark：年月日分隔符号，默认“－”；<br/>
　　return　“YYYY-MM-DD HH:mm:ss”<br/>
getNowDate(mark)<br/>
　　mark：年月日分隔符号，默认“－”；<br/>
　　return　“YYYY-MM-DD HH:mm:ss”<br/>
formatYMD(date, mark)<br/>
　　date：Date参数；<br/>
　　mark：年月日分隔符号，默认“－”；<br/>
　　return　“YYYY-MM-DD”<br/>
formatHMS(date)<br/>
　　date：Date参数；<br/>
　　return　“HH:mm:ss”<br/>
formatWeek(date)<br/>
　　date：Date参数；<br/>
　　return　“星期一”<br/>
formatNumber(num)<br/>
　　num：数字；<br/>
　　return　个位数会在前面加上“0”
### localStorage、sessionStorage存储操作
setLocal(key,value)<br/>
　　key：localStorage键值；<br/>
　　value：可以为任何对象；<br/>
getLocal(key)<br/>
　　key：localStorage键值；<br/>
　　return：localStorage的存储，取之前存得值，不过返回得都是字符串；<br/>
delLocal(key)<br/>
　　key：localStorage键值；<br/>
　　注：localStorage的存储，删之前存得值；<br/>
setSession(key,value)<br/>
　　key：sessionStorage键值；<br/>
　　value：可以为任何对象；<br/>
getSession(key)<br/>
　　key：sessionStorage键值；<br/>
　　return：sessionStorage的存储，取之前存得值，不过返回得都是字符串；<br/>
getSessionObj(key)<br/>
　　key：sessionStorage键值；<br/>
　　return：sessionStorage的存储，取之前存得对象，直接返回对象；<br/>
delSession(key)<br/>
　　key：sessionStorage键值；<br/>
　　注：sessionStorage的存储，删之前存得值；<br/>
delAllSession()<br/>
　　注：sessionStorage的存储，删之前所有存得值；<br/>
### 数组相关操作
arrIn(arr, item)<br/>
　　arr：目标数组；<br/>
　　item：需要判断得元素；<br/>
　　return　true就是包含，false就是不包含<br/>
arrDel(arr, item)<br/>
　　arr：目标数组；<br/>
　　item：需要删除得元素；<br/>
　　return　处理后得数组<br/>
arrRandom(arr)<br/>
　　arr：目标数组；<br/>
　　return　输入数组，会随机抽取数组中得一个值输出<br/>
arrRepeat(arr)<br/>
　　arr：目标数组；<br/>
　　注：　数组去除重复<br/>
arrMax(arr)<br/>
　　arr：目标数组；<br/>
　　return　数组最大值<br/>
arrMin(arr)<br/>
　　arr：目标数组；<br/>
　　return　数组最小值<br/>
arrSort(arr,order)<br/>
　　arr：目标数组；<br/>
　　order：需要判断得元素；<br/>
　　return　排序后数组<br/>
### 字符串相关操作
strCut(str, length)<br/>
　　str：目标字符串；<br/>
　　length：需要的长度；<br/>
　　return　截取后的字符串<br/>
strTrim(str)<br/>
　　str：目标字符串；<br/>
　　return　清除空格之后的字符串<br/>
### 其他操作
getSumFunc(...nums)<br/>
　　注：不定参数求和；<br/>
toThousands(num，cent，isThousand)<br/>
　　num：需要转换的对象可以是数字字符串或数字；<br/>
　　cent：需要保留的小数点后的位数，默认2；<br/>
　　isThousand：是否以千分位显示，默认1，只有两个值1、0；<br/>
　　return “10,000.00”；<br/>
reBirtyhday(idNum, mark)<br/>
　　idNum：身份证号码；<br/>
　　mark：连接符号，默认“-”；<br/>
　　return：“1987-09-28”；<br/>
