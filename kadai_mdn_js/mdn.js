// 現在の年月日を取得する
const today = new Date();
// 現在の年だけ取得する
const year = today.getFullYear();
// 現在の月だけ取得する
const month = today.getMonth()+1;
// 現在の日だけ取得する
const day = today.getDate();
// コンソールで現在の年月日を表示する関数の宣言と定義 
function date()  {
console.log(year+"年"+month+"月"+day+"日");
}
//関数date()の実行
date();