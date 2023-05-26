let numOne = '';
let operator = '';
let numTwo = '';
const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');
const onClickNumber = (number) => () => {
  if (operator) {
    numTwo += number;
  }else {
    numOne += number;
  }
  $result.value += number;
}; //고차 함수 (high order function)
document.querySelector('#num-0').addEventListener('click', onClickNumber('0'));
document.querySelector('#plus').addEventListener('click', () => {});
document.querySelector('#minus').addEventListener('click', () => {});
document.querySelector('#divide').addEventListener('click', () => {});
document.querySelector('#multiply').addEventListener('click', () => {});
document.querySelector('#calculate').addEventListener('click', () => {});
document.querySelector('#clear').addEventListener('click', () => {});