function solution(num_list) {
    let answer = 0;

    for (let i of num_list) {
        while (i > 1) {
            (i % 2 === 0) ? i = i / 2 : i = (i - 1) / 2
            answer++
        }
    }
    return answer;
}