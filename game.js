//プレイヤー情報
let player={
    name:"勇者",
    health:100,
    attack:10,
    defense:5,
    level:1
};

//敵キャラクター情報
let enemy={
    name:"スライム",
    health:25,
    attack:5
};

//ゲームタイトル
const gameTitle="勇者の冒険";

//現在のゲーム状況を表示
console.log("=== "+ gameTitle+ " ===");
console.log("プレイヤー情報：",player);
console.log("敵キャラクター情報：",enemy);

console.log(typeof player.name);  // 何が表示される？
console.log(typeof player.health);
console.log(typeof gameTitle);

