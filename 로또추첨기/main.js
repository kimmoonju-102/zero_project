const candidate = Array(45).fill().map((v, i) => i + 1); // 1 ~ 45까지 뽑는 코드
const shuffle = [];
while (candidate.length > 0){
  const random = Math.floor(Math.random() * candidate.length); // 무작위 인덱스 뽑기
  const spliceArray = candidate.splice(random, 1); // 뽑은 값은 배열에 들어 있음. splice에 return값을 넣음
  const value = spliceArray[0]; // 배열에 들어 있는 값을 꺼내어
  shuffle.push(value); // shuffle 배열에 넣기
}
console.log(shuffle);

// for문 바꾸기
/* for (let i = candidate.length; i > 0; i--;){
  const random = Math.floor(Math.random() * i); // 무작위 인덱스 뽑기
  const spliceArray = candidate.splice(random, 1); // 뽑은 값은 배열에 들어 있음. splice에 return값을 넣음
  const value = spliceArray[0]; // 배열에 들어 있는 값을 꺼내어
  shuffle.push(value); // shuffle 배열에 넣기
}
console.log(shuffle); */

const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b); // 앞에서 6개 자르고 정렬
const bonus = shuffle[6]; // 7번째 공 가져오기
console.log(winBalls, bonus);


// showBall 함수로 빼줌 (중복제거)
const $result = document.querySelector('#result');

const drawBall = (number, $parent) => {
  const $ball = document.createElement('div');
  $ball.className = 'ball';
  $ball.textContent = number;
  $parent.appendChild($ball);
};

// [0, 1, 2, 3, 4, 5 ] -> [1000, 2000, 3000, 4000, 5000, 6000]
for(let i = 0; i < winBalls.length; i++) { 
  setTimeout(() => {
    console.log(winBalls[i], i);
    drawBall(winBalls[i], $result); 
  }, (i + 1) * 1000);
}

const $bonus = document.querySelector('#bonus');
setTimeout(() => {
  drawBall(bonus, $bonus);
}, 7000);
 