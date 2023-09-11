"use strict";

const eightBallFlex = document.querySelector(".flexbox");
const eightBall = document.querySelector(".eight-ball");
const textContainer = document.querySelector(".heading");
const glass = document.querySelector(".glass");
const triangle = document.querySelector(".triangle");
const answer = document.querySelector(".answer");
let isAnimating = false;

const answers = [
  "It is certain",
  "It is Decidedly So",
  "Without A Doubt",
  "Yes Definitely",
  "You May Rely On it",
  "As I see it, Yes",
  "Most Likely",
  "Outlook Good",
  "Yes",
  "Signs Point To Yes",
  "Reply Hazy, Try again",
  "Ask Again Later",
  "Better Not Tell You Now",
  "Cannot Predict Now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

// Random Number Function

function randomNumber(min, max) {
  return Math.floor(Math.random() * max) + min;
}

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

createStars(1, 100);
createStars(2, 85);
createStars(3, 70);

// Heading effects

const text = textContainer.textContent;
textContainer.innerHTML = "";

for (let i = 0; i < text.length; i++) {
  const span = document.createElement("span");
  span.className = "heading";
  span.textContent = text[i];
  textContainer.appendChild(span);
}

const headingColour = function () {
  const letter = document.querySelectorAll(".heading");
  const duration = 3500 / letter.length;

  for (let i = 0; i < letter.length; i++) {
    setTimeout(() => {
      letter[i].style.color = "#70e000";
    }, i * duration);
  }
};

const resetHeadingColour = function () {
  const letter = document.querySelectorAll(".heading");
  const duration = 300 / letter.length;

  for (let i = 0; i < letter.length; i++) {
    setTimeout(() => {
      letter[i].style.color = "#fff";
      if (i === letter.length - 1) {
        isAnimating = false;
      }
    }, i * duration);
  }
};

// Vibration Effect

const startVibration = function () {
  eightBallFlex.style.animation = "vibrate 0.2s linear infinite";
  eightBall.style.boxShadow = "0px 0px 30px 0px #70e000";
  setTimeout(() => {
    eightBallFlex.style.animation = "";
    eightBall.style.boxShadow = "";
  }, 4000);
};

const increaseVibration = function () {
  let initialDuration = 200;
  const decreaseAmount = 10;
  const minimumDuration = 50;

  const vibrationInterval = setInterval(() => {
    eightBallFlex.style.animation = `vibrate ${initialDuration}ms linear infinite`;
    initialDuration -= decreaseAmount;

    if (initialDuration <= minimumDuration) {
      clearInterval(vibrationInterval); // Stop the interval once we hit the fastest vibration
    }
  }, initialDuration);

  setTimeout(() => {
    clearInterval(vibrationInterval); // Ensure interval is cleared after 4 seconds
  }, 4000);
};

// Blur effect

const animateBoxShadow = function () {
  let initialBlur = 30;
  const maxBlur = 70;
  const increaseBlur = maxBlur / 40;

  const shadowInterval = setInterval(() => {
    eightBall.style.boxShadow = `0px 0px ${initialBlur}px 0px #70e000`;
    initialBlur += increaseBlur;

    if (initialBlur >= maxBlur) {
      clearInterval(shadowInterval);
    }
  }, 100);

  setTimeout(() => {
    clearInterval(shadowInterval);
  }, 4000);
};

// Bubble effect

const createBubbles = function (quantity) {
  for (let i = 0; i < quantity; i++) {
    let bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.style.left = `${randomNumber(1, 99)}%`;
    bubble.style.animationDuration = `${randomNumber(2, 4)}s`;
    bubble.addEventListener("animationend", function () {
      bubble.remove();
    });
    glass.appendChild(bubble);
  }
};

// Glass and Answer Reveal Effect

const revealAnswer = function () {
  triangle.classList.add("fade");
  answer.classList.add("fade");

  setTimeout(() => {
    const randomAnswer = answers[randomNumber(0, answers.length - 1)];
    answer.textContent = randomAnswer;
  }, 2000);

  triangle.addEventListener("animationend", function () {
    triangle.classList.remove("fade");
    answer.classList.remove("fade");
  });
};

// Eight Ball Click Event

eightBallFlex.addEventListener("click", function () {
  if (isAnimating) return;
  isAnimating = true;

  // Answer Animation
  revealAnswer();

  // Heading effect
  headingColour();
  setTimeout(resetHeadingColour, 4000);

  // Eight ball vibrate and box shadow
  startVibration();
  increaseVibration();
  animateBoxShadow();

  // Bubble effect
  const bubblingGlass = setInterval(() => createBubbles(15), 300);
  setTimeout(() => clearInterval(bubblingGlass), 4000);
});
