import "./App.css";
import QuestionBoard from "./components/Questionboard";
import QnAProvider from "./contexts/QnAContexts";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <>
      <DefaultLayout>
        <QnAProvider>
          <QuestionBoard />
        </QnAProvider>
      </DefaultLayout>
    </>
  );
}

export default App;
