/**
 * 交互数组的两个位置的值
 */
function swapArray (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]] // 解构
}

/**
 * 移动数组中的一个位置到另一个位置上
 */
function moveArray (arr, from, to) {
  arr.splice(to, 0, arr.splice(from, 1))
}

/**
 * 生成指定长度的数组，并根据数值指定范围随机填充每项
 */
function randomArray(len = 0, min, max) {
  let arr = [],
    i = 0
  while (i < len) {
    arr[i++] = randomNumber(min, max)
  }
  return arr
}

/**
 * @param { number } min 最小值
 * @param { number } max 最大值
 * @returns {number} 指定范围的数值
 */
function randomNumber (min = 0, max = 1) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

module.exports = {
  swapArray,
  moveArray,
  randomArray,
  randomNumber,
}
