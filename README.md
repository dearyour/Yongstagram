# 필수적인 CSS 배치 정리 
```
- position :relative  자기자신기준 배치  (위치상 부모) 이거아래에 absolute 존재
- positon : absolute 부모기준 배치
- position: fixed; 브라우저 기준 배치 
```
```
position : relative  부모 태그
position : absolute; 자식 태그 
        right: 8px;
        left: 8px;
        top: 8px;
        bottom 8px;
        해당 부분에서 원하는 px만큼 공백을 만든다
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
프로필이미지 사이즈맞게 자동정렬 
.profile-image {
                width: 40px;
                height: 40px;
                border-radius: 10px;
                background-color: #edbaba;
                margin-right: 12px;
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
              }
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
단순 z-index만 사용했을때 비교할수가 없어서 적용 안됨 
position 작성해줘야 한다
```
```
스크롤바 생성
   height: 해당 부분의 높이 px;
   overflow-y: scroll;
   overflow-x: hidden;
```
```
flex-shrink: 0;
속성값이 0이면 flex container의 크기가 flex item의 크기보다 작아져도 flex item의 크기가 줄어들지 않고 원래 크기로 유지된다. 
속성값이 1 이상이면 flex container의 크기가 flex item의 크기보다 작아질 때 flex item의 크기가 flex container의 크기에 맞추어 줄어든다.
변화될 크기와 상관없이 크기값을 고정시키고 싶다면 flex-shrink:0 을 쓰자
그리고 나머지 div 태그 에서 
flex: 1; 
지정해주면 나머지 공간을 다 차지하게 된다 
```

---
```
firebase 서버실행 
firebase emulators:start --only functions
```

vscode 확장 프로그램
```
Sass

Live Sass Compiler
컨트롤 +P  그다음 >  Live Sass : Watch Sass

es7 React/Redux

```

```
defaultProps = { } , 
프롭스 기본 정의 ,  아무것도 전달못할때 undefined 에러 방지 

text-align-ceter; 중심 


프롭스내릴떄 정의부가 상층 소환부가 하층 
<컴포넌트명 프롭스내리는 이름 ={ 해당 컴포넌트 변수값 }> 
으로 정의 
컴포넌트 { } 뒤에 값이 해당 컴포넌트 데이터이고 
프롭스로 내려가는 이름은 컴포넌트 앞에 키 이름임 

userState에서 setDate 는 java의 setter 함수와 같은 로직 
data는 클래스에서 필드 변수임  

useRef (레퍼런스 사용하게함 주로 input부분에서 사용)
리액트 생애주기 useEffect
시작 -> 상태변화(리랜더) -> 소멸
Mount Update UnMount
(초기화) (예외처리작업) (메모리정리)
클래스형컴포넌트 사용하는것을 
함수형 컴포넌트에서사용하는것을 ReactHooks라고 명명
 ex) ()=> {} 화살표함수
useState , useEffect, useRef

클래스형컴포넌트의 문제점은 가독성이 좋지못하며
중복사용하는 코드가 많아 전체적인 코드길이가 길어짐
그래서 리액트훅을 사용한다.

useEffect(()=>{
	콜백함수
}, []);  의존성배열 , 이배열 내에 들어있는 값이 변화하면 
		콜백함수가 수행된다. 마운트 

useEffect(()=>{
	콜백함수
}, [data]);  
state의 data값이 변할때만 콜백함수가 실행된다.  업데이트


언마운트는 어떻게 ?  
useEffect(()=>{
	콜백함수부분
    return () =>{
	// unmount 시점에 실행됨 
   };
}, []); 


 
const usage = useMemo(() => { [

return {변수1,변수2,변수3};
}, [변화 할값] );


const { 변수1,변수2,변수3} = usage;



함수정의 reducer  = (state,액션종류(타입, 데이터) => {
  switch(action.type) {
   case 'INIT':{
    return action.data   -----> 새로운 state
   }

   default:
   return state;

   }
}



함수호출 dispatch(함수 정의 종류 , 전달할 data)

기본 export default 는 jsx한페이지당 하나의 값만 사용가능한데
단순export는 여러개 사용가능하다
그래서 기본 export default는 import 할때 단순히 써주지만
단순 export 여러개는 { } 로 비구조화 할당을 해줘서 써줘야한다.


justify-content : center; 
해당 태그,클래스,아이디 기준으로 가로축 기준으로 가운데에 위치
 

align-center : 세로축 기준으로 가운데에 둔다 . 

min-height : 100vh;   현재 크기의 100% 를 최소 높이로 가지겟다 

process.env.url     어떤경로에있든 절대경로로 url 지정

리덕스 정리 

이니셜스테이트가 스토어저장소 (리듀스폴더안)
rootRuducer 에서 
 생성자(액션)에서 만든  dispatch(액션(인자))  컴포넌트에서 사옹된것에
따라서 rootReducer에서 로직 처리 

call 동기함수
fork 비동기함수

왠만하면 중간로직에서는 데이터 처리가 완료될때까지 기다리는
call쓰는게 낫다 


```
```
vscode 확장 프로그램
```
Sass

Live Sass Compiler
컨트롤 +P  그다음 >  Live Sass : Watch Sass

es7 React/Redux

```

파이어베이스 서버키기 
firebase emulators:start --only functions

```
