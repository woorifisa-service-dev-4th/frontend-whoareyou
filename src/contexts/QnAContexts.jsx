import { useContext, createContext, useReducer } from 'react';
import { postDummyData, commentDummyData, imageDummyData } from '../model/initData';

const QnAContext = createContext();
const QnADispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_POST':
      return;
    case 'CREATE_COMMENT':
      return;
    case 'CREATE_IMAGE':
      return;
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
  const [state, dispatch] = useReducer(reducer, {postData: postDummyData, commentData: commentDummyData, imageDummyData: imageDummyData});
  return (
    <QnAContext.Provider value={state}>
      <QnADispatchContext.Provider value={dispatch}>
        {children}
      </QnADispatchContext.Provider>
    </QnAContext.Provider>
  )
}

export default QnAProvider
