import "./App.css";
import QuestionBoard from "./component/Questionboard";
import QnAProvider from "./contexts/QnAContexts";
import DefaultLayout from "./layouts/DefaultLayout";
function App() {
  return (
    <>
      <DefaultLayout>
        <QnAProvider>
          <QuestionBoard></QuestionBoard>
        </QnAProvider>
      </DefaultLayout>
    </>
  );
}

export default App;
