module.exports = function getZerosCount(number) {
    let count = 0;
    while (number = Math.floor(number/5)) count +=number;
    return count;
}
