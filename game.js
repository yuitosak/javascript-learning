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


console.log(`===バトル開始===`);
console.log(`${player.name}vs${enemy.name}`);

while(enemy.health>0 && player.health>0){
    //プレイヤーの攻撃
    console.log(`🔥 ${player.name} の攻撃！`);
    enemy.health-=player.attack;
    console.log(`🛡️ ${enemy.name}の残りHP:${enemy.health}`);

    if(enemy.health<=0){
        console.log(`${enemy.name}を倒した。`);
    }else{
        console.log(`${enemy.name}はまだ生きている`);
    }
    //敵の攻撃
    console.log(`💀${enemy.name}の攻撃`);
    player.health-=enemy.attack;
    console.log(`🛡️ ${player.name}の残りHP:${player.health}`);

    if(enemy.health<=0){
        console.log(`${enemy.name}を倒した。`);
    }else{
        console.log(`${enemy.name}はまだ生きている`);
    }

    if(player.health<50){
        console.log(`💊 ${player.name}は回復ポーションを使った`);
        player.health+=20;
    }

    //現在のゲーム状況を表示
    console.log("=== "+ gameTitle+ " ===");
    console.log("プレイヤー情報：",player);
    console.log("敵キャラクター情報：",enemy);

}




//レベルアップ処理
player.level+=1;
player.attack=Math.floor(player.attack*1.5); //小数点以下を切り捨て
console.log(`🆙 ${player.name}はレベル${player.level}になった。`);
console.log(`⚔ ${player.name}の攻撃力:${player.attack}`);


