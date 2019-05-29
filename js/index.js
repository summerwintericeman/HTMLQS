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
    // var str = ' abcd ef ';
    // String.prototype.removeBlank = function () {

    // }
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
    //                                                             求数组的最大值
    // //1.
    // let arr = [1, 3, 5, 6, 8, 9, 32, 4, 5];
    // console.log(Math.max(...arr))
    // // 2.
    // function getMaxOfArray(numArray) {
    //   return Math.max.apply(null, numArray);
    // }
    // console.log(getMaxOfArray(arr))
    // //3.
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
    //                                                     内存泄漏
    // 程序的运行需要内存。只要程序提出要求，操作系统或者运行时（runtime）就必须供给内存。
    // 对于持续运行的服务进程（daemon），必须及时释放不再用到的内存。否则，内存占用越来越高，轻则影响系统性能，重则导致进程崩溃。
    // 不再用到的内存，没有及时释放，就叫做内存泄漏（memory leak）。
    // 有些语言（比如 C 语言）必须手动释放内存，程序员负责内存管理。
    // 这很麻烦，所以大多数语言提供自动内存管理，减轻程序员的负担，这被称为"垃圾回收机制"（garbage collector）。
    //                                                 常见的内存泄漏原因
    // 1：意外的全局变量
    // 2：被遗忘的计时器或回调函数
    // 3：脱离 DOM 的引用
    // 4：闭包
    //                                                    垃圾回收机制
    // 垃圾回收机制怎么知道，哪些内存不再需要呢？
    // 最常使用的方法叫做"引用计数"（reference counting）：语言引擎有一张"引用表"，保存了内存里面所有的资源（通常是各种值）的引用次数。
    // 如果一个值的引用次数是0，就表示这个值不再用到了，因此可以将这块内存释放。
    // 如果一个值不再需要了，引用数却不为0，垃圾回收机制无法释放这块内存，从而导致内存泄漏。
    // 举个例子
    // const arr = [1, 2, 3, 4];
    // console.log('hello world');
    // 上面代码中，数组[1, 2, 3, 4]是一个值，会占用内存。变量arr是仅有的对这个值的引用，因此引用次数为1。尽管后面的代码没有用到arr，它还是会持续占用内存。
    // 如果增加一行代码，解除arr对[1, 2, 3, 4]引用，这块内存就可以被垃圾回收机制释放了。
    // let arr = [1, 2, 3, 4];
    // console.log('hello world');
    // arr = null;
    // 上面代码中，arr重置为null，就解除了对[1, 2, 3, 4]的引用，引用次数变成了0，内存就可以释放出来了。
    // 因此，并不是说有了垃圾回收机制，程序员就轻松了。你还是需要关注内存占用：那些很占空间的值，一旦不再用到，你必须检查是否还存在对它们的引用。如果是的话，就必须手动解除引用。
    //                                                 如何识别是否是内存泄漏呢
    // 经验法则是，如果连续五次垃圾回收之后，内存占用一次比一次大，就有内存泄漏。这就要求实时查看内存占用。
    // 1.打开开发者工具，选择 Timeline 面板
    // 2.在顶部的Capture字段里面勾选 Memory
    // 3.点击左上角的录制按钮。
    // 4.在页面上进行各种操作，模拟用户的使用情况。
    // 5.一段时间后，点击对话框的 stop 按钮，面板上就会显示这段时间的内存占用情况。
    // 如果内存占用基本平稳，接近水平，就说明不存在内存泄漏。

    //                                                  第二种测试内存泄漏的办法
    // 命令行可以使用 Node 提供的process.memoryUsage方法。
    // console.log(process.memoryUsage());//在node执行
    // { rss: 27709440,
    //  heapTotal: 5685248,
    //  heapUsed: 3449392,
    //  external: 8772 }
    // process.memoryUsage返回一个对象，包含了 Node 进程的内存占用信息。该对象包含四个字段，单位是字节，含义如下。
    // rss（resident set size）：所有内存占用，包括指令区和堆栈。
    // heapTotal："堆"占用的内存，包括用到的和没用到的。
    // heapUsed：用到的堆的部分。
    // external： V8 引擎内部的 C++ 对象占用的内存。
    // 判断内存泄漏，以heapUsed字段为准。
    // http://www.ruanyifeng.com/blog/2017/04/memory-leak.html
    // 解决内存泄漏的技术 WeakMap 具体参考文档
    //****************************************************************************************************************************************************************************************************************************************
    //                                                            SEO优化
    // HTML：
    // 1.标签的有开有合。
    // 2.避免冗余代码，例如去除空格字符。
    // 3.合理利用标签语义化。
    // 4.合理的嵌套规则，避免行元素内嵌套块元素。
    // 5.img标签内需要添加title属性和alt属性。
    // 6.a标签内需要添加title属性。
    // 7.Meta标签的优化（过去搜索引擎优化的重要手法，现在已经不是关键因素，但仍不可忽略）主要包括： Meta description、Meta keywords的设置　　关键字密度要适度，通常为2%-8%，也就是说你的关键字必须 在 页面中出现若干次，或者在搜索引擎允许的范围内，要避免堆砌关键字。
    // 8.<title>页面标题，必须列出信息的标题、网站的名称以及相关关键字，避免堆关键字。
    // 9.合理使用注释。
    // CSS：
    // 1.避免将css代码写在标签内。
    // 2.如果css代码量少，可直接写在头部。否则请使用外部引入的方式。
    // 3.请不要使用通配符选择器 *{margin:0;padding:0;} 这不仅仅因为它是缓慢和低效率的方法，而且还会导致一 些不必要的元素也重置了外边距和内边距。请引用reset文件，引用reset文件在自己定义的css文件之前。
    // 4.css代码缩写可以提高你写代码的速度，精简你的代码量，包括margin，padding，border ，font， background和颜色值等。
    // 5.利用css继承，如果一个父元素内有多个子元素拥有相同的样式，可将相同的样式定义在元素上。
    // 6.如果多个元素拥有相同的样式，可定义一个通用的class或使用群组选择器。
    // 7.使用背景图合并技术。
    // 8.适当的代码注释。
    // JS：
    // 1.采用外部引入的方法。
    // 2.合理合并JS代码，可减少服务器的压力。
    // 3.良好的JS代码习惯。例如：减少页面重绘，减少作用域链上的查找次数。

    //                                                           需要补充每种框架的seo优化办法
    //****************************************************************************************************************************************************************************************************************************************
    //                                                                      加载速度优化	
    // 1.合并js和css文件
    // 将js和css分别合并到一个共享文件，这样不仅能够简化代码，而且在执行js文件是，如果js文件较多，就需要多次向服务器请求数据，这样将会延长加载速度，
    // 将js文件合并在一起，减少了请求的次数，就能够提高加载的速度；
    // 2.Sprites图片技术（图片精灵技术）
    // 图片精灵技术是一种常用的页面速度加载优化的方式，它是将一个页面涉及到的所有的零星图片（注意：只是那些晓得图片、icon）都包含到一张大图中，
    // 然后利用css的背景属性将其相应的图片在现在响应的文字，这样当访问一面时，只用加载一张大图即可，而不用一幅一幅的去请求。这种方法既减少了图片的大小，
    // 有减少了http请求的次数，可以很大程度的优化页面的加载熟读
    // 3.压缩图片和文本
    // 压缩图片和文本也可以减小数据的大小，尤其是代码的压缩，如HTML、XML、JSON、javascript、css等代码的压缩率可达70%以上，代码压缩后可以大大减少文件的体积，是页面可以快速的加载

    // 4.按需加载（及可见区域以外的区域延时加载）
    // 为了让用户可以更快的看到网页中交重要的内容，可以优先加载可见区域的内容，延时加载不可见区域的内容，为了避免页面变形可以使用占位符，
    // 占位图片来固定宽高。如jquery中的ImageLazyLoad等一些插件就可以很好的实现按需加载，只有当用户鼠标向下滚动式，下面得图片才会加载。当然也可以用原生的js来实现。

    // 5.确保功能图片优先加载
    // 网站主要考虑可用性的重要性，一个功能按钮要提前加载出来，用户进入下载页，一个只需要8s时间的下载，花了5s在等待、寻找下载按钮图片，谁能忍受?

    // 6.图片格式优化
    // 不正确的使用图片格式是一种很常见的拖慢加载速度的原因，正确的使用图片格式可以数倍的减小图片的大小。一般网页的大图，如banner图片一般使用jpg格式，
    // 因为jpg是一种有损压缩，可以最大程度的减小图片的体积，而且不会影响视觉体验（不支持透明通道）；小图片一般用png格式，一般是无损压缩的（保留透明通道）。

    // 7. 使用 Progressive JPEGs（高级JPEG）
    // ProgressiveJPEGs图片是JPEG格式的一个特殊变种，名为“高级JPEG”。在创建高级JPEG文件时，数据是这样安排的：在装入图像时，开始只显示一个模糊的图像，
    // 随着数据的装入，图像逐步变得清晰。它相当于交织的GIF格式的图片。高级JPEG主要是考虑到使用调制解调器的慢速网络而设计的，快速网络的使用者通常不会体会到
    // 它和正常JPEG格式图片的区别。对于网速比较慢的用户，这无疑有很好的体验。

    // 8.代码的精简
    // 代码的是最直接的方法，也是对于一个程序员编程能力的考验。对代码进行优化，以最少的代码来实现所需的功能，及减少了文件的体积，同时也减少了不必要的时间的浪费。
    // 同时不必要的空格、注释、换行等的减少，也可以减少文件的体积。

    // 9.延迟加载和执行非必要代码
    // 网页中的大部分js代码都是在页面加载后才需要执行的，所以对于这些代码可以写在window.onload事件的回掉函数中。这样可以使页面主体和一些必要的js代码优先加载的出来，
    // 然后来去请求非一开始就需要的代码。

    // 10.使用Ajax
    // 当一个页面只有一部分需要更新时，可以使用ajax来对页面进行异步的更新，这样不需要重新的刷新整个页面，重新请求整个1页面的数据，
    // 而只需要请求需要的那部分数据更新页面即可。这样既提高了页面的加载速度，有提高了体验性。

    // 11.借助自动化工具来实现页面的优化
    // 比如RadwareFastView
    //****************************************************************************************************************************************************************************************************************************************
    //                                                        MVC、MVVM
    // MVC
    // （Model）：数据保存       视图（View）：用户界面     控制器（Controller）：业务逻辑模型     
    //  View 传送指令到 Controller  Controller 完成业务逻辑后，要求 Model 改变状态   Model 将新的数据发送到 View，用户得到反馈
    //  View -----> Controller -------> Model -------> View       d单向通信
    // MVVM
    // Model  View  ViewModel    Controller改为了ViewModel 
    // View ---> ViewModel
    // ViewModel ---> View
    // ViewModel ---> Model ---> ViewModel 
    // 它采用双向绑定（data-binding）：View的变动，自动反映在 ViewModel，ViewModel改变View也随之改变。 ViewModel和Model双相通信
    // MVC模型的理解还是很容易MVVM的模型对应例子解释：
    // Model 对应 new Vue中的
    // data：{
    // 数据
    // }
    // View对应项目中的模板 数据的双向绑定等 {{ }}   v-for等
    // ViewModel 对应 vue中的methods：{  各种函数方法  }
    //****************************************************************************************************************************************************************************************************************************************
    //                                                         移动端的适配
    // 1.移动端得加视口  viewport
    // 2.布局： 百分比结合响应式 有时候也用到flex布局
    // 3.字体宽度高度用rem
    // 4.有些css3的属性得加前缀
    // 5.有些不兼容微调用响应式布局	
    // 具体解释这些类目
    //****************************************************************************************************************************************************************************************************************************************
    //                                                          js常见的库 
    // Jquery jqueryUi zepto  bootstrap  vue   angualrjs  eact   elementUi  mintUi   ant design （react）      touch.js 
    //****************************************************************************************************************************************************************************************************************************************
    // HTML5新特性
    //****************************************************************************************************************************************************************************************************************************************
    //                                                     阻止事件冒泡和默认事件
    // cancelBubble  stopPropagation  preventDefault  return false
    // Event.cancelBubble 属性是 Event.stopPropagation()的一个曾用名。在从事件处理程序返回之前将其值设置为true可阻止事件的传播。  阻止捕获和冒泡阶段中当前事件的进一步传播。
    // preventDefault 是另外一个相关的方法，它可以阻止事件触发后默认动作的发生。
    //****************************************************************************************************************************************************************************************************************************************
    //                                                         jsonp的原理

    //****************************************************************************************************************************************************************************************************************************************
    // 首先在客户端注册一个callback，然后把callback的名字传给服务器。此时，服务器先生成json数据，然后以javascript语法的方式，生成function，
    // function名字就是传递上来带参数jsonp。最后将json数据直接以入参的方式，放置function中，这样就生成js语法的文档，返回给客户端。
    // 客户端浏览器，解析script变迁，并执行返回javascript文档，此时数据作为参数，传入了客户端预先定义好的callback函数里。
    // 简单的说，就是利用script标签没有跨域限制的“漏洞”来达到与第三方通讯的目的。
    // 不同的请求都有自己的jsonp文档

    //****************************************************************************************************************************************************************************************************************************************
    //                                                            ajax
    // 手写ajax 
    // 首先来看一个例子
    // var xhr = new XMLHttpRequest();//创建对象
    // xhr.open("GET", "./static/file.txt", true);//请求路径 方法 和 同步异步参数 
    // xhr.onload = function (e) {
    //     if (xhr.readyState === 4) {
    //         if (xhr.status === 200) {
    //             console.log(xhr.responseText);
    //         } else {
    //             console.error(xhr.statusText);
    //         }
    //     }
    // };
    // xhr.onerror = function (e) {
    //     console.error(xhr.statusText);
    // };
    // xhr.send(null);
    // 这里还有问题  XMLHttpRequest的对象在IE上也以偶兼容的问题
    //1.创建兼容的XMLHttpRequest对象 XMLHttpRequestOBJ    
    // function XMLHttpRequestOBJ() {
    //     var xmlHttpRequest;
    //     if (window.XMLHttpRequest) {
    //         //针对FireFox，Mozillar，Opera，Safari，IE7，IE8     
    //         xmlHttpRequest = new XMLHttpRequest();//针对某些特定版本的mozillar浏览器的BUG进行修正     
    //         if (xmlHttpRequest.overrideMimeType) {
    //             xmlHttpRequest.overrideMimeType("text/xml");
    //         }
    //     } else if (window.ActiveXObject) {//针对IE6，IE5.5，IE5     //两个可以用于创建XMLHTTPRequest对象的控件名称，保存在一个js的数组中  //排在前面的版本较新     
    //         var activexName = ["MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
    //         for (var i = 0; i < activexName.length; i++) {
    //             try {
    //                 //取出一个控件名进行创建，如果创建成功就终止循环     
    //                 //如果创建失败，回抛出异常，然后可以继续循环，继续尝试创建     
    //                 xmlHttpRequest = new ActiveXObject(activexName[i]);
    //                 if (xmlHttpRequest) {
    //                     break;
    //                 }
    //             } catch (e) {
    //             }
    //         }
    //     }
    //     return xmlHttpRequest;
    // }
    //****************************************************************************************************************************************************************************************************************************************
    //                                                     Web App 、hybrid App、Native App
    //****************************************************************************************************************************************************************************************************************************************
    //                                                        css3的动画
    //                                                         animation
    // css中的代码
    // div
    // {
    // animation-name: myfirst;
    // animation-duration: 5s;
    // animation-timing-function: linear;
    // animation-delay: 2s;
    // animation-iteration-count: infinite;
    // animation-direction: alternate;
    // animation-play-state: running;
    // /* Firefox: */
    // -moz-animation-name: myfirst;
    // -moz-animation-duration: 5s;
    // -moz-animation-timing-function: linear;
    // -moz-animation-delay: 2s;
    // -moz-animation-iteration-count: infinite;
    // -moz-animation-direction: alternate;
    // -moz-animation-play-state: running;
    // /* Safari 和 Chrome: */
    // -webkit-animation-name: myfirst;
    // -webkit-animation-duration: 5s;
    // -webkit-animation-timing-function: linear;
    // -webkit-animation-delay: 2s;
    // -webkit-animation-iteration-count: infinite;
    // -webkit-animation-direction: alternate;
    // -webkit-animation-play-state: running;
    // /* Opera: */
    // -o-animation-name: myfirst;
    // -o-animation-duration: 5s;
    // -o-animation-timing-function: linear;
    // -o-animation-delay: 2s;
    // -o-animation-iteration-count: infinite;
    // -o-animation-direction: alternate;
    // -o-animation-play-state: running;
    // }
    // 以上属性的简写
    // div
    // {
    // animation: myfirst 5s linear 2s infinite alternate;
    // /* Firefox: */
    // -moz-animation: myfirst 5s linear 2s infinite alternate;
    // /* Safari 和 Chrome: */
    // -webkit-animation: myfirst 5s linear 2s infinite alternate;
    // /* Opera: */
    // -o-animation: myfirst 5s linear 2s infinite alternate;
    // }


    // @keyframes	规定动画。	
    // animation	所有动画属性的简写属性，除了 animation-play-state 属性。	
    // animation-name	规定 @keyframes 动画的名称。	
    // animation-duration	规定动画完成一个周期所花费的秒或毫秒。默认是 0。	
    // animation-timing-function	规定动画的速度曲线。默认是 "ease"。	
    // animation-delay	规定动画何时开始。默认是 0。	
    // animation-iteration-count	规定动画被播放的次数。默认是 1。	
    // animation-direction	规定动画是否在下一周期逆向地播放。默认是 "normal"。	
    // animation-play-state	规定动画是否正在运行或暂停。默认是 "running"。	
    // animation-fill-mode	规定对象动画时间之外的状态。	


    //                                                           transition
    // 语法   transition: property duration timing-function delay;
    // 值	描述
    // transition-property	规定设置过渡效果的 CSS 属性的名称。
    // transition-duration	规定完成过渡效果需要多少秒或毫秒。
    // transition-timing-function	规定速度效果的速度曲线。
    // transition-delay	定义过渡效果何时开始。

    // div
    // {
    // width:100px;
    // transition: width 2s;
    // -moz-transition: width 2s; /* Firefox 4 */
    // -webkit-transition: width 2s; /* Safari 和 Chrome */
    // -o-transition: width 2s; /* Opera */
    // }
    //                                                            transform   
    // 内容太多参考官方文档即可   https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform

    // transform   transition  animation
    // transform   对网页元素进行变换的属性，比如旋转，缩放，移动，或者沿着水平或者垂直方向扭曲（斜切变换）等等。这些的基础都是transform属性
    // transform属性有一项奇怪的特性，就是它们对于其周围的元素不会产生影响。换句话说，如果将一个元素旋转45度，它实际上是重叠在元素的上方，下方或者旁边。而不会移动其周围的内容。

    // transition transition可以实现动态效果，实际上是一定时间之内，一组css属性变换到另一组属性的动画展示过程。
    // 为了使transition生效，需要做这么几件事：两个样式：一个是最初的样式，一个是最终的样式，transition可以实现这两种演示见的转换过程。
    // 需要触发器   触发器：常用的触发器是几个伪类，:active,:target,:focus，也可以是前后两个类的改变。

    // animation
    // transition只能从一组css属性变成另一组css属性。animation则可以在多组属性之间变换。
    // transition必须使用触发器触发，animation可以使用触发器，也可以在页面加载完成的时候自动触发。
    //****************************************************************************************************************************************************************************************************************************************
    //                                                           JQ插件
    // 列出十个插件
    // 比如 返回顶部的功能
    // $(function() {
    //     $("li").bind({
    //         "mouseenter": function() {
    //             $(this).animate({
    //                 "background-position-x": "0px"
    //             }, 200);
    //         },
    //         "mouseleave": function() {
    //             $("li").stop(true, true);
    //             $(this).animate({
    //                 "background-position-x": "-58px"
    //             }, 200);
    //         }
    //     });
    //     $(window).bind("scroll", function() {
    //         var wtop = $(document).scrollTop();
    //         if (wtop >= 800) {
    //             $("ul li:first").fadeIn(200);
    //         } else {
    //             $("ul li:first").fadeOut(200);
    //         }
    //     });
    //     $("ul li:first").bind("click", function() {
    //         $("html,body").animate({
    //             "scrollTop": "0px"
    //         });
    //     });
    // });
    //****************************************************************************************************************************************************************************************************************************************
    //                                           ::before 和 :after中双冒号和单冒号 有什么区别
    // 一个是css3里面的  一个以前就有
    // P::selection{
    // Color:red;
    // }
    //****************************************************************************************************************************************************************************************************************************************
    //                                               CSS预处理器
    //  scss  less  stylus
    // 1.Scss
    // 在线编译器 https://www.sassmeister.com/
    // Sass 是一款强化 CSS 的辅助工具，它在 CSS 语法的基础上增加了变量 (variables)、嵌套 (nested rules)、混合 (mixins)、导入 (inline imports) 等高级功能，
    // 这些拓展令 CSS 更加强大与优雅。使用 Sass 以及 Sass 的样式库（如 Compass）有助于更好地组织管理样式文件，以及更高效地开发项目。
    // 1.特色功能
    // 完全兼容 CSS3
    // 在 CSS 基础上增加变量、嵌套 (nesting)、混合 (mixins) 等功能
    // 通过函数进行颜色值与属性值的运算
    // 提供控制指令 (control directives)等高级功能
    // 自定义输出格式
    // 其实现在的Sass已经有了两套语法规则：一个依旧是用缩进作为分隔符来区分代码块的；另一套规则和CSS一样采用了大括号（｛｝）作为分隔符。后一种语法规则又名SCSS，在Sass3之后的版本都支持这种语法规则。
    // 注：Sass官网地址：http://sass-lang.com
    // 2.Less
    // 2009年开源的一个项目，受Sass的影响较大，但又使用CSS的语法，让大部分开发者和设计师更容易上手。LESS提供了多种方式能平滑的将写好的代码转化成标准的CSS代码，
    // 在很多流行的框架和工具中已经能经常看到LESS的身影了（例如Twitter的Bootstrap框架就使用了LESS）。
    // 根据维基百科上的介绍，其实LESS是Alexis Sellier受Sass的影响创建的一个开源项目。当时SASS采用了缩进作为分隔符来区分代码块，
    // 而不是CSS中广为使用的大括号（｛｝）。为了让CSS现有的用户使用起来更佳方便，Alexis开发了LESS并提供了类似CSS的书写功能。
    // 注：LESS的官网：http://lesscss.org
    // 3.Stylus
    // 中文文档 https://www.zhangxinxu.com/jq/stylus/
    // Stylus，2010年产生，来自于Node.js社区，主要用来给Node项目进行CSS预处理支持，在此社区之内有一定支持者，在广泛的意义上人气还完全不如Sass和LESS。
    // Stylus被称为是一种革命性的新语言，提供一个高效、动态、和使用表达方式来生成CSS，以供浏览器使用。Stylus同时支持缩进和CSS常规样式书写规则。
    // 注：Stylus官网：http://learnboost.github.com/stylus
    // 预处理器的安装可以参照此网   https://blog.csdn.net/ly2983068126/article/details/77737292

    //****************************************************************************************************************************************************************************************************************************************
    //                                          CSS优化来提高性能的方法
    // 1.删除冗余的css代码
    // 2.不要出现空的css代码 
    // 3.压缩  合并
    //****************************************************************************************************************************************************************************************************************************************s
    //                                              jQuery的实现原理和核心


    //****************************************************************************************************************************************************************************************************************************************
    // 谈一下Jquery中的bind(),live(),delegate(),on()的区别
    //****************************************************************************************************************************************************************************************************************************************
    // Jquery与jQueryUI有啥区别
    //****************************************************************************************************************************************************************************************************************************************
    // Zepto如何理解的？和jquery什么区别
    //****************************************************************************************************************************************************************************************************************************************
    // 移动click事件300ms延迟问题怎么解决
    //****************************************************************************************************************************************************************************************************************************************
    // Angular, vue  jquery  react各自的优点和缺点
    //****************************************************************************************************************************************************************************************************************************************
    // PC端开发和移动端开发有什么区别
    //****************************************************************************************************************************************************************************************************************************************
    // 模块化开发如何理解   实现js的模块化编程
    //****************************************************************************************************************************************************************************************************************************************
    // CSS3有哪些新特性
    //****************************************************************************************************************************************************************************************************************************************
    // html5有哪些新特性  如何区别html 和html5
    //****************************************************************************************************************************************************************************************************************************************
    // web攻击技术
    //****************************************************************************************************************************************************************************************************************************************
    // 懒加载的原理是什么 
    //****************************************************************************************************************************************************************************************************************************************
    // 上拉更新的原理
    //****************************************************************************************************************************************************************************************************************************************
    // es6新特性
    //****************************************************************************************************************************************************************************************************************************************
    // 侧滑菜单实现  Actionsheet弹出框实现
    //****************************************************************************************************************************************************************************************************************************************
    // eval() 
    //****************************************************************************************************************************************************************************************************************************************
    // AMD CMD区别
    //****************************************************************************************************************************************************************************************************************************************
    // CommonJs如何理解
    //****************************************************************************************************************************************************************************************************************************************
    // 改变this指针的指向
    //****************************************************************************************************************************************************************************************************************************************
    // Object.assign()
    //****************************************************************************************************************************************************************************************************************************************
    // html5输入类型
    //****************************************************************************************************************************************************************************************************************************************
    // iscroll和swiper
    //****************************************************************************************************************************************************************************************************************************************
    // rem布局的缺点   rem的原理
    //****************************************************************************************************************************************************************************************************************************************
    // 写一个函数，该函数实现的功能是：100元给10个人发红包，红包大小随机，每个人都能得到红包。
    // 分析 每个人都需要有至少0.01 考虑到浮点数的运算比较麻烦 统一处理成100倍 在处理为小数点后两位
    // 获取大于0的随机数的方法
    // function randomFn() {
    //     var random = Math.random();
    //     if (random == 0) {
    //         randomFn();
    //     } else {
    //         // console.log(random)
    //         return random;
    //     }
    // }
    // // 红包金额的确定精确到小数点后两位
    // // function redPacket(moneyLeft, num) {//参数是金额和人数  金额是保留两位有效数字的浮点数
    // //     if (moneyLeft * 100 < num) {
    // //         console.log("金额不足以每人0.01")
    // //     }
    // //     if (moneyLeft * 100 == num) {//剩余金额只能每人0.01时
    // //         return 0.01;
    // //     } else {
    // //         console.log("ss")
    // //         var random1 = randomFn();
    // //         // console.log(random1)
    // //         var tempMoney = parseInt(moneyLeft * 100 * random1) / 100;
    // //         // 随机的金额不能全部占完所有的资源至少每位0.01 也不能为0 
    // //         if (tempMoney == 0 || (moneyLeft * 100 - tempMoney * 100 < num - 1)) {
    // //             console.log('xx');
    // //             redPacket(moneyLeft, num);               
    // //         } else {
    // //             console.log(tempMoney)
    // //             return tempMoney;
    // //         }
    // //     }
    // // };
    // function redPacket(moneyLeft, num) {//参数是金额和人数  金额是保留两位有效数字的浮点数
    //     if (moneyLeft * 100 < num) {
    //         console.log("金额不足以每人0.01")
    //     }
    //     if (moneyLeft * 100 == num) {//剩余金额只能每人0.01时
    //         return 0.01;
    //     } else {
    //         var random1 = randomFn();
    //         console.log(moneyLeft)
    //         console.log(random1)
    //         var tempMoney = parseInt(moneyLeft * 100 * random1) / 100;
    //         console.log(tempMoney)
    //         // 随机的金额不能全部占完所有的资源至少每位0.01 也不能为0 
    //         if (tempMoney == 0) {
    //             return 0.01;
    //         }
    //         if (moneyLeft * 100 - tempMoney * 100 < num - 1) {
    //             return (moneyLeft * 100 - num)/100;
    //         } else {
    //             return tempMoney;
    //         }
    //     }
    // };
    // // 实现人数金额输入返回结果
    // var arr = [];
    // function happy(money, randomMoney, num) {//总金额  随机出去的总金额  随机剩余的数量   
    //     // console.log(randomMoney)
    //     if (num > 1) {
    //         // console.log(redPacket((money * 100 - randomMoney * 100) / 100, num))
    //         var cutMoeny = redPacket((money * 100 - randomMoney * 100) / 100, num);//本次随机的金额
    //         arr.push(cutMoeny);
    //         randomMoney = (randomMoney * 100 + cutMoeny * 100) / 100;//随机出去的总金额
    //         happy(money, randomMoney, num - 1)
    //     } else if (num == 1) {
    //         // 需要考虑总和的确定和浮点数的运算 
    //         arr.push(parseInt(money * 100 - randomMoney * 100) / 100)  //没有进行浮点数的运算处理
    //     }
    // }
    // happy(10, 0, 5);
    // console.log(arr)
    function randomleft(leftMoney, leftNum) {
        // 函数返回一个随机值
        var randomX = parseInt(Math.random() * leftMoney);
        if (randomX == 0) {
            randomX = 1;
        }
        if (leftMoney < (randomX + leftNum - 1)) {
            randomX = leftMoney - leftNum + 1;
        }
        return randomX;
    }
    function bigSmall(num) {
        if (num < 10) {
            return "0.0" + num;
        }
        if (10 < num && num < 100) {
            return "0." + num;
        }
        if (100 < num ) {
            return parseInt(num/100) + '.' + parseInt((num%100)/10) +  parseInt(num%10);
        }
    }
    var arr = [];
    function happy(money, num) {
        var left = 0;
        var leftMoney = 0;
        for (var i = num; i > 0; i--) {
            leftMoney = money * 100 - left;
            if (i == 1) {//最后一个
                arr.push(bigSmall(leftMoney))
            } else {
                var red = randomleft(leftMoney, i);
                arr.push(bigSmall(red))
                left = left + red;
            }
        }
    }
    happy(10, 2);
    var last = 0;
    for (var j = 0; j < arr.length; j++) {
        console.log(Number(arr[j]));
        last = last + Number(arr[j])*100;
    }
    console.log(last)
    console.log(arr)
    //****************************************************************************************************************************************************************************************************************************************
    //****************************************************************************************************************************************************************************************************************************************
    //****************************************************************************************************************************************************************************************************************************************
    //****************************************************************************************************************************************************************************************************************************************
    //****************************************************************************************************************************************************************************************************************************************
    //****************************************************************************************************************************************************************************************************************************************
    //****************************************************************************************************************************************************************************************************************************************
    //****************************************************************************************************************************************************************************************************************************************
    //****************************************************************************************************************************************************************************************************************************************
    //****************************************************************************************************************************************************************************************************************************************
    //****************************************************************************************************************************************************************************************************************************************
    //****************************************************************************************************************************************************************************************************************************************
    //****************************************************************************************************************************************************************************************************************************************
    //****************************************************************************************************************************************************************************************************************************************
    //****************************************************************************************************************************************************************************************************************************************
    //****************************************************************************************************************************************************************************************************************************************
    //****************************************************************************************************************************************************************************************************************************************
    //****************************************************************************************************************************************************************************************************************************************
    //****************************************************************************************************************************************************************************************************************************************
    //****************************************************************************************************************************************************************************************************************************************
    //****************************************************************************************************************************************************************************************************************************************
    //****************************************************************************************************************************************************************************************************************************************
















})