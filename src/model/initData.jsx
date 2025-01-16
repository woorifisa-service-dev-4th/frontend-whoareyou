import { DataStatus } from "../constants/status";
export const postDummyData = [
  {
    id: 0,
    body: {
      title: "Test Data 0",
      content: "This is the first test data",
      like: 2,
      createdAt: new Date(),
    },
    status: DataStatus[0],
  },
];
export const commentDummyData = [
  {
    id: 0,
    body: {
      post_id: 0,
      content: "This is the first comment",
      createdAt: new Date(),
    },
    status: DataStatus[0],
  },
  {
    id: 1,
    body: {
      post_id: 0,
      comment_id: 0,
      content: "This is the second comment",
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
