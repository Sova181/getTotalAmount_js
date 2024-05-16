function getTotalAmount(arr, valute) {
    let result = 0;

    for (let i = 0; i < arr.lenght; i += 1) {
        if (arr[i].slice(0, 3) == valute) {
            result += Number(arr[i].slice(4));
        }
    }
    return result;
};

module.exports = getTotalAmount