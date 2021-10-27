# 2021.10.27(WED) 노마드 코더 바닐라 JS로 크롬 앱 만들기 강의

## 2.4 Booleans

- true
- false
- null : variable 안에 어떤 것이 없다는 것을 확실히 하기 위해 사용
- undefined : 어떤 variable이 메모리에는 있으나, 값이 없을 때 출력됨

```JS
const amIFat = null;
let something;
console.log(amIFat);
console.log(something);
```
```
// 출력결과

null
undefined
```

### Reference
> https://nomadcoders.co/javascript-for-beginners/lectures/2877

<br>

## 2.5 Arrays

- 파이썬, C언어에서 이미 배운 내용

```JS
// 2.5 Arrays
// Get Item from Array
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

console.log(daysOfWeek)
console.log(daysOfWeek[4]);

// Add one more day to the array
daysOfWeek.push('Sun');

console.log(daysOfWeek);
```
```
// 출력 결과

["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

Fri

["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
```

### Reference
> https://nomadcoders.co/javascript-for-beginners/lectures/2878