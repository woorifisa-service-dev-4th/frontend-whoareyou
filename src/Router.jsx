import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostForm from "./components/posts/PostForm";
import QuestionBoard from "./components/Questionboard";
import Header from "./layouts/Header";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<QuestionBoard />} />
      <Route path="/post-detail/:id" element={<PostForm />} />
    </Routes>
  </Router>
);


export default AppRouter;
