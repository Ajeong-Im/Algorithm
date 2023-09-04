function solution(numbers) {
    var answer = 0;
    var length = numbers.length;
    for (var i = 0; i < length; i++) {
        answer += numbers[i];
    }
    answer = answer / length;
    return answer;
}