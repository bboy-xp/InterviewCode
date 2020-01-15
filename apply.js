Function.prototype.myApply = function (context) {
    var context = context || window;
    context.fn = this;
    var result;
    // 判断是否储存第二个参数
    // 如果存在，就将第二个参数展开
    if (arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
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
getValue.myApply(a, ['sxp', 22]);