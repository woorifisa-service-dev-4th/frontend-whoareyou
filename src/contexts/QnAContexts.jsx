import { useContext, createContext, useReducer, useState } from "react";
import {
  postDummyData,
  commentDummyData,
  imageDummyData,
} from "../model/initData";
import { classData } from "../constants/class";
import { categoryData } from "../constants/category";
import { DataStatus } from "../constants/status";
export const postDummyData2 = [
  {
    id: 0,
    body: {
      title: "Test Data 0",
      content: "This is the first test data",
      like: 2,
      createdAt: new Date("2025-01-13T16:00:00"),
      classNum: classData[0],
      category: categoryData[0],
    },
    status: DataStatus[0],
  },
  {
    id: 1,
    body: {
      title: "Test Data 1",
      content: "This is the second test data",
      like: 4,
      createdAt: new Date("2025-01-11T12:00:00"),
      classNum: classData[1],
      category: categoryData[1],
    },
    status: DataStatus[0],
  },
  {
    id: 2,
    body: {
      title: "Test Data 2",
      content: "This is the third test data",
      like: 5,
      createdAt: new Date("2025-01-15T10:00:00"),
      classNum: classData[0],
      category: categoryData[1],
    },
    status: DataStatus[0],
  },
  {
    id: 3,
    body: {
      title: "Test Data 3",
      content: "This is the fourth test data",
      like: 1,
      createdAt: new Date("2025-01-14T10:00:00"),
      classNum: classData[2],
      category: categoryData[2],
    },
    status: DataStatus[0],
  },
];
const QnAContext = createContext();
const QnADispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE_POST":
      return;
    case "CREATE_COMMENT":
      return;
    case "CREATE_IMAGE":
      return;
    case "FILTER":
      return {
        ...state,
        selectedSection: action.selectedSection,
        selectedCategory: action.selectedCategory,
      };
    case "SORT":
      return {
        ...state,
        selectedSort: action.selectedSort,
      };
    default:
      return state;
  }
};

export const useQnAContext = () => {
  return useContext(QnAContext);
};

export const useQnADispatch = () => {
  return useContext(QnADispatchContext);
};

const QnAProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    postData: postDummyData2,
    commentData: commentDummyData,
    imageDummyData: imageDummyData,
    selectedCategory: "ALL",
    selectedSection: "ALL",
    selectedSort: "최신순",
  });
  return (
    <QnAContext.Provider value={state}>
      <QnADispatchContext.Provider value={dispatch}>
        {children}
      </QnADispatchContext.Provider>
    </QnAContext.Provider>
  );
};

export default QnAProvider;
