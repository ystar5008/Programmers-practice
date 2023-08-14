function solution(s) {
    let answer = 0;
    let arr = s.split(' ')
    for (let i = 0; i < arr.length; i++) {

        console.log(arr[i])
        if (arr[i] === "Z") {
            console.log(arr[i])
            answer -= +arr[i - 1]
        } else {
            answer += +arr[i]
        }
    }
    return answer;
}