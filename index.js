//버튼
const resetBtn = document.querySelector(".reset");
const startBtn = document.querySelector(".start");

//버튼이미지
const resetImg = resetBtn.querySelector(".reset-img");
const startImg = startBtn.querySelector(".start-img");

//초기시간
let TIME = 0;

//timer 숫자
const $sec = document.querySelector(".S");
const $min = document.querySelector(".M");
const $hrs = document.querySelector(".H");

//START버튼 누를시 실행
function start() {
  updateTimer();
  timer = setInterval(function () {
    TIME--;
    updateTimer();
    if (TIME < 0) {
      clearInterval(timer);
      stop();
    }
  }, TIME * 60);
}

function stop() {
  alert("Finish");
}

//RESET버튼 누를시 실헹
function reset() {
  TIME = 0;
  $sec.children[0].textContent = 0;
  $min.children[0].textContent = 0;
  $hrs.children[0].textContent = 0;

  startImg.setAttribute("src", "./images/start-disabled.png");

  resetImg.setAttribute("src", "./images/reset-disabled.png");
}

//시간 계산 함수
function updateTimer() {
  const hours = Math.floor(TIME / 3600);
  const checkMinutes = Math.floor(TIME / 60);
  const seconds = TIME % 60;
  const minutes = checkMinutes % 60;

  //숫자바꾸기
  $sec.children[0].textContent = seconds;
  $min.children[0].textContent = minutes;
  $hrs.children[0].textContent = hours;

  //btn바꾸기
  startImg.setAttribute("src", "./images/pause.png");
}

//10초씩 추가하고 바꿔주는 함수
function timeSet1() {
  TIME += 10;
  console.log(TIME);
  const hours = Math.floor(TIME / 3600);
  const checkMinutes = Math.floor(TIME / 60);
  const seconds = TIME % 60;
  const minutes = checkMinutes % 60;

  //숫자바꾸기
  $sec.children[0].textContent = seconds;
  $min.children[0].textContent = minutes;
  $hrs.children[0].textContent = hours;

  startImg.setAttribute("src", "./images/start-default.png");

  resetImg.setAttribute("src", "./images/reset-default.png");
}

function init() {
  startBtn.addEventListener("click", start);
  resetBtn.addEventListener("click", reset);
  $sec.addEventListener("click", timeSet1);
}

init();
