# pict-js
微软PICT的node-js绑定，并扩展了约束条件的使用功能，允许约束条件设置中含计算公式

## 复制安装
- 从lib下复制 pict_js-native(Linux64).node 或 pict_js-name(Win64).node 或 pict_js-name(MAC).node
- 重命名为 pict_js-native.node

## 源码安装
```
git clone https://github.com/solidest/pict-js.git
cd pict-js
git clone https://github.com/microsoft/pict.git ms_pict
sudo npm install
```

## 重新编译
```
node-gyp rebuild
```

## 执行测试
```
node test.js
```

## 使用方法

```js
const Pict= require('./src/pict');

let paras = {};
paras["工作模式"] = ['制冷', '制热', '除湿'];
paras["传感器正常"] = [true, false];
paras["设置温度"] = [15, 16, 17, 31, 32, 33];
paras["室内温度"] = [13, 17, 19, 35];

const pict = new Pict(paras);
let result1 = pict.Generate("传感器正常 and 设置温度<=室内温度+2");
let result2 = pict.Generate("设置温度==室内温度+2 and ~传感器正常");
for(let row of result2) {
    console.log(row);
}
/** 输出如下：
    { '工作模式': '制热', '传感器正常': false, '设置温度': 15, '室内温度': 13 }
    { '工作模式': '除湿', '传感器正常': false, '设置温度': 15, '室内温度': 13 }
    { '工作模式': '制冷', '传感器正常': false, '设置温度': 15, '室内温度': 13 }
*/

```

更多API使用方法，请参看test.js文件
