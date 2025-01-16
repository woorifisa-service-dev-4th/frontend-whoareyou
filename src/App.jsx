import "./App.css";
import QnAProvider from "./contexts/QnAContexts";
import DefaultLayout from "./layouts/DefaultLayout";
import AppRouter from "./Router";

function App() {
  return (
    <>
      <DefaultLayout>
        <QnAProvider>
          <AppRouter />
        </QnAProvider>
      </DefaultLayout>
    </>
  );
}
export default App;