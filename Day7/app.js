// Day6

/*
const player = ["nico", 10, true];
console.log(player[0], player[1], player[2]);
*/


// Objects 사용
const player = {
    name: "Geun",
    points: 10,
    fat: true,
};
console.log(player);
console.log("player.name :", player.name);
console.log("player['name'] :", player["name"]);

player.fat = false;
console.log(player);
// player = false;


// 객체 추가 및 업데이트
player.lastname = "Park";
player.points = player.points + 15;
console.log(player);