function solution(my_string) {
    var answer = [];
    for (let i = 0; i<my_string.length; i++){
        if (isNaN(my_string[i]) == 0)
            answer.push(Number(my_string[i]));
    }
    return answer.sort();
}