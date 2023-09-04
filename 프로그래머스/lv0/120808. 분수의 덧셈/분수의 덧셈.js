function solution(numer1, denom1, numer2, denom2) {
    let ans = [numer1 * denom2 + numer2 * denom1, denom1 * denom2];
    
    const gcd = (a, b) => {  
    if (b === 0) return a   
        return gcd(b, a % b)  
    }
    
    let least = gcd(ans[0],ans[1])
    //least: 최소공배수
    let answer = [ans[0] / least , ans[1]/least]
    
    return answer
}