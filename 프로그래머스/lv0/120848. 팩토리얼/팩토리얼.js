function solution(n) {
    let answer = 1;

    let i = 1
    while (answer <= n) {
        answer *= i
        if (answer === n) {
            return i
        }
        if (answer > n) {
            return i - 1
        }
        i++
    }
}