# 2021.11.05(FRI) 노마드 코더 바닐라 JS로 크롬 앱 만들기 강의

## 2.7 Functions part One

- function : 계속 반복해서 사용할 수 있는 코드 조각

`이미 아는 내용이라 따로 정리하지는 않음`

### Reference
> https://nomadcoders.co/javascript-for-beginners/lectures/2880

<br>

## 2.8 Functions part Two

```JS
const player = {
    name: "Geun",
    sayHello: function(otherPersonsName)    {
        console.log("Hello! " + otherPersonsName + " Nice to meet you!");
    }
}

console.log(player.name);
player.sayHello("Lynn");
```
```
// 출력결과

Geun
Hello! Lynn Nice to meet you!
```
위의 코드에서 볼 수 있듯이, 객체내에 함수를 정의하여 사용할 수도 있다. 다만, 일반적으로 함수를 정의하는 것과 다른 방법을 사용한다는 것에 주의한다.
```JS
// 일반적인 함수 정의 방법

function sayHello(otherPersonsName) {
    console.log("Hello! " + otherPersonsName + " Nice to meet you!");
}


// 객체 내의 함수 정의 방법

const player = {
    name: "Geun",
    sayHello: function(otherPersonsName)    {
        console.log("Hello! " + otherPersonsName + " Nice to meet you!");
    }
}
```

### Reference
> https://nomadcoders.co/javascript-for-beginners/lectures/2881