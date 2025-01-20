import "./App.css";
import QnAProvider from "./contexts/QnAContexts";
import DefaultLayout from "./layouts/DefaultLayout";
import AppRouter from "./Router";

function App() {
  return (
    <>
      <QnAProvider>
        <DefaultLayout>
          <AppRouter />
        </DefaultLayout>
      </QnAProvider>
    </>
  );
}

export default App;

