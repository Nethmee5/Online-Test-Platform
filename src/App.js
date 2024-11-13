import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from 'components/Header';
import Dashboard from 'pages/Dashboard';
import Test from 'pages/Test';
import Login from 'pages/Login';

function App() {
  const location = useLocation();
  const hideHeader = location.pathname === '/' || location.pathname === '/login';

  return (
    <div>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
