/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
    let n =temperatures.length, answer = new Array(n), arr = []
    for(let i=n-1;i>=0;i--){
        const tem = temperatures[i]
        //省略arr.length仍可运行：arr[-1] -> undefined; arr[undefined] -> undefined; temperatures[undefined] -> undefined; tem>=undefined -> false;
        while(arr.length && tem >= temperatures[arr[arr.length-1]]){
            arr.pop()
        }
        answer[i] = arr.length ? arr[arr.length-1] - i : 0
        arr.push(i)
    }
    return answer
};