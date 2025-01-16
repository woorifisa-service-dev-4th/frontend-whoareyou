import { createContext, useContext, useReducer } from "react";
import { postDummyData } from "../model/initData";

export const PostDataContext = createContext();
export const PostDataDispatchContext = createContext();
export const TodoProvider = ({ children }) => {
  const [postData, dispatch] = useReducer(reducer, postDummyData);

  return (
    <PostDataContext.Provider value={postData}>
      <PostDataDispatchContext.Provider value={dispatch}>
        {children}
      </PostDataDispatchContext.Provider>
    </PostDataContext.Provider>
  );
};

export const useBoardData = () => useContext(PostDataContext);

export const reducer = (postData, action) => {
  const postDatas = postData;
  switch (action.type) {
    case "ADD":
      return postDatas;
  }
};
