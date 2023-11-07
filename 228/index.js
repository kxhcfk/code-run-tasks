/*
    Дан массив целых чисел и целое число k. Нужно определить, есть ли в массиве два числа, сумма которых равна k .
    Пример:
    Вход: nums = [10, 15, 3, 7], k = 17
    Выход: True
*/

/** @returns Boolean */
function func(nums, k) {
    const map = {};
    // ваш код здесь
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i];

        const diff = k - item;

        if (map.hasOwnProperty(diff)) {
            return true;
        } else {
            map[item] = diff
        }
    }

    return false;
}

console.log(func([10, 15, 3, 7], 17))

module.exports = func;