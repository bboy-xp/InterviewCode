Function.prototype.myBind = function(context) {
    if (typeof this !== "function") {
        throw new TypeError("Error");
    }
    var _this = this;
    var args = [...arguments].slice(1);
    // 返回一个函数
    return function F() {
        // 因为返回了一个函数，可以new F()，所以需要判断
        if (this instanceof F) {
            return new _this(...args, ...arguments);
        }
        return _this.apply(context, args.concat(...arguments));
    }
}

let a = {
    value: 1
}
function getValue(name, age) {
    // console.log(name)
    // console.log(age)
    // console.log(this.value)
}
getValue.myBind(a, 'sxp', 22)();