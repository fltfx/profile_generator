const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let questions = [
  "0. What's your name? Nicknames are also acceptable :)",
  "1. What's an activity you like doing?",
  "2. What do you listen to while doing that?",
  "3. Which meal is your favourite (eg: dinner, brunch, etc.)",
  "4. What's your favourite thing to eat for that meal?",
  "5. Which sport is your absolute favourite?",
  "6. What is your superpower? In a few words, tell us what you are amazing at!",
  "No more questions... your profile is ready:"
];

let surveyAnswers = [];

let askRecursiveSurvey = (i, questions) => {
  //where i is used to count the number of survey questions/prompts
  rl.question(questions[i], (answer) => {
    if (i === 7){
      outputProfileText(surveyAnswers);
      return rl.close();
    }
    surveyAnswers.push(answer);
    i++;
    askRecursiveSurvey(i, questions);
  });
}

askRecursiveSurvey(0,questions);

let outputProfileText = (surveyAnswers) => {
  //console.log(surveyAnswers);
  console.log(`${surveyAnswers[0]} loves listening to ${surveyAnswers[2]} while ${surveyAnswers[1]}, devouring ${surveyAnswers[4]} for ${surveyAnswers[3]}, prefers ${surveyAnswers[5]} over any other sport, and is amazing at ${surveyAnswers[6]}.`);
}