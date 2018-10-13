/*import {obj} from './b.js'
import {c} from './c.js' //{c}这里边的c 是根据到处的部分决定的 到处文件 导出的甚么变量名，这边接受额就是用什么变量名
console.log("a");*/

import qqq,{str} from './b.js'
console.log(qqq,str);

//es6的引入文件 是由 到处方式决定的
//若到处方式是 export default obj 那么我们的引入方式 就是 import 自定义变量名 from './b.js'

//2. 若到处方式是 export {obj}
// 那么我们的引入方式 就是 import {obj} from './b.js';引入的变量名需要跟 到处的变量名 保持一致

//3. import * as 自定义变量名 from './b.js'
//这种引用方式 十八 吧中的所有导入导出都放到 一个变量中

