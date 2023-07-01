const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

const numbers = [];
for (let n = 0; n <= 9; n += 1) {
  numbers.push(n + 1);
}
const answer = [];
for (let n = 0; n <= 4; n += 1) {
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
} // 검사하는 코드

$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = $input.value; // value 변수에 저장하고
  $input.value = ''; // 글자값 지워줌
  if (checkInput(value)) {
    // 입력값 문제없음
    tries.push(value);
  } else {
    // 에러 있음.
  }// input값을 검사하는 코드
});