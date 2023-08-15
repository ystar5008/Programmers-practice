function solution(progresses, speeds) {
    let answer = [];
    let daysRemaining = progresses.map((progress, index) =>
        Math.ceil((100 - progress) / speeds[index])
    );

    let maxDays = daysRemaining[0];
    let deployedFeatures = 0;

    daysRemaining.forEach((days) => {
        if (days <= maxDays) {
            deployedFeatures++;
        } else {
            answer.push(deployedFeatures);
            deployedFeatures = 1;
            maxDays = days;
        }
    });

    answer.push(deployedFeatures); // 마지막 배포된 기능 추가

    return answer;
}