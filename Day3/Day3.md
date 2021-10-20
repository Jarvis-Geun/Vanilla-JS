# 2021.10.20(WED) 노마드 코더 바닐라 JS로 크롬 앱 만들기 강의

## 2.0 Your First JS Project

- Console(콘솔) : 브라우저 자체에 내장되어있으나, 긴 자바스크립트 코드를 작성할 때는 불편하다.
- 자바스크립트를 작성할 때에는 콘솔이 아닌 VScode와 같은, 에디터를 사용한다.
<br>

### 작성코드
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Momentum</title>
</head>
<body>
    <script src="app.js"></script>
</body>
</html>
```

### 세부코드
```HTML
    <link rel="stylesheet" href="style.css">
```
```HTML
    <script src="app.js"></script>
```
- 위의 두 코드는 각각 CSS와 JavaScript를 연결해주는 HTML 코드이다.
- 다시 말해, HTML은 브라우저와 CSS/JavaScript를 연결해주는 접착제의 역할을 한다. 따라서 CSS나 JavaScript 파일을 브라우저에서 실행하여도 작성된 코드 자체만 출력되지만, HTML 파일을 브라우저에서 실행하면 코드가 아닌 프로그래밍 내용이 출력된다.

### Reference
> https://nomadcoders.co/javascript-for-beginners/lectures/2873

<br>

## 2.1 Basic Data Types

- 이미 아는 내용
- string, integer, float 등

### Reference
> https://nomadcoders.co/javascript-for-beginners/lectures/2874

<br>

## 2.2 Variables

자바스크립트에서 변수명을 짓는 방법 : 공백이 필요할 경우 붙여쓰되, 대문자로 쓴다.
- Ex. my name ==> myName

```javascript
// console.log('hi')

// console.log(5 + 2);
// console.log(5 * 2);
// console.log(5 / 2);
// console.log("Geun");

const a = 5;
const b = 2;
const myName = "Geun";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log(myName);
```

### Reference
> https://nomadcoders.co/javascript-for-beginners/lectures/2875