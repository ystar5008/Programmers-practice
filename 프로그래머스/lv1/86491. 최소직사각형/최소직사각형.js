function solution(sizes) {
    let a = []
    let b = []
    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i][0] > sizes[i][1]) {
            a.push(sizes[i][0])
            b.push(sizes[i][1])
        } else {
            b.push(sizes[i][0])
            a.push(sizes[i][1])
        }

    }
    return Math.max(...a) * Math.max(...b);
}