// prompt 확인 눌렀을 때 코드 실행
const number = Number(prompt('몇 명이 참가하나요?')); // 취소를 누르면 Nan이 뜬다.

if(number) {
  const $button = document.querySelector('button');
  const $input = document.querySelector('input');
  const $word = document.querySelector( '#word' );
  const $order = document.querySelector( '#order' );
  let word; // 제시어
  let newWord; // 새로 입력한 단어

  const onClickButton = () => {
    if (!word || word[word.length - 1] === newWord[0] && newWord === 3) { // 제시어가 비어 있는가?
      // 비어 있다.
      word = newWord; // 입력한 단어가 제시어가 된다.
      $word.textContent = word;
      const order = parseInt($order.textContent); // 현재 순서
      if (order + 1 > number) {
        $order.textContent = 1;
      } else {
        $order.textContent = order + 1;
      }
    } else { // 올바르지 않은가
        alert('올바르지 않은 단어입니다');
    }
    $input.value = ''; // input 같은 입력값들은 value를 바꿔야 함.
    $input.focus();
  };
  
  const onInput = (event) => {
    newWord = event.target.value;
  };
  
  $button.addEventListener('click', onClickButton);
  $input.addEventListener('input', onInput);
}