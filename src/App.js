import logo from './logo.svg';
import './App.css';
import Create from './componant/Create'
import Read from './componant/Read'
import Update from './componant/Update'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="Create" element={<Create />}></Route>
          <Route path="/Read" element={<Read />}></Route>
          <Route path="/Update" element={<Update />}></Route>
        </Routes>
      </Router>


    </>

  );
}

export default App;
