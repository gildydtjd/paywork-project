# 서버 주소를 이용하여 TODO list 구현

유의 사항

- ts+react 웹 사이트 혹은 react-native 앱 개발 (react-native도 ts 가능)
- function 단위로 주석 설명
- 디자인 등 따로 설명이 없는 부분은 본인의 재량에 맡깁니다
- redux + redux-saga 사용
    - react-native, redux 모두 처음 시도하여 어려움이 있는 경우,  Async storage를 사용 가능하나 감점 있음

서버 URL이 있다는 가정으로 진행해주세요

 

Base URL (해당 서버 주소는 작동하지 않는 서버입니다)

```jsx
http://dummy-server.io/
```

# POST 생성

URL

```jsx
../todo
```

request

```json
{
	"content": "string"
}
```

response (200)

```json
{
	"msg": "string"
}
```

# GET 리스트 불러오기

URL

```jsx
../todo
```

request

```json
{ }
```

response (200)

```json
{
    "count": 2, //integer
    "todoList": [
        {
            "id": "string",
            "content": "string",
            "isCheck": true, //boolean
            "createdAt": "2021-05-26T11:51:05.097Z"
        },
        {
            "id": "string",
            "content": "string",
            "isCheck": false, //boolean
            "createdAt": "2021-05-26T16:15:25.729Z"
        }
    ]
}
```

# POST 수정

URL

```jsx
../todo/:id
```

request

```json
{ 
	"content": "string"
}
```

response (200)

```json
{
	"msg":"string",
	"content": "string"
}
```

# POST 체크

URL

```jsx
../todo/:id
```

방식: POST

request

```json
{ 
	"isCheck": true //boolean
}
```

response (200)

```json
{
	"msg": "string"
}
```

# POST 삭제

URL

```jsx
../todo/:id
```

request

```json
{ }
```

response (200)

```json
{
	"msg": "string"
}
```