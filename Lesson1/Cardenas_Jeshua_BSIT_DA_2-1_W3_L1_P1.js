let scores = [85, 90, 75, 68, 88, 92, 70, 80];
let passingScore = 75;

function getGrade(x) {
    if (x >= 90) return "Excellent - Passed";
    if (x >= 80) return "Very Good - Passed";
    if (x >= 75) return "Good - Passed";
    return "Failed";
}

let total = 0;
let highest = scores[0];
let lowest = scores[0];
let passed = 0;
let failed = 0;

console.log("Student Scores:");
for (let i = 0; i < scores.length; i++) {
    console.log("Student " + (i + 1) + ": " + scores[i] + " - " + getGrade(scores[i]));

    if (scores[i] >= passingScore) {
        passed++;
    } else {
        failed++;
    }

    total += scores[i];

    if (scores[i] > highest) {
        highest = scores[i];
    }
    if (scores[i] < lowest) {
        lowest = scores[i];
    }
}

let average = total / scores.length;

console.log("");
console.log("Total Score: " + total);
console.log("Average Score: " + average.toFixed(2));
console.log("Highest Score: " + highest);
console.log("Lowest Score: " + lowest);
console.log("Number of Students Passed: " + passed);
console.log("Number of Students Failed: " + failed);
