import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from 'components/Header';
import Dashboard from 'pages/Dashboard';
import Test from 'pages/Test';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/test" element={<Test/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
