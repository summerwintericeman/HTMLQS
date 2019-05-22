$(function () {
    //********************************************************************************************************************
    //                                                    浅拷贝的效果
    // let list1 = [1, 2, 3, 4],
    //     list2 = list1;
    //     list1[0] = 2;//修改原始对象后发现拷贝后的对象的值也会被修改
    // console.log(list1, list2);
    //********************************************************************************************************************
    //                                               深拷贝的实现的三种办法
    //                                                 递归方法实现深拷贝
    // function deepClone(obj) {
    //     let objClone = Array.isArray(obj) ? [] : {};//判断对象是否是数组不是则设置为对象
    //     if (obj && typeof obj === "object") {
    //         for (key in obj) {
    //             if (obj.hasOwnProperty(key)) {
    //                 //判断ojb子元素是否为对象，如果是，递归复制
    //                 if (obj[key] && typeof obj[key] === "object") {
    //                     objClone[key] = deepClone(obj[key]);
    //                 } else {
    //                     //如果不是，简单复制
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
    //********************************************************************************************************************
    //                                             JSON对象的parse和stringify
    // let list3 = [1, 2, 3, 4];
    // list4 = JSON.parse(JSON.stringify(list3));
    // list3[0] = 2;
    // console.log(list3,list4);
    //********************************************************************************************************************
    //                                               jq的extend实现深拷贝
    // let list5=[0,1,[2,3],4],
    //     list6=$.extend(true,[],list5);
    // list5[0]=1;
    // list5[2][0]=1;
    // console.log(list5,list6);
    //********************************************************************************************************************
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
    //********************************************************************************************************************
    //                                                判断一个变量是否是数组的办法
    let a = [1, 2];
    var m = new Array()
    m[0] = "0";
    m[1] = "1";
    m[2] = "2";
    let b = {
        name: 1,
        arr: [1, 1,]
    };
    let c = 333;
    let i = new Number(1);
    let d = function () {
        console.log('函数');
    }
    let e = 's';
    let j = new String('s');
    let f = null;
    let g;
    let h = true;
    let k = new Boolean(true);
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
    //********************************************************************************************************************
    //                                       封装一个办法实现判断传入变量的类型
    //js的数据类型  
    // function judgeType(change) {
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

    // function judgeType(change) {
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
    //********************************************************************************************************************
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



})