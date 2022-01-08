# 2021.11.03(WED) 노마드 코더 바닐라 JS로 크롬 앱 만들기 강의

## 2.6 Objects

- List vs Objects : list는 모든 값이 같은 의미를 가지나, Objects는 각각의 값들이 다양한 데이터타입을 가지고 있다.

### 2.6.1 Objects 사용
```JS
const player = {
    name: "Geun",
    points: 10,
    fat: true,
};
console.log(player);
console.log("player.name :", player.name);
console.log("player['name'] :", player["name"]);

player.fat = false;
```

```
{name: 'Geun', points: 10, fat: true}
fat: true
name: "Geun"
points: 10

player.name : Geun
player['name'] : Geun
```

객체를 사용하면 위의 코드처럼 원하는 정보를 깔끔하게 정리할 수 있다. 하지만 아래의 경우처럼, 리스트를 사용하면 원하는 정보가 정확히 무엇인지, 데이터타입 등 여러 정보를 깔끔하게 정리할 수 없다.

### 2.6.2 List 사용
```JS
const player = ["nico", 10, true];
console.log(player[0], player[1], player[2]);
```

### 2.6.3 객체 선언할 때 const 사용
이전에 배운 바로는, const는 한번 정의되면 이후에 값을 변경할 수 없다고 배웠다. 객체에서도 마찬가지이다. 아래의 예시코드를 통해 확인해본다.

<br>

```JS
player.fat = false;
console.log(player);
```
```
// 출력결과

{name: 'Geun', points: 10, fat: false}
fat: false
name: "Geun"
points: 10
```
이전에 true로 선언한 fat 값이 `false`로 변경된 것을 확인할 수 있다.

```JS
player = false;
```

```
// 출력결과

app.js:21 Uncaught TypeError: Assignment to constant variable.
```
반면에 Object 자체를 변경하려고 하면 위와 같은 에러가 발생한다. 앞서 설명한, const의 특성 때문이다. const는 한번 선언되면 이후에는 값을 변경할 수 없기 때문이다.

> 따라서 객체 그 자체의 값을 변경하는 것은 불가능하지만, 객체 안의 무언가를 변경하는 것은 가능하다.

### 2.6.4 객체의 추가 및 업데이트
```JS
// 객체 추가 및 업데이트
player.lastname = "Park";
player.points = player.points + 15;
console.log(player);
```

```
// 출력결과

{name: 'Geun', points: 25, fat: false, lastname: 'Park'}
fat: false
lastname: "Park"
name: "Geun"
points: 25
```

<br>

### Reference
> https://nomadcoders.co/javascript-for-beginners/lectures/2879