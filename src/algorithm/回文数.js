/**判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 *
 * 示例 1:
 * 输入: 121
 * 输出: true
 *
 * 示例 2:
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 *
 * 示例 3:
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 *
 * 进阶:
 * 你能不将整数转为字符串来解决这个问题吗？
 */

/**不转字符串类型一时没想出来
 * 看到一个很巧妙的逆转的循环，现贴下来
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || (x !== 0 && x % 10 === 0)) return false;

    let sum = 0;
    while (x > sum) {   //只用比较一半的长度就可以了
        sum = Math.ceil(sum * 10 + x % 10)    //转成整
        x = Math.ceil(x / 10)
    }

    return x === sum || x === Math.ceil(sum / 10)  //考虑奇偶回文
};

console.log(isPalindrome(123))