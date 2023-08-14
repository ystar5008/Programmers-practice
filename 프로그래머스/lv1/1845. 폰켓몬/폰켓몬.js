function solution(nums) {
    //총 n마리 포켓몬 중 n/2마리 만큼 가져가도 됨
    let max = nums.length / 2
    let arr = [...new Set(nums)]

    console.log(max, arr.length)
    return arr.length > max ? max : arr.length;
}