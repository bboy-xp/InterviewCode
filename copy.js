// 赋值出现问题
// let a = {
//     age: 12,
//     sex: 1
// };
// let b = a;
// a.age = 0;
// console.log(b.age);
// 浅拷贝
// let b = Object.assign({}, a);
// a.age = 0;
// console.log(b.age);

// let b  = {...a};
// a.age = 0;
// console.log(b.age);

// function clone(target) {
//     let cloneTarget = {};
//     for (const key in target) {
//         cloneTarget[key] = target[key];
//     }
//     return cloneTarget;
// }
// let b = clone(a);
// a.age = 0;
// console.log(b.age);
// 深拷贝
let a = {
    age: 10,
    jobs: {
        first: "FE"
    }
};

// let b = {...a};
// a.jobs.first = "UI";
// console.log(b.jobs.first);

// let b = JSON.parse(JSON.stringify(a));
// a.jobs.first = "UI";
// console.log(b.jobs.first);

// function clone(target) {
//     if(typeof target === 'object') {
//         let cloneTarget = Array.isArray(target) ? []:{};
//         for (const key in target) {
//             cloneTarget[key] = clone(target[key]);
//         }
//     }else {
//         return target;
//     }
// }