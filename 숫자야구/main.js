const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

const numbers = [];
for (let n = 0; n <= 9; n += 1) {
  numbers.push(n + 1);
}
const answer = [];
for (let n = 0; n <= 3; n += 1) {
  const index = Math.floor(Math.random() * numbers.length); // numbers 길이
  answer.push(numbers[index]); 
  numbers.splice(index, 1);
}

console.log(answer);

/* $form.addEventListener('submit', (event) => {
  event.preventDefault(); // 기본 동작 막기
  console.log('서브밋');
}); */
const tries = [];
// 입력값 문제있음 검사하는 코드
function checkInput(input) {
  if (input.length !== 4) {
    return alert('4자리 숫자를 입력해 주세요.');
  }
  if (new Set(input).size !== 4) {
    return alert('중복되지 않게 입력해 주세요');
  }
  if (tries.includes(input)) {
    return alert('이미 시도한 값입니다.');
  }
  return true;
}

function defeated() {
  const message = document.createTextNode(`패배! 정답은 ${answer.join('')}`);
  $logs.appendChild(message);
}

let out = 0;
$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = $input.value; // value 변수에 저장하고
  $input.value = ''; // 글자값 지워줌
  // 입력값 문제있음
  if(!checkInput(value)) {
    return;
  }
  // 입력값 문제없음 검사하는 코드
  if (answer.join('') === value) {
    $logs.textContent = '홈런!';
    return;
  }
  if (tries.length >= 9) {
    defeated();
    return;
  }
  // 몇 스트라이크 몇 볼인지 검사
  let strike = 0;
  let ball = 0;
  // answer: 3146, value: 1234
  for (let i = 0; i < answer.length; i++) {
    const index = value.indexOf(answer[i]);
    if (index > -1) { //일치하는 숫자 발견
      if (index === i) { // 자릿수도 같음
        strike += 1;
      } else { // 숫자도 같음
        ball += 1;
      }
    }
  }
  if(strike === 0 && ball === 0) {
    out++;
    $logs.append(`${value}:아웃`, document.createElement('br'));
  }else {
    $logs.append(`${value}:${strike} 스트라이크 ${ball} 볼`, document.createElement('br'));
  }
  if (out === 3) {
    defeated();
    return;
  }
  tries.push(value); // 시도할때마다 tries에 기록
});