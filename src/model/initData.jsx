import { DataStatus } from "../constants/status";
import { classData } from "../constants/class";
import { categoryData } from "../constants/category";

export const postDummyData = [
  {
    id: 0,
    body: {
      title: "useState와 useReducer 중 어떤 상황에서 적합할까요?",
      content: "React에서 상태 관리를 할 때 useState와 useReducer를 선택하는 기준이 궁금합니다. 저는 현재 간단한 카운터 기능에는 useState를 사용하고 있는데, 프로젝트가 커지면서 상태가 더 복잡해지고 여러 액션을 처리해야 하는 상황이 생겼습니다. 이런 경우에도 여전히 useState를 사용하는 게 나을까요? 아니면 useReducer로 전환하는 게 더 좋은 선택일까요? 각각의 장단점이나 추천 사례가 있다면 알려주시면 감사하겠습니다.",
      like: 2,
      createdAt: new Date(),
      classNum: classData[0],
      category: categoryData[0],
    },
    status: DataStatus[0],
  },
  {
    id: 1,
    body: {
      title: "useEffect의 의존성 배열 설정 기준이 헷갈려요",
      content: "React에서 useEffect 훅을 사용할 때, 의존성 배열(dependencies)을 설정하는 기준이 헷갈립니다. 특정 값이 업데이트될 때만 useEffect를 실행하고 싶은데, 배열에 어떤 값을 넣어야 할지 혼란스럽습니다. 배열에 모든 관련 변수를 넣는 게 맞는지, 아니면 필요한 값만 넣어야 하는 건지 알려주세요. 예를 들어, 외부 API 호출 로직이 있는 경우 의존성 배열을 어떻게 설정해야 안정적으로 동작할까요?",
      like: 2,
      createdAt: new Date(),
      classNum: classData[1],
      category: categoryData[1],
    },
    status: DataStatus[0],
  },
  {
    id: 2,
    body: {
      title: "React에서 컴포넌트를 조건부 렌더링할 때 더 좋은 방법은?",
      content: "React에서 조건부 렌더링을 구현할 때 if-else 구문, 삼항 연산자, 논리 연산자(&&) 등 다양한 방식이 있습니다. 어떤 방식이 더 가독성이 좋고 유지보수에 유리할까요? 특정 상황에 따라 어떤 방법을 선호해야 하는지도 궁금합니다. 예를 들어, 복잡한 조건이 필요한 경우 가독성을 높이려면 어떤 구조를 사용해야 할까요?",
      like: 2,
      createdAt: new Date(),
      classNum: classData[2],
      category: categoryData[2],
    },
    status: DataStatus[0],
  },
];

export const commentDummyData = [
  {
    id: 0,
    body: {
      post_id: 0,
      content: "This is the 2 late comment",
      createdAt: new Date('2022-09-01T00:00:00.000Z').getTime(),
    },
    status: DataStatus[0],
  },
  {
    id: 1,
    body: {
      post_id: 0,
      comment_id: 0,
      content: "This is the 2 RECOMMENT",
      createdAt: new Date(),
    },
    status: DataStatus[0],
  },
  {
    id: 2,
    body: {
      post_id: 2,
      comment_id: 10,
      content: "This is the post 2 /  RECOMMENT",
      createdAt: new Date(),
    },
    status: DataStatus[0],
  },
  {
    id: 3,
    body: {
      post_id: 0,
      content: "This is the 1 comment",
      createdAt: '2021-09-01T00:00:00.000Z',
    },
    status: DataStatus[0],
  },
  {
    id: 4,
    body: {
      post_id: 0,
      comment_id: 3,
      content: "This is the 1 REcomment",
      createdAt: '2021-09-01T00:00:00.000Z',
    },
    status: DataStatus[0],
  },
  {
    id: 5,
    body: {
      post_id: 0,
      comment_id: 3,
      content: "This is the 1 2 RECOMMENT",
      createdAt: new Date(),
    },
    status: DataStatus[0],
  },
  {
    id: 6,
    body: {
      post_id: 0,
      content: "This is the 4 comment",
      createdAt: new Date(),
    },
    status: DataStatus[0],
  },
];
export const imageDummyData = [
  {
    id: 0,
    type: "post",
    relatedId: 0,
    imageUrl: "./src/assets/react.svg",
  },
  {
    id: 1,
    type: "comment",
    relatedId: 0,
    imageUrl: "./src/assets/react.svg",
  },
  {
    id: 2,
    type: "comment-comment",
    relatedId: 1,
    imageUrl: "./src/assets/react.svg",
  },
];
