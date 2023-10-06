function solution(array) {
    let max = 0, max_index = 0;
    for (let i = 0; i<array.length; i++) {
        if (max < array[i]) {
            max = array[i];
            max_index = i;
        }
    }
    return [max, max_index];
}