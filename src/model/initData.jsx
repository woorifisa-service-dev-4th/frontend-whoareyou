import { Status } from "./status";
export const postDummyData = [
  {
    id: 0,
    body: {
      title: "Test Data 0",
      content: "This is the first test data",
    },
    status: Status[0],
  },
];
export const commentDummyData = [
  {
    id: 0,
    body: {
      post_id: 0,
      content: "This is the first comment",
    },
    status: Status[0],
  },
  {
    id: 1,
    body: {
      post_id: 0,
      comment_id: 0,
      content: "This is the second comment",
    },
    status: Status[0],
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
