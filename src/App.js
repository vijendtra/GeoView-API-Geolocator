import InputForm from "./components/InputForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<InputForm />} />
      </Routes>
    </Router>
  );
};

export default App;
