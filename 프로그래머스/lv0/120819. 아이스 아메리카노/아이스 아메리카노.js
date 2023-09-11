function solution(money) {
    var coffee = 0;
    while (money >= 5500) {
        money -= 5500;
        coffee++;
    }
    return [coffee, money];
}