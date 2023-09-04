function solution(numbers) {
    var answer = [];
    
    var i = 0;
    for (i = 0; i<numbers.length; i++) {
        answer[i] = numbers[i] * 2;
    }
    
    return answer;
}