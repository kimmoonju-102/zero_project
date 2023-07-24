const { body } = document;

const $table = document.createElement('table');
const $result = document.createElement('div');
const rows = [];
let turn = 'O';

// 이중 반복문 돌면서 몇번째 칸, 줄 인지 찾는다.(forEach (index))
const checkwinner = (target) => {
  // tr의 row index를 알 수 있다.
  const rowIndex = target.parentNode.rowIndex;
  // td의 cell index를 알 수 있다.
  const cellIndex = target.cellIndex;
  /* rows.forEach((row, ri) => {
    row.forEach((cell, ci) => {
      if (cell === target) {
        rowIndex = ri;
        cellIndex = ci;
      }
    });
  }); */
  //세 칸 다 채워졌나?
  let hasWinner = false;
  // 가로줄 검사
  if(
    rows[rowIndex][0].textContent === turn &&
    rows[rowIndex][1].textContent === turn &&
    rows[rowIndex][2].textContent === turn 
  ) {
    hasWinner = true;
  }
  // 세로줄 검사
  if (
    rows[0][cellIndex].textContent === turn &&
    rows[1][cellIndex].textContent === turn &&
    rows[2][cellIndex].textContent === turn 
  ) {
    hasWinner = true;
  }
  //대각선 검사
  if (
    rows[0][0].textContent === turn &&
    rows[1][1].textContent === turn &&
    rows[2][2].textContent === turn 
  ) {
    hasWinner = true;
  }
  if (
    rows[0][2].textContent === turn &&
    rows[1][1].textContent === turn &&
    rows[2][0].textContent === turn 
  ) {
    hasWinner = true;
  }
  return hasWinner;
};

const callback = (event) => {
  // 칸에 글자가 있나?
  if(event.target.textContent !== '') { // 칸이 이미지 채워져 있나?
    console.log('빈칸이 아닙니다.');
    return;
  } 
  // 빈칸이면
  console.log('빈칸입니다.');
  event.target.textContent = turn;
  // 승부 확인
  /* if(turn === 'O') {
    turn = 'X';
  } else if (turn === 'X') {
    turn = 'O';
  } */
  const hasWinner = checkwinner(event.target);
  if(hasWinner) {
    $result.textContent = `${turn}님이 승리!`
    // 승리 했을 땐 removeEventListener으로 다른 칸을 막아준다.
    $table.removeEventListener('click', callback);
    return;
  }

  //무승부 검사(칸이 꽉 찼을때)
  // flat로 이차 -> 일차원배열로 만든후 every 매서드로 반복문 돌려줌.
  const draw = rows.flat().every((td) => td.textContent);
  /* let draw = true;
  rows.forEach((row) => {
    row.forEach((cell) => {
      if (!cell.textContent) {
        draw = false;
      }
    });
  }); */
  if (draw) {
    $result.textContent = `무승부`;
    return;
  }
  // 삼항연산자
  turn = turn === 'O' ? 'X' : 'O';
};

/* arr = [
  [$td, $td, $td],
  [$td, $td, $td],
  [$td, $td, $td],
] */

for (let i = 0; i < 3; i++) {
  const $tr = document.createElement('tr');
  const cells = [];
  for (let j = 0; j < 3; j++) {
    const $td = document.createElement('td');
    cells.push($td);
    $tr.append($td);
  }
  rows.push(cells);
  $table.append($tr);
}
$table.addEventListener('click', callback); 
document.body.append($table);
document.body.append($result);