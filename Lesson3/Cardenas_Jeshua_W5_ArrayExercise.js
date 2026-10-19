'use strict';

console.log('STUDENT SCORE ARRAY ANALYZER');

// Store the original names and final scores.
const studentNames = ['Ana', 'Ben', 'Carla', 'Daniel', 'Ella'];
const studentScores = [85, 72, 91, 64, 78];

// Store three activity scores for each original student.
const activityScores = [
  [80, 85, 90],
  [70, 72, 74],
  [88, 92, 95],
  [60, 65, 67],
  [75, 78, 81]
];

// Preserve the original names for the activity matrix.
const originalNames = Array.from(studentNames);

console.log('\n-----PART A: ORIGINAL RECORDS-----');

// Display every student's index, name, and score using a for loop.
for (let i = 0; i < studentNames.length; i++) {
  console.log(`${i} - ${studentNames[i]}: ${studentScores[i]}`);
}



// PART B
console.log('\n-----PART B: ADD NEW STUDENTS-----');

// Add Faith and 88 at the end.
studentNames.push('Faith');
studentScores.push(88);

// Add Aaron and 76 at the beginning.
studentNames.unshift('Aaron');
studentScores.unshift(76);

// Display both arrays and their length.
console.log('Updated Names:', studentNames);
console.log('Updated Scores:', studentScores);
console.log('Number of Students:', studentNames.length);



// PART C
console.log('\n-----PART C: REMOVE AND REPLACE RECORDS-----');

// Remove the first name and score (Aaron, 76).
studentNames.shift();
studentScores.shift();

// Remove the last name and score. (Faith, 88).
studentNames.pop();
studentScores.pop();

// Find Daniel's index.
const danielIndex = studentNames.indexOf('Daniel');

// Remove (Daniel, 64).
studentNames.splice(danielIndex, 1);
studentScores.splice(danielIndex, 1);

// Insert (Grace, 82) at index 2.
studentNames.splice(2, 0, 'Grace');
studentScores.splice(2, 0, 82);

// Display the updated arrays.
console.log('Names:', studentNames);
console.log('Scores:', studentScores);



// PART D
console.log('\n-----PART D: CLASS STATISTICS-----');

// Calculate the total score using reduce(). this means run the variables of the array studentScores, and return the sum of the scores starting from 0 and accumulate the total.
const totalScore = studentScores.reduce((a, b) => a + b, 0);

// Calculate the average score.
const averageScore = totalScore / studentScores.length;

// Find the highest and lowest scores using a loop.
let highestScore = studentScores[0];
let lowestScore = studentScores[0];
for (let i = 1; i < studentScores.length; i++) {
  if (studentScores[i] > highestScore) highestScore = studentScores[i];
  if (studentScores[i] < lowestScore) lowestScore = studentScores[i];
}

// Display all statistics.
console.log('Total Score:', totalScore);
console.log('Average Score:', averageScore.toFixed(2));
console.log('Highest Score:', highestScore);
console.log('Lowest Score:', lowestScore);



// PART E
console.log('\n-----PART E: PASSING-SCORE ANALYSIS-----');

const passingScore = 75;

// Use filter to obtain passing scores.
const passingScores = studentScores.filter(score => score >= passingScore);

// Use map to produce Passed or Failed statuses.
const statuses = studentScores.map(score => (score >= passingScore ? 'Passed' : 'Failed'));

// Use some to check whether at least one student failed.
const atLeastOneFailed = studentScores.some(score => score < passingScore);

// Use every to check whether all students passed.
const allPassed = studentScores.every(score => score >= passingScore);

// Display all results.
console.log('Passing Scores:', passingScores);
console.log('Statuses:', statuses);
console.log('At Least One Failed:', atLeastOneFailed);
console.log('All Students Passed:', allPassed);



// PART F
console.log('\n-----PART F: SORT AND SEARCH-----');

// Copy the scores using Array.from.
const sortedScores = Array.from(studentScores);

// Sort the copy from highest to lowest.
sortedScores.sort((a, b) => b - a);

// Search for 91 using includes and indexOf.
const indexOfNinetyOne = sortedScores.indexOf(91);

// Display the results.
console.log('Scores from Highest to Lowest:', sortedScores);
console.log('Index of 91:', indexOfNinetyOne);



// PART G
console.log('\n-----PART G: TWO-DIMENSIONAL ARRAY-----');

const activityAverages = [];


// Use nested loops to process every row and column.
for (let i = 0; i < activityScores.length; i++) {
  let rowTotal = 0;
  for (let j = 0; j < activityScores[i].length; j++) {
    rowTotal += activityScores[i][j];
  }
  // Calculate and store each student's activity average.
  const rowAverage = rowTotal / activityScores[i].length;
  activityAverages.push(rowAverage);
  console.log(`\n${originalNames[i]}'s activity average: ${rowAverage.toFixed(2)}`);

  for (let j = 0; j < activityScores[i].length; j++) {
    console.log(activityScores[i][j]);
  }
  console.log();
}

console.log('\nActivity Averages:', activityAverages.map(avg => avg.toFixed(2)));


// PART H
console.log('\n-----PART H: TEXT SUMMARY-----');

// Use join to display names separated by " | ".
console.log('Students:', studentNames.join(' | '));
