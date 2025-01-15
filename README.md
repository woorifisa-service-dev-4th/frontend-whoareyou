# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# frontend-whoareyou
편하게 질문하고, 답하고 서로가 보상 받는 환경을 만들겠습니다.

## Team
|                                                             **김성준**                                                              |                                                                  **김소민**                                                                  |                                                                       **마서영**                                                                       |                                                                  **박찬진**                                                                  | 
|:--------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------:|
| [<img src="https://avatars.githubusercontent.com/u/102035871?v=4" height=100 width=100> <br/> @sjghub](https://github.com/sjghub) | [<img src="https://avatars.githubusercontent.com/u/87076416?v=4" height=100 width=100> <br/> @minnie0175](https://github.com/minnie0175) | [<img src="https://avatars.githubusercontent.com/u/108069902?v=4" height=100 width=100> <br/> @luxihua](https://github.com/luxihua) | [<img src="https://avatars.githubusercontent.com/u/68864422?v=4" height=100 width=100> <br/> @developerchans](https://github.com/developerchans) 

## 기획 의도
편하게 질문하고, 답하고 서로가 보상 받는 환경을 만들겠습니다.

## demo 

## 프로젝트 목표(협업, Github 활용, Slack, React + Vite, Javascript, Figma)
- ISSUE를 활용하여 서로 할 일을 공유하며 개발 현황을 서로가 알 수 있다.
- ISSUE를 활용하여 발생한 버그를 해결한다.
![image](https://github.com/user-attachments/assets/800b0a4d-0657-4ae8-94a5-b77aa6b322b1)
- Pull Request를 통해서 공통 Repo를 관리하는 방법을 배우고 Code Review를 통해서 서로의 코드를 논의한다.
![image](https://github.com/user-attachments/assets/79c2553c-ff71-411f-8511-c083b6cb268e)
- Branch Protect를 이용하여 협업 환경이 망가질 것을 대비한다.
![image](https://github.com/user-attachments/assets/20df8b7f-be07-4f84-a07f-1643bf1f98ad)
- Slack bot을 활용하여 Event에 빠르게 대처 할 수 있도록한다.
![image](https://github.com/user-attachments/assets/17563a09-1b26-4363-8c8f-56b47a3ec4f0)
- Github Project를 이용하여 할 일을 관리한다.
- HTML과 CSS 실습을 통해 개발 역량을 키운다.
- Tailwind CSS를 활용하여 실습
- Figma를 통해 간단한 디자인을 하고 디자인에 따른 CSS 적용 방식을 학습한다.


## css style 규칙

## 협업 규칙
Branch Push는 무조건 생성한 branch로 진행
<br>
Merge는 팀원 1명 이상의 Review를 받아야 merge 진행
1. 이슈(ISSUE)를 통해 할 일을 등록한다.
2. 해당 이슈번호를 이용하여 브랜치를 생성한다.
브랜치 명: {<타입>: <이슈 번호>}
ex: feat/1
3. Commit은 {<타입>: [#이슈번호] <commit 내용>} 으로 정의한다.
4. Push는 무조건 위에 생성한 브랜치로 생성한다.
5. github Repo에서 Pull Request를 Dev branch로 요청한다.
6. Merge한 담당자는 해당 Issue를 close한다.

## <타입> 리스트
```
  Issues: {#이슈번호} 
  Resolves: {#이슈번호}
  See also: {#이슈번호}
  feat    : 기능 (새로운 기능)
  fix     : 버그 (버그 수정)
  refactor: 리팩토링
  style   : 스타일 (코드 형식, 세미콜론 추가: 비즈니스 로직에 변경 없음)
  docs    : 문서 (문서 추가, 수정, 삭제)
  test    : 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)
  chore   : 기타 변경사항 (빌드 스크립트, 패키지 매니저 설정 수정 등)
```


