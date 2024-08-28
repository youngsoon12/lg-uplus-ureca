import Main from "./Page/Main";
import Test from "./Page/Test";
import LoginForm from "./Components/dy0828/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookPage from "./Components/dy0828/BookPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/main" element={<Main />} />
        <Route path="/book" element={<BookPage/>} />
        {/* <Test /> */}
      </Routes>
    </Router>
  );
}

export default App;
