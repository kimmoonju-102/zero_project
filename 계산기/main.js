let numOne = '';
let operator = '';
let numTwo = '';
const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');

// 고차함수 방식
/* const onClickNumber = (number) => (event) => {
  event.target.value;
  if (operator) {
    numTwo += number;
  }else {
    numOne += number;
  }
  $result.value += number;
};
document.querySelector('#num-0').addEventListener('click', onClickNumber('0')); */

// event 방식
const onClickNumber = (event) => {
  if (operator) {
    numTwo += event.target.textContent;
  }else {
    numOne += event.target.textContent;
  }
  $result.value += event.target.textContent;
};
document.querySelector('#num-0').addEventListener('click', onClickNumber);
document.querySelector('#num-1').addEventListener('click', onClickNumber);
document.querySelector('#num-2').addEventListener('click', onClickNumber);
document.querySelector('#num-3').addEventListener('click', onClickNumber);
document.querySelector('#num-4').addEventListener('click', onClickNumber);
document.querySelector('#num-5').addEventListener('click', onClickNumber);
document.querySelector('#num-6').addEventListener('click', onClickNumber);
document.querySelector('#num-7').addEventListener('click', onClickNumber);
document.querySelector('#num-8').addEventListener('click', onClickNumber);
document.querySelector('#num-9').addEventListener('click', onClickNumber);

const onClickOperator = (op) => () => {
  if(numOne) {
    operator = op;
    $operator.value = op;
  } else {
    alert('숫자를 먼저 입력하세요.');
  }
}
document.querySelector('#plus').addEventListener('click', () => onClickOperator('+'));
document.querySelector('#minus').addEventListener('click', () => onClickOperator('-'));
document.querySelector('#divide').addEventListener('click', () => onClickOperator('/'));
document.querySelector('#multiply').addEventListener('click', () => onClickOperator('*'));
document.querySelector('#calculate').addEventListener('click', () => {});
document.querySelector('#clear').addEventListener('click', () => {});

// 고차함수(high order function) => 중복함수를 제거하기 위해
/* const num = (매개변수) => {
  return () => {
    console.log(매개변수);
  };
};

const num = (매개변수) => () => {
  console.log(매개변수);
}; */