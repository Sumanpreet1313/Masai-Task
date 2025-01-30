// Initial array of 10 student scores
let scores = [35, 85, 92, 40, 58, 78, 28, 95, 60, 47];

// Loop through each student score to make adjustments
for (let i = 0; i < scores.length; i++) {
  // If the score is below 40, increase it by 20
  if (scores[i] < 40) {
    scores[i] += 20;
  }
  // If the score is over 90, adjust it to a maximum of 90
  if (scores[i] > 90) {
    scores[i] = 90;
  }
}

// Count how many students passed (score of 50 or more)
let passedCount = scores.filter(score => score >= 50).length;

// Log the number of students who passed
console.log("Number of students who passed:", passedCount);

// Log the final adjusted scores
console.log("Final adjusted scores:", scores);
