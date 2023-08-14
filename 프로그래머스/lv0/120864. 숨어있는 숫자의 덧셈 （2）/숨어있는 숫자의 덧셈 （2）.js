function solution(my_string) {
    let answer = 0;
    let regex = /[a-zA-Z]/g
    let arr = my_string.split(regex).filter((e, i) => e !== '')
    for (let i of arr) {
        answer += +i
    }

    return answer;
}