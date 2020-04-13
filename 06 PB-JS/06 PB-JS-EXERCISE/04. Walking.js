function calculateTheStepsToTheGoal(input) {
    let text = input.shift();
    let targetSteps = 10000;
    while (targetSteps > 0) {
        if (text == "Going home") {
            let lastSteps = Number(input.shift());
            targetSteps -= lastSteps;
            break;
        } else {
            let steps = Number(text);
            targetSteps -= steps;
        }
        text = input.shift();
    }
    if (targetSteps <= 0) {
        console.log("Goal reached! Good job!");
    } else {
        console.log(`${targetSteps} more steps to reach goal.`);
    }
}

calculateTheStepsToTheGoal([1000, 1500, 2000, 6500]); // Goal reached! Good job!
calculateTheStepsToTheGoal([1500, 3000, 250, 1548, 2000, "Going home", 2000]); // Goal reached! Good job!
calculateTheStepsToTheGoal([1500, 300, 2500, 3000, "Going home", 200]); // 2500 more steps to reach goal.
calculateTheStepsToTheGoal([125, 250, 4000, 30, 2678, 4682]); // Goal reached! Good job!