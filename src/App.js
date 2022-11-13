import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import DashBoardPage from './Pages/DashBoardPage';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashBoardPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
