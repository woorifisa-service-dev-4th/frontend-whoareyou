import "./App.css";
import QuestionBoard from "./component/Questionboard";
import { TodoProvider } from "./contexts/BoardContext";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <>
      <DefaultLayout>
        <TodoProvider>
          <QuestionBoard />
        </TodoProvider>
      </DefaultLayout>
    </>
  );
}

export default App;
