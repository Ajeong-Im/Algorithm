function solution(num_list) {
    var answer = [];
    var even = 0, odd = 0;
    for (var i = 0; i<num_list.length; i++){
        if (num_list[i] % 2 == 0)
            even++;
        else if (num_list[i] % 2 == 1)
            odd++;
    }
    answer = [even, odd];
    return answer;
}