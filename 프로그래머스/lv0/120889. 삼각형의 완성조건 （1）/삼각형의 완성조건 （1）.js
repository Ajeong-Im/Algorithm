function solution(sides) {
    var max = 0, full = 0;
    for (var i = 0; i<3; i++) {
        full += sides[i];
        if (max < sides[i])
            max = sides[i];
    }
    if (full - max > max) return 1;
    else return 2;
    
}