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

// Heading event for 8-Ball click

const headingColour = function () {
  const letter = document.querySelectorAll(".heading");
  const duration = 5000 / letter.length;

  for (let i = 0; i < letter.length; i++) {
    setTimeout(() => {
      letter[i].style.color = "#70e000";
    }, i * duration);
  }
};

const resetHeadingColour = function () {
  const letter = document.querySelectorAll(".heading");
  const duration = 1000 / letter.length;

  for (let i = 0; i < letter.length; i++) {
    setTimeout(() => {
      letter[i].style.color = "#fff";
    }, i * duration);
  }
};

// Eight Ball Click Effect

const eightBall = document.querySelector(".flexbox");

eightBall.addEventListener("click", function () {
  // Fix double click glitch
  headingColour();
  setTimeout(resetHeadingColour, 5000);
});

// Heading turns green letter by letter for a total of 5 seconds
// At the same time the ball vibrates faster and faster for a total of 5 seconds
// the white glow turns green and slowly gets bigger for a total of 5 seconds
// During this 5 seconds the glass bubbles
// After 5 seconds the ball stops shaking, glow turns back to white, heading turns back to white, bubbles stop, and answer is revelaed
