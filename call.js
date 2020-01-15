Function.prototype.myCall = function (context) {
    var context = context || window;
    // 给context添加一个属性
    context.fn = this;
    // 将context后面的参数取出来
    var args = [...arguments].slice(1);
    var result = context.fn(...args);
    // 删除fn
    delete context.fn;
    return result;
}

let a = {
    value: 1
}
function getValue(name, age) {
    // console.log(name)
    // console.log(age)
    // console.log(this.value)
}
getValue.myCall(a, 'sxp', 22);