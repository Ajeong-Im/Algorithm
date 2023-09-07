function solution(n) {
    var answer = [];
    var count = 1;
    var i = 0;
    while(count <= n) {
        if (count % 2 == 1){
            answer[i] = count
            i++;
            count += 2;
        }
        else {
            answer[i] = count + 1;
            i++;
            count += 2;
        }
    }
    return answer;
}