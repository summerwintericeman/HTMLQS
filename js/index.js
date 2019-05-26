$(function () {
  //****************************************************************************************************************************************************************************************************************************************
  //                                                    浅拷贝的效果
  // let list1 = [1, 2, 3, 4],
  //     list2 = list1;
  //     list1[0] = 2;//修改原始对象后发现拷贝后的对象的值也会被修改
  // console.log(list1, list2);
  //****************************************************************************************************************************************************************************************************************************************
  //                                               深拷贝的实现的三种办法
  //                                                 递归方法实现深拷贝
  // function deepClone(obj) {
  //     let objClone = Array.isArray(obj) ? [] : {};//判断对象是否是数组不是则设置为对象   objClone是克隆出来的新数据 obj是被克隆的模板数据
  //     if (obj && typeof obj === "object") {//判断要被拷贝的数据是否存在
  //         for (key in obj) {//循环数据
  //             if (obj.hasOwnProperty(key)) {//判断对象自身属性中是否具有指定的属相 返回一个布尔值  --这里表示你的key值是必须存在的                   
  //                 if (obj[key] && typeof obj[key] === "object") {//判断ojb子元素是否为对象，如果是，递归复制
  //                     objClone[key] = deepClone(obj[key]);//传入子元素的value值
  //                 } else {//如果子元素是简单值只需要直接赋值就可以
  //                     objClone[key] = obj[key];
  //                 }
  //             }
  //         }
  //     }
  //     return objClone;
  // }
  // let a = [1, 2, 3, 4],
  //     b = deepClone(a);
  // a[0] = 2;
  // console.log(a, b);
  //****************************************************************************************************************************************************************************************************************************************
  //                                             JSON对象的parse和stringify
  // let list3 = [1, 2, 3, 4];
  // list4 = JSON.parse(JSON.stringify(list3));
  // list3[0] = 2;
  // console.log(list3,list4);
  //****************************************************************************************************************************************************************************************************************************************
  //                                               jq的extend实现深拷贝
  // let list5=[0,1,[2,3],4],
  //     list6=$.extend(true,[],list5);
  // list5[0]=1;
  // list5[2][0]=1;
  // console.log(list5,list6);
  //****************************************************************************************************************************************************************************************************************************************
  //                   额外补充： 方法slice 和concat 是否是深拷贝的讨论 主要看是否是不是拷贝了所有的层级
  //slice的测试
  // let a=[0,1,[2,3],4],
  //     b=a.slice();
  // a[0]=1;
  // a[2][0]=1;
  // console.log(a);
  // console.log(b);
  //concat的测试
  // let a=[0,1,[2,3],4],
  //     b=a.concat();
  // a[0]=1;
  // a[2][0]=1;
  // console.log(a);
  // console.log(b);
  //打印的结果表明二级数组的值发生了变化,slice和concat都不是深拷贝
  //****************************************************************************************************************************************************************************************************************************************
  //                                                判断一个变量是否是数组的办法
  // let a = [1, 2];
  // var m = new Array()
  // m[0] = "0";
  // m[1] = "1";
  // m[2] = "2";
  // let b = {
  //     name: 1,
  //     arr: [1, 1,]
  // };
  // let c = 333;
  // let i = new Number(1);
  // let d = function () {
  //     console.log('函数');
  // }
  // let e = 's';
  // let j = new String('s');
  // let f = null;
  // let g;
  // let h = true;
  // let k = new Boolean(true);
  // //instanceof 的判断办法
  // console.log(a instanceof Array);
  // console.log(b instanceof Array);
  // console.log(c instanceof Array);
  // console.log(d instanceof Array);
  // console.log(e instanceof Array);
  // console.log(f instanceof Array);
  // console.log(g instanceof Array);
  // console.log(h instanceof Array);
  //isArray()办法
  // console.log(Array.isArray(a))
  // console.log(Array.isArray(b))
  // console.log(Array.isArray(c))
  // console.log(Array.isArray(d))
  // console.log(Array.isArray(e))
  // console.log(Array.isArray(f))
  // console.log(Array.isArray(g))
  // console.log(Array.isArray(h))
  //****************************************************************************************************************************************************************************************************************************************
  //                                       封装一个办法实现判断传入变量的类型
  //js的数据类型  
  // function judgeType(change) {//分解版
  //     if (change == null) {
  //         if(change === null){
  //             console.log('声明为null');
  //         }else if(change === undefined){
  //             if (arguments.length > 0) {
  //                 console.log('undefined')
  //             } else {
  //                 console.log("没有传入值")
  //             }
  //         }
  //     } else {
  //         if (change instanceof Object) {//万物皆对象，先判断是否是对象
  //             if (change instanceof Array) {//数组也是会被判定为object
  //                 console.log('Array')
  //             } else if (change instanceof Function) {//函数也会被判断为object
  //                 console.log('Function')
  //             } else if (change instanceof Number) {
  //                 console.log('new方法声明的Number')
  //             } else if (change instanceof String) {
  //                 console.log('new方法声明的String')
  //             } else if (change instanceof Boolean) {
  //                 console.log('new方法声明的Boolean')
  //             } else {
  //                 console.log('Object')
  //             }
  //         } else {//instanceof判断一个对象是否是另一个对象的实例，而数字1是基本数据类型，不是对象 对于某些实例类型的声明无法判断
  //             if (typeof change == 'number') {
  //                 console.log('字面量方式声明的Number')
  //             } else if (typeof change == 'string') {
  //                 console.log('字面量方式声明的String')
  //             } else if (typeof change == 'boolean') {
  //                 console.log('字面量方式声明的Boolean')
  //             }
  //         }
  //     }
  // }

  // function judgeType(change) {//实用版
  //     console.log(typeof change)
  //     if (arguments.length == 0) {
  //         return '0';//无参数传入
  //     }
  //     if (change === null) {
  //         return 'null'
  //     }
  //     if (change === undefined && arguments.length > 0) {
  //         return 'undefined'
  //     }
  //     if (change instanceof Function) {
  //         return 'function'
  //     }
  //     if (change instanceof Array) {
  //         return 'arry'
  //     }
  //     if (change instanceof Number || typeof change == 'number') {
  //         return 'number'
  //     }
  //     if (change instanceof String || typeof change == 'string') {
  //         return 'string'
  //     }
  //     if (change instanceof Boolean || typeof change == 'boolean') {
  //         return 'boolean'
  //     }
  // }

  // judgeType(a);
  // judgeType(b);
  // judgeType(c);
  // judgeType(i);
  // judgeType(d);
  // judgeType(e);
  // judgeType(j);
  // judgeType(f);
  // judgeType(g);
  // judgeType(h);
  // judgeType(k);
  // judgeType();
  //****************************************************************************************************************************************************************************************************************************************
  //                                                jq的extend方法             
  //$.extend(参数1，参数2，参数3.......);
  //参数1是否是深度合并 深度合并会递归的把所有的数据进行合并 参数2合并的目标对象也就是被修改的对象     参数3等是需要合并的对象参数           
  // let object1 = {
  // 	apple: 0,
  // 	banana: { weight: 52, price: 100 },
  // 	cherry: 97
  // };
  // let object2 = {
  // 	banana: { price: 200 },
  // 	durian: 100
  // }; 
  // let object3 = {
  // 	banana: { ok: true },
  // 	pay: false
  // }; 
  // $.extend(object1, object2 ,object3); 
  // $.extend( true, object1, object2 ,object3);
  // let object4 = $.extend({},object1, object2 ,object3);
  // let object5 = $.extend(true,{},object1, object2 ,object3);
  // console.log(object1);
  // console.log(object2);
  // console.log(object3);
  // console.log(object4);
  // console.log(object5);
  //****************************************************************************************************************************************************************************************************************************************
  //                                                           闭包
  //闭包是函数和声明该函数的词法环境的组合   这个环境包含了这个闭包创建时所能访问的所有局部变量
  //正常的
  // function init() {
  //     var name = "Mozilla"; // name 是一个被 init 创建的局部变量
  //     function displayName() { // displayName() 是内部函数,一个闭包
  //         console.log(name); // 使用了父函数中声明的变量
  //     }
  //     displayName();
  // }
  // init();
  //闭包
  // function makeFunc() {
  //     var name = "Mozilla";
  //     function displayName() {
  //         console.log(name);
  //     }
  //     return displayName;
  // }
  // var my = makeFunc();
  // my();
  //解析：在一些编程语言中，函数中的局部变量仅在函数的执行期间可用。一旦 makeFunc() 执行完毕，我们会认为 name 变量将不能被访问。
  //然而，因为代码运行得没问题，所以很显然在 JavaScript 中并不是这样的。
  //在我们的例子中，my 是执行 makeFunc 时创建的displayName函数实例的引用(my是函数实例的引用)，而 displayName 实例仍可访问其词法作用域中的变量，
  //即可以访问到 name 。由此，当 myFunc 被调用时，name 仍可被访问，其值 Mozilla 就被传递到console.log中
  //闭包的使用 
  // function makeAdder(x) {
  //     return function (y) {
  //         return x + y;
  //     };
  // }

  // var add5 = makeAdder(5);
  // var add10 = makeAdder(10);

  // console.log(add5(2));  // 7
  // console.log(add10(2)); // 12
  //在这个示例中，我们定义了 makeAdder(x) 函数，它接受一个参数 x ，并返回一个新的函数。返回的函数接受一个参数 y，并返回x+y的值。
  //从本质上讲，makeAdder 是一个函数工厂 — 他创建了将指定的值和它的参数相加求和的函数。在上面的示例中，我们使用函数工厂创建了两个新
  //函数 — 一个将其参数和 5 求和，另一个和 10 求和。
  //add5 和 add10 都是闭包。它们共享相同的函数定义，但是保存了不同的词法环境。在 add5 的环境中，x 为 5。而在 add10 中，x 则为 10。

  //用闭包模拟私有方法
  //编程语言中，比如 Java，是支持将方法声明为私有的，即它们只能被同一个类中的其它方法所调用。而 JavaScript 没有这种原生支持，但我们可以
  //使用闭包来模拟私有方法。私有方法不仅仅有利于限制对代码的访问：还提供了管理全局命名空间的强大能力，避免非核心的方法弄乱了代码的公共接口部分。
  // var Counter = (function () {
  //     var privateCounter = 0;
  //     function changeBy(val) {
  //         privateCounter += val;
  //     }
  //     return {
  //         increment: function () {//加一的方法
  //             changeBy(1);
  //         },
  //         decrement: function () {//减一的方法
  //             changeBy(-1);
  //         },
  //         value: function () {//返回结果的方法
  //             return privateCounter;
  //         }
  //     }
  // })();
  // console.log(Counter.value()); /* logs 0 */
  // Counter.increment();
  // Counter.increment();
  // console.log(Counter.value()); /* logs 2 */
  // Counter.decrement();
  // console.log(Counter.value()); /* logs 1 */
  //进阶版
  // var makeCounter = function() {
  //     var privateCounter = 0;
  //     function changeBy(val) {
  //       privateCounter += val;
  //     }
  //     return {
  //       increment: function() {
  //         changeBy(1);
  //       },
  //       decrement: function() {
  //         changeBy(-1);
  //       },
  //       value: function() {
  //         return privateCounter;
  //       }
  //     }  
  //   };
  //   var Counter1 = makeCounter();
  //   var Counter2 = makeCounter();
  //   console.log(Counter1.value()); /* logs 0 */
  //   Counter1.increment();
  //   Counter1.increment();
  //   console.log(Counter1.value()); /* logs 2 */
  //   Counter1.decrement();
  //   console.log(Counter1.value()); /* logs 1 */
  //   console.log(Counter2.value()); /* logs 0 */
  //请注意两个计数器 counter1 和 counter2 是如何维护它们各自的独立性的。每个闭包都是引用自己词法作用域内的变量 privateCounter 。
  //每次调用其中一个计数器时，通过改变这个变量的值，会改变这个闭包的词法环境。然而在一个闭包内对变量的修改，不会影响到另外一个闭包中的变量。
  //最常见的演示例子 循环 
  // for (var i = 0, arr = []; i <= 3; i++) {
  //     arr.push(function () { console.log(i) });
  // }
  // arr[0](); // ?? 结果不是0
  // arr[1](); // ?? 全是4
  // 改装后
  // for (var i = 0, arr = []; i <= 3; i++) {
  //     arr.push(
  //         (function (i) {
  //             return function () {
  //                 alert(i);
  //             }
  //         })(i)
  //     );
  // }
  // 经过闭包的改装之后已经可以了，但是为什么可以了 
  // 观察第一种情况 每次push的时候函数使用的i并不是函数自己的私有变量 而是共有的，导致在调用的时候才会去取这个值，但是你在调用的时候这个值已经
  // 变成了最后的结果，因此无法得到值。  修改的办法相当于把i当成一个参数传入进去 变成私有变量  如下解释： 如下写法解释上面看的更清楚
  // function num(sec) {
  //     var sec = sec;//私有变量
  //     return function () {
  //         console.log(sec)
  //     }
  // }
  // for (var i = 0, arr = []; i <= 3; i++) {
  //     arr.push(
  //         num(i)
  //     );
  // }
  // arr[0]();
  // arr[1]();
  // arr[2]();
  // arr[3]();
  //****************************************************************************************************************************************************************************************************************************************
  //                                                    操作数组和字符串的方法
  //数组
  // concat()	        连接两个或更多的数组，并返回结果                                    
  // join()	        把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。         
  // pop()	        删除并返回数组的最后一个元素                                        
  // push()	        向数组的末尾添加一个或更多元素，并返回新的长度。
  // reverse()	    颠倒数组中元素的顺序。
  // shift()	        删除并返回数组的第一个元素
  // slice()	        从某个已有的数组返回选定的元素
  // sort()	        对数组的元素进行排序
  // splice()	        删除元素，并向数组添加新元素。
  // toSource()	    返回该对象的源代码。
  // toString()	    把数组转换为字符串，并返回结果。
  // toLocaleString()	把数组转换为本地数组，并返回结果。
  // unshift()	    向数组的开头添加一个或更多元素，并返回新的长度。
  // valueOf() 	    返回数组对象的原始值
  //字符串
  // anchor()	                创建 HTML 锚。
  // big()	                用大号字体显示字符串。
  // blink()	                显示闪动字符串。
  // bold()	                使用粗体显示字符串。
  // charAt()	                返回在指定位置的字符。
  // charCodeAt()	            返回在指定的位置的字符的 Unicode 编码。
  // concat()	                连接字符串。
  // fixed()	                以打字机文本显示字符串。
  // fontcolor()	            使用指定的颜色来显示字符串。
  // fontsize()	            使用指定的尺寸来显示字符串。
  // fromCharCode()	        从字符编码创建一个字符串。
  // indexOf()	            检索字符串。
  // italics()	            使用斜体显示字符串。
  // lastIndexOf()	        从后向前搜索字符串。
  // link()	                将字符串显示为链接。
  // localeCompare()	        用本地特定的顺序来比较两个字符串。
  // match()	                找到一个或多个正则表达式的匹配。
  // replace()	            替换与正则表达式匹配的子串。
  // search()	                检索与正则表达式相匹配的值。
  // slice() 	                提取字符串的片断，并在新的字符串中返回被提取的部分。
  // small()	                使用小字号来显示字符串。
  // split()	                把字符串分割为字符串数组。
  // strike()	                使用删除线来显示字符串。
  // sub()	                把字符串显示为下标。
  // substr()	                从起始索引号提取字符串中指定数目的字符。
  // substring()	            提取字符串中两个指定的索引号之间的字符。
  // sup()	                把字符串显示为上标。
  // toLocaleLowerCase()	    把字符串转换为小写。
  // toLocaleUpperCase()	    把字符串转换为大写。
  // toLowerCase()	        把字符串转换为小写。
  // toUpperCase()	        把字符串转换为大写。
  // toSource()	            代表对象的源代码。
  // toString()	            返回字符串。
  // valueOf()	            返回某个字符串对象的原始值。
  //****************************************************************************************************************************************************************************************************************************************
  //                                                      类型转换
  //强制类型转换
  // ECMAScript 中可用的 3 种强制类型转换如下：
  // Boolean(value) - 把给定的值转换成 Boolean 型；
  // Number(value) - 把给定的值转换成数字（可以是整数或浮点数）；
  // String(value) - 把给定的值转换成字符串；
  // Boolean
  // var b1 = Boolean("");		//false - 空字符串
  // var b2 = Boolean("hello");		//true - 非空字符串
  // var b1 = Boolean(50);		//true - 非零数字
  // var b1 = Boolean(null);		//false - null
  // var b1 = Boolean(0);		//false - 零
  // var b1 = Boolean(new object());	//true - 对象
  // Number
  // Number(false)	//0
  // Number(true)	//1
  // Number(undefined)	//NaN
  // Number(null)	//0
  // Number("1.2")	//1.2
  // Number("12")	//12
  // Number("1.2.3")	//NaN
  // Number(new object())	//NaN
  // Number(50)	//50
  // String
  // 最后一种强制类型转换方法 String() 是最简单的，因为它可把任何值转换成字符串。
  // 注意 Number和parseInt parseFloat 
  //隐式类型转换
  // console.log(1 + '2' + 3);  //number类型被转换成string类型了  诸如此类
  //****************************************************************************************************************************************************************************************************************************************
  //                                                           js编程范式
  // 一、命令式　　二、函数式　　三、面向对象
  // 涉及知识比较复杂，暂时不解释
  //****************************************************************************************************************************************************************************************************************************************
  //                                                                       原型原型链继承等


  // function doSomething() { }
  // console.log(doSomething.prototype);
  // doSomething.prototype.foo = 'tianjia1';
  // console.log(doSomething.prototype);
  //****************************************************************************************************************************************************************************************************************************************
  //                                                        在String原型上扩展一个trim方法去除字符串前后空格
  var str = ' abcd ef ';
  String.prototype.removeBlank = function () {

  }
  // console.log(str.removeBlank())

  //****************************************************************************************************************************************************************************************************************************************
  // 计算结果
  // for(var i = 1; i <= 3; i++){
  //     setTimeout(function(){
  //         console.log(i);   
  //     },0); 
  // };
  // 结果 4 4 4 4

  //等待处理 
  // var length = 10;
  // function fn() {
  //   // console.log(this);
  //   // console.log(arguments)
  //   // console.log(arguments[0])
  //   console.log(this.length);
  // }
  // fn();

  // var obj = {
  //   length: 5,
  //   method: function (fn) {
  //     fn();
  //     console.log(arguments)
  //     console.log(arguments[0])
  //     // arguments[0]();
  //   }
  // };

  // obj.method(fn, 1);
  //等待处理 


  //****************************************************************************************************************************************************************************************************************************************
  //   
  // 1.                                                              //  求数组的最大值
  // let arr = [1, 3, 5, 6, 8, 9, 32, 4, 5];
  // console.log(Math.max(...arr))
  // // 2.
  // function getMaxOfArray(numArray) {
  //   return Math.max.apply(null, numArray);
  // }
  // console.log(getMaxOfArray(arr))
  // 3.
  // 通过排序实现
  //****************************************************************************************************************************************************************************************************************************************
  //                                                                     apply和call
  // apply()
  // apply() 方法调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数。
  // Function.apply(obj,args)
  // obj：这个对象将代替Function类里this对象
  // args：这个是数组，它将作为参数传给Function(args-->arguments）
  // call()
  // Function.call(obj,[param1[,param2[,…[,paramN]]]])
  // obj：这个对象将代替Function类里this对象
  // params：这个是一个参数列表

  // 相同点与不同点


  // 相同点
  // 作用是一样的，call 和 apply 都是为了改变函数体内部 this 的指向，也就是把Function(即this)绑定到obj，这时候obj具备了Function的属性和方法，说白一点就是obj继承了Function的属性和方法。


  // 不同点
  // 相信大家也已经发现了，他们唯一区别就是接受参数的方式不太一样，apply接受的是数组参数，call接受的是连续参数。

  // 注意：call()方法的作用和 apply() 方法类似，区别就是call()方法接受的是参数列表，而apply()方法接受的是一个参数数组。
  //****************************************************************************************************************************************************************************************************************************************
  //                                                           href 和src的区别
  // 1.href (Hypertext Reference)网络资源的位置，浏览器识别当前资源是一个样式表，页面解析不会暂停
  // （由于浏览器需要样式规则去画或者渲染页面，渲染过程可能会被被暂停）。
  // 这与把css文件内容写在<style>标签里不相同，因此建议使用link标签而不是@import来吧样式表导入到html文档里。

  // 2，src (Source)属性仅仅 嵌入当前资源到当前文档元素定义的位置，在浏览器下载，编译，执行这个文件之前页面
  // 的加载和处理会被暂停。这个过程与把js文件放到<script>标签里类似。这也是建议把JS文件放到底部加载的原因。
  // 当然，img标签页与此类似。浏览器暂停加载直到提取和加载图像。

  //****************************************************************************************************************************************************************************************************************************************
  //                                                    



















})