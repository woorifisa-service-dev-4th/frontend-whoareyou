import { DataStatus } from "../constants/status";
import { classData } from "../constants/class";
import { categoryData } from "../constants/category";
export const postDummyData = [
  {
    id: 0,
    body: {
      title: "Test Data 0",
      content: "This is the first test data",
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
      title: "Test Data 1",
      content: "This is the first test data",
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
      title: "Test Data 3",
      content: "This is the first test data",
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
