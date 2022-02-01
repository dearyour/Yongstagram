# 필수적인 CSS 배치 정리 
```
- position :relative  자기자신기준 배치  (위치상 부모) 이거아래에 absolute 존재
- positon : absolute 부모기준 배치
- position: fixed; 브라우저 기준 배치 
```
```
- display: flex;  div는 세로로쌓이는데 div가 flex하면 가로로쌓임 
- (일단 flex를 해줘야 justify-content와 align-items을 사용가능)

- flex-wrap: wrap; 플렉스한 아이템 가로넓이 초과하면 아래로 줄바꿈
```
```
플렉스를 해주면 이제 구후 속성인
justify-content  :center 는  가로(수평)기준으로 가운데로 놓는것
justify-content : flex-end  는  가로(수평)기준으로 오른쪽끝으로 놓는것
justify-content: space-between; 가로기준 화면 양끝에 맞게 분배
align-items: center;  세로(수직)기준으로 가운데에 놓는것
align-items: flex-start; 세로(수직)기준으로 맨위에 놓는것

align-content : flex-start; 세로(수직)기준으로 맨위에 놓는것
align-content : center; 세로(수직)기준으로 가운데에 놓는것
(flex-wrap 이 있야지만 동작함) align-content보단 items를 많이씀
```

```
세로줄 간격 띄울 때
   display: grid;
   row-gap: 8px;

배치 4개씩 반복시킬 때
   display: grid;
   grid-template-columns: repeat(4,1fr);
   grid-gap: 1rem;
```

```
헤더에서 
marigin: 0 auto;
상하는 딱붙게 만들고 좌우 auto는 가로 중앙에 배치한다는 뜻이다.
 그리고 자연스럽게 좌우 여백은 균등하게 배분된다.
```

```
스크롤이 내려가도 특정화면에 고정시킬때 사용 
  position: sticky;
  top: 84px;
```
```
어떤 레이아웃이 아래로 묻힐 때 position 지정 후 
   position: relative;
   z-index: 2;
```
