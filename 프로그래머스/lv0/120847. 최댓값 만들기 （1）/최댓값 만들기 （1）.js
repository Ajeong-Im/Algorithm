function solution(numbers) {
    var max = 0, secmax = 0;
    for (var i = 0; i<numbers.length; i++) {
        if (numbers[i] >= max) {
            secmax = max;
            max = numbers[i];
        }
        else if (numbers[i] > secmax && numbers[i] < max)
            secmax = numbers[i];
    }
    return max * secmax;
}