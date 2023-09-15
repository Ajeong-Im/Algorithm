function solution(age) {
    let alphabet = 'abcdefghij';
    return Array.from(age.toString()).map(t=>alphabet[+t]).join('')
}