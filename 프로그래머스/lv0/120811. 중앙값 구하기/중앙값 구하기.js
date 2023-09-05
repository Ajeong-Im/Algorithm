function solution(array) {
    var answer = 0;
        
    const solution = (array) => 
    array.sort((a, b) => a - b).at(Math.floor(array.length / 2))
    
    answer = solution(array);
    return answer;
}