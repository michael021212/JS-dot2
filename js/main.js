'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {

    // 配列からランダムで1つ選んで代入する方法
    // const results = ['大吉', '中吉', '凶', '末吉'];
    // btn.textContent = results[Math.floor(Math.random() * results.length)];

    // Math.random()で生成される0以上1未満の数字nを、範囲によって分岐させtextContentを入れる
    // 範囲の設定によって確率を操作できる
    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = '大吉'; // 5%
    } else if (n < 0.2) {
      btn.textContent = '中吉'; // 15%
    } else {
      btn.textContent = '凶'; // 80%
    }
  });
}