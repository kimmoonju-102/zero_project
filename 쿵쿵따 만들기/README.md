## 쿵쿵따 만들기
1. 몇 명이 참가할지 (prompt 함수)
   - 취소를 누르면 다음 코드가 실행되지 않게
2. 입력할 수 있는 단어를 세글자로 고정
   - 사용자가 input 이벤트를 발생시길 때 입력한 글자가 세 글자인지 확인
   - 세글자가 아니면 다시 입력
---
</br>

## 문제풀이
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
- 이처럼 number 값에 따라 if 문으로 나머지 코드를 감싸면 됩니다. prompt 함수에서 취소를 눌렀다면 값이 null이 될 것이고, 그 값이 Number 함수에 들어가면 NaN이 됩니다. NaN은 if 문에 들어가면 항상 false로 취급되므로 number가 null 이면 if 문 내부는 실행되지 않습니다.