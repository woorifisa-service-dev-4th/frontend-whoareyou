import { useContext, createContext, useReducer } from 'react';
import { postDummyData, commentDummyData, imageDummyData } from '../model/initData';

const QnAContext = createContext();
const QnADispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'COMMENT_POST':
      const newComments = [...state.commentData, action.newComment];
      return {...state, commentData: newComments};
    case 'RECOMMENT_POST':
      const newReComments = [...state.commentData, action.newReComment];
      return {...state, commentData: newReComments};
    case 'COMMENT_UPDATE':
      const updateComments = state.commentData.map(comment => comment.id === action.updatedComment.id ? action.updatedComment : comment);
      return {...state, commentData: updateComments};
    case 'RECOMMENT_UPDATE' :
      const updateReComments = state.commentData.map(comment => comment.id === action.updatedComment.id ? action.updatedComment : comment);
      return {...state, commentData: updateReComments};
    case 'COMMENT_DELETE':
      const deleteComments = state.commentData.map(comment => comment.id !== action.deletedComment.id);
      return {...state, commentData: deleteComments};
    case 'RECOMMENT_DELETE':
      const deleteReComments = state.commentData.map(comment => comment.id !== action.deletedComment.id);
      return {...state, commentData: deleteReComments};
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
}

export const useQnAContext = () => {
  return useContext(QnAContext);
}

export const useQnADispatch = () => {
  return useContext(QnADispatchContext);
}

const QnAProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, {postData: postDummyData, commentData: commentDummyData, imageDummyData: imageDummyData, selectedCategory: "ALL", selectedSection: "ALL", selectedSort: "최신순",});
  return (
    <QnAContext.Provider value={state}>
      <QnADispatchContext.Provider value={dispatch}>
        {children}
      </QnADispatchContext.Provider>
    </QnAContext.Provider>
  )
}

export default QnAProvider
