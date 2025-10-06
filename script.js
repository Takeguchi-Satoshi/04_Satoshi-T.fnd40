'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const input = document.getElementById("inputName");                 //名前入力欄
const register = document.getElementById("registration");           //追加ボタン

const rouletteButton = document.getElementById("rouletteButton");   //ルーレットボタン
const rouletteMember = document.getElementById("member");           //参加者の名前
let notAnsweredMember = document.getElementById("notAnswered");     //まだ指名されてない人の名前
let answerPerson = document.getElementById("answerPerson");         //指名された人の名前


const todayMember = [];
let currentMember = [];

// 追加ボタンのクリックを検出して関数の呼び出し
register.addEventListener("click", registrationMember);             //イベントトリガ

// 入力された参加者の名前を配列に格納＋表示する
function registrationMember(){
  if(input.value !== ""){
    todayMember.push(` ${String(input.value)}さん`);                  //入力された名前を表示する
    input.value = "";                                               //入力欄を初期化
  } else {
    window.alert(`参加者を入力してください`)                          //うまく処理できないので後で実装
  } 

  rouletteMember.innerText = todayMember;                           //表示用(ルーレットで変更しない)
  notAnsweredMember.innerText = `未指名者：`+todayMember;            //指名されたらその人を削除する
  currentMember = todayMember.concat();
}



// ルーレットボタンのクリックを検出して関数の呼び出し
rouletteButton.addEventListener("click", roulette);

// ランダムに回答者を指名する関数を呼び出す、全員指名されたら未指名者をリセットする
function roulette(){
  if(todayMember[0] === undefined){
    window.alert(`参加者を入力してください`)
    return ;
  } 
  if(currentMember.length < 1){
    currentMember = todayMember.concat();
  }
  answerPerson.innerText = `🙌🙌　${makeRandom(currentMember)}　🙌🙌`;
}

// ランダムに回答者を指名する関数
function makeRandom(member) {
  const randomIndex = Math.floor(Math.random() * member.length);
  const randomMember = member[randomIndex]; 

  const newMember = member.filter( (name) => name !== randomMember); //指名された名前を除去する

  currentMember = newMember;                                         //未指名者を除去した配列を反映して
  notAnsweredMember.innerText = `未指名者：`+currentMember;           //未指名者の表示を更新する

  return randomMember;
}

