import { Post } from "./post";
export const postDummyData = [
  {
    id: 0,
    post: new Post({
      title: "Test Data 0",
      content: "This is the first test data",
    }),
    createAt: new Date(),
    status: true,
  },
  {
    id: 1,
    post: new Post({
      title: "Test Data 1",
      content: "This is the second test data",
    }),
    createAt: new Date(),
    status: true,
  },
];
