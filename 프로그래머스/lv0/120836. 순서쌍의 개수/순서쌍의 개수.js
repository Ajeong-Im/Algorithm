function solution(n) {
    const result = [];
    for (var i = 1; i<=n; i++) {
        if (n % i == 0)
            result.push(i);
    }
    return result.length;
}