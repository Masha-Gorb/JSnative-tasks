//ката 8куи: написать прототип для стринги, который бы проверял капсом ли написана строка
String.prototype.isUpperCase = function() {
    // your code here
    if (this.toUpperCase() === this) {
        return true
    } else {
        return false
    }
}