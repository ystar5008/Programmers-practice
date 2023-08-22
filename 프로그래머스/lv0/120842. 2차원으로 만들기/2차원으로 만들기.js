function solution(num_list, n) {
    let answer = [];

    //num_list의 길이 , n 
    //n* n/num_list.length
    for (let i = 0; i < num_list.length; i++) {
        //n만큼 배열에 넣기
        if (i % n === 0) {
            console.log(i)
            //0 1
            //2 3
            //4 5
            //6 7
            answer.push(num_list.slice(i, i + n))
        }
    }
    return answer;
}