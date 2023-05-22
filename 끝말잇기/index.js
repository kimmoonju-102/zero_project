const number = parseInt(prompt('몇 명이 참가하나요?'), 10);
alert(number);
const yesOrNo = confirm('맞나요?');

document.querySelector('input').addEventListener('input', function() {
  console.log('글자입력');
});

document.querySelector('button').addEventListener('click', function() {
  console.log('클릭');
});

// 바깥으로 분리한 함수
/* const onClickButton = () => {
  console.log('버튼 클릭');
};

const $button = document.querySelector('button');
$button.addEventListener('click', onClickButton); */
