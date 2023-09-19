function solution(hp) {
    var count = Math.floor(hp/5);
    if (hp % 5 > 0){
        if (hp % 5 >= 3){
            count += 1;
            if (hp % 5 - 3 > 0){
            count += hp % 5 - 3;
        }
        }
        if (hp % 5 > 0 && hp % 5 < 3){
            count += hp % 5;
        }
    }
    return count;
}