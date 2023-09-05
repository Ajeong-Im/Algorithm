function solution(n, k) {
    var answer = 0;
    const freeDrink = parseInt(n / 10);
    
    answer = 12000 * n + 2000 * (k - freeDrink);
    
    return answer;
}