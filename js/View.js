"use strict";

// Starry background effect
const createStars = function (type, quantity) {
  for (let i = 0; i < quantity; i++) {
    let star = document.createElement("div");
    star.classList.add("star", `type-${type}`);
    star.style.left = `${randomNumber(1, 99)}%`;
    star.style.bottom = `${randomNumber(1, 99)}%`;
    star.style.animationDuration = `${randomNumber(50, 200)}s`;
    document.body.appendChild(star);
  }
};

function randomNumber(min, max) {
  return Math.floor(Math.random() * max) + min;
}

createStars(1, 100);
createStars(2, 85);
createStars(3, 70);

// Heading effect

const textContainer = document.querySelector(".heading");
const text = textContainer.textContent;
textContainer.innerHTML = "";

// Wrap each letter in a span with class "letter"
for (let i = 0; i < text.length; i++) {
  const span = document.createElement("span");
  span.className = "heading";
  span.textContent = text[i];
  textContainer.appendChild(span);
}

// Magic 8-Ball Answers

const answer1 = "It is certain";
const answer2 = "It is Decidedly So";
const answer3 = "Without A Doubt";
const answer4 = "Yes Definitely";
const answer5 = "You May Rely On it";
const answer6 = "As I see it, Yes";
const answer7 = "Most Likely";
const answer8 = "Outlook Good";
const answer9 = "Yes";
const answer10 = "Signs Point To Yes";
const answer11 = "Reply Hazy, Try again";
const answer12 = "Ask Again Later";
const answer13 = "Better Not Tell You Now";
const answer14 = "Cannot Predict Now";
const answer15 = "Concentrate and ask again";
const answer16 = "Don't count on it";
const answer17 = "My reply is no";
const answer18 = "My sources say no";
const answer19 = "Outlook not so good";
const answer20 = "Very doubtful";
