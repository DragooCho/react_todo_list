# 리액트 투투 리스트 어플리케이션 [![HitCount](http://hits.dwyl.com/dragoocho/react_todo_list.svg)](http://hits.dwyl.com/dragoocho/react_todo_list)

![screenshot](https://github.com/DragooCho/TIL/blob/main/image/cap6.png?raw=true)

<br />
<br />

## 주요 기술 스택

- JavaScript 
- React 17.0.1
- Node.js

<br />
<br />

## 구현 배경

- JavaScript로 구현했던 프로젝트를 React에 맞춰 구현 했습니다.
- React·js의 컴포넌트의 활용법 기초개념과 관련된 여러 라이브어리들를 경험하고  
  활용하는 감각을 쌓는데 많은 도움이 많이 되었습니다.
- 이전의 바닐라 자바스크립트로 프로그래밍했던 To-do List의 미흡했던 기능을 보안하고  
   좀 더 스타일링 있게 꾸몄습니다.
  <br />
  <br />

## 구현에 힘들고 아쉬웠던 점

- 바닐라 JS에서 구현했던 '할 일 목록의 영구저장' 을 리액트에서 구현 못한점.
- openweathermap의 API를 무료로 사용 할 수 있다고는 하지만 응답과 요청을 조금만 많이 거쳐도  
  API block으로 날씨정보를 웹에서 출력을 못하는 현상이 생긴점.
- 웹페이지의 세로고침 없어도 요청작업이 1000번 이상 나오는 현상을 아직 이해 못한점.
  <br />
  <br />

## 기능 추가

![](https://github.com/DragooCho/TIL/blob/main/image/wed.png?raw=true)

- 자신의 위치한 날씨 상황을 간략히 보여주는 이미지를 구현했습니다.
  <br />
  <br />

## File-Tree

<br />
<p>📦src</p>
<p> ┣ 📂todolistwork</p>
<p> ┃ ┣ 📂scssArea</p>
<p> ┃ ┃ ┣ 📜TodoInsert.scss</p>
<p> ┃ ┃ ┣ 📜TodoList.scss</p>
<p> ┃ ┃ ┣ 📜TodoListItem.scss</p>
<p> ┃ ┃ ┗ 📜TodoTemplate.scss</p>
<p> ┃ ┣ 📜TimeClock.js</p>
<p> ┃ ┣ 📜TodoInsert.js
<p> ┃ ┣ 📜TodoList.js</p>
<p> ┃ ┣ 📜TodoListItem.js</p>
<p> ┃ ┣ 📜TodoTemplate.js</p>
<p> ┃ ┗ 📜Weather.js</p>
<p> ┣ 📜App.css</p>
<p> ┣ 📜App.js</p>
<p> ┣ 📜index.css</p>
<p> ┣ 📜index.js</p>
<p> ┗ 📜reportWebVitals.js</p>
<br />
<br />

## DEMO

https://dragoocho.github.io/react_todo_list/
