function solution(num1, num2) {
    var answer = 0;
    var q = 0;
    q = (num1 / num2) * 1000
    answer = Math.trunc(q)
    return answer;
}