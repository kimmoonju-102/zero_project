const $screen = document.querySelector('#screen');
const $result = document.querySelector('#result');

let startTime;
let endTime;
const records = [];
let timeoutId;
$screen.addEventListener('click', (event) => {
  if (event.target.classList.contains('waiting')) { //파랑
    $screen.classList.remove('waiting');
    $screen.classList.add('ready');
    $screen.textContent = '초록색이 되면 클릭하세요';
    // 빨간 화면을 클릭하기 전에 타이머 시작
    timeoutId = setTimeout(function() {
      startTime = new Date();
      $screen.classList.remove('ready');
      $screen.classList.add('now');
      $screen.textContent = '클릭하세요';
      // 첫시간재기
    }, Math.floor(Math.random() * 1000) + 2000); // 2초에서 3초 사이 2000~3000사이 수
  } else if (event.target.classList.contains('ready')) { //빨강
    clearTimeout(timeoutId);
    $screen.classList.remove('ready');
    $screen.classList.add('waiting');
    $screen.textContent = '너무 성급하시군요!';
  } else if (event.target.classList.contains('now')) { //초록
    endTime = new Date();
    const current = endTime - startTime;
    records.push(current);
    const average = records.reduce((a, c) => a + c) / records.length;
    endTime = new Date();
    $result.textContent = `현재 ${current}ms, 평균 : ${average}ms`;
    startTime = null; // 초기화
    endTime = null; // 초기화
    $screen.classList.remove('now');
    $screen.classList.add('waiting');
    $screen.textContent = '클릭해서 시작하세요';
  }
})