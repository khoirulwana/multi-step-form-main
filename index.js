const stepNumberOne = document.querySelector(".one");
const stepNumberTwo = document.querySelector(".two");
const stepNumberThree = document.querySelector(".three");
const stepNumberFour = document.querySelector(".four");

const nextButton1 = document.querySelector(".next1");
const backButton1 = document.querySelector(".back1");
const nextButton2 = document.querySelector(".next2");
const backButton2 = document.querySelector(".back2");
const nextButton3 = document.querySelector(".next3");
const backButton3 = document.querySelector(".back3");
const confirmButtonEL = document.querySelector(".confirm");
const changePlan = document.querySelector(".change");

const stepOneEl = document.querySelector(".step-1");
const stepTwoEl = document.querySelector(".step-2");
const stepThreeEl = document.querySelector(".step-3");
const stepFourEl = document.querySelector(".step-4");
const stepFiveEl = document.querySelector(".step-5");

stepNumberOne.style.backgroundColor = "lightBlue";
stepNumberOne.style.color = "#02295a";

/* reset the background color of number indicator add to all click eventListener*/

function resetStepIndicators() {
  stepNumberOne.style.backgroundColor = "";
  stepNumberOne.style.color = "";
  stepNumberTwo.style.backgroundColor = "";
  stepNumberTwo.style.color = "";
  stepNumberThree.style.backgroundColor = "";
  stepNumberThree.style.color = "";
  stepNumberFour.style.backgroundColor = "";
  stepNumberFour.style.color = "";
}

nextButton1.addEventListener("click", () => {
  stepOneEl.style.display = "none";
  stepTwoEl.style.display = "flex";
  stepThreeEl.style.display = "none";
  stepFourEl.style.display = "none";
  stepFiveEl.style.display = "none";
  resetStepIndicators();
  stepNumberTwo.style.backgroundColor = "lightBlue";
  stepNumberTwo.style.color = "#02295a";
});

backButton1.addEventListener("click", () => {
  stepOneEl.style.display = "flex";
  stepTwoEl.style.display = "none";
  stepThreeEl.style.display = "none";
  stepFourEl.style.display = "none";
  stepFiveEl.style.display = "none";
  resetStepIndicators();
  stepNumberOne.style.backgroundColor = "lightBlue";
  stepNumberOne.style.color = "#02295a";
});

nextButton2.addEventListener("click", () => {
  stepOneEl.style.display = "none";
  stepTwoEl.style.display = "none";
  stepThreeEl.style.display = "flex";
  stepFourEl.style.display = "none";
  stepFiveEl.style.display = "none";
  resetStepIndicators();
  stepNumberThree.style.backgroundColor = "lightBlue";
  stepNumberThree.style.color = "#02295a";
});

backButton2.addEventListener("click", () => {
  stepOneEl.style.display = "none";
  stepTwoEl.style.display = "flex";
  stepThreeEl.style.display = "none";
  stepFourEl.style.display = "none";
  stepFiveEl.style.display = "none";
  resetStepIndicators();
  stepNumberTwo.style.backgroundColor = "lightBlue";
  stepNumberTwo.style.color = "#02295a";
});

nextButton3.addEventListener("click", () => {
  stepOneEl.style.display = "none";
  stepTwoEl.style.display = "none";
  stepThreeEl.style.display = "none";
  stepFourEl.style.display = "flex";
  stepFiveEl.style.display = "none";
  resetStepIndicators();
  stepNumberFour.style.backgroundColor = "lightBlue";
  stepNumberFour.style.color = "#02295a";
});

backButton3.addEventListener("click", () => {
  stepOneEl.style.display = "none";
  stepTwoEl.style.display = "none";
  stepThreeEl.style.display = "flex";
  stepFourEl.style.display = "none";
  stepFiveEl.style.display = "none";
  resetStepIndicators();
  stepNumberThree.style.backgroundColor = "lightBlue";
  stepNumberThree.style.color = "#02295a";
});

confirmButtonEL.addEventListener("click", () => {
  stepOneEl.style.display = "none";
  stepTwoEl.style.display = "none";
  stepThreeEl.style.display = "none";
  stepFourEl.style.display = "none";
  stepFiveEl.style.display = "none";
  stepFiveEl.style.display = "flex";
});

changePlan.addEventListener("click", () => {
  stepOneEl.style.display = "none";
  stepTwoEl.style.display = "flex";
  stepThreeEl.style.display = "none";
  stepFourEl.style.display = "none";
  stepFiveEl.style.display = "none";
  resetStepIndicators();
  stepNumberTwo.style.backgroundColor = "lightBlue";
  stepNumberTwo.style.color = "#02295a";
});
